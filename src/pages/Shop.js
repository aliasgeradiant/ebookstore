import Slider from 'rc-slider'
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, FormControl, Row } from 'react-bootstrap'
import 'rc-slider/assets/index.css';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import { getAllCategoriesHandler } from '../backend/controllers/CategoryController';

const Shop = () => {
    const response = useSelector((state) => state.products.product);
    const [category, setCategory] = useState([]);
    const [author, setAuthor] = useState([]);

    const [categoryFilter, setCategoryFilter] = useState([]);
    const [authorFilter, setAuthorFilter] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [searchVal, setSearchVal] = useState("");

    // useEffect(() => {
    //     if (searchVal === "") {
    //         setFilterProduct(response)
    //     }
    //     else {
    //         setFilterProduct(filterProduct.filter((item) => {
    //             return item.category.toLowerCase().includes(searchVal.toLowerCase()) || item.title.toLowerCase().includes(searchVal.toLowerCase())
    //         }));
    //     }
    // }, [searchVal]);

    const handleSearch = e => {
        const searchValue = e.target.value;
        
        if (searchValue === "") {
            setFilterProduct(response);
        } else {
            setFilterProduct(response.filter((item) => {
                return item.category.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.title.toLowerCase().includes(searchValue.toLowerCase());
            }));
        }
    }

    useEffect(() => {
        setCategory(getAllCategoriesHandler);
        setFilterProduct(response);
        setAuthor([...new Set(response.map(item => item.author))]);
    }, [response]);


    const handleCategoryFilter = (e) => {
        if(e.target.checked) {
            setCategoryFilter([...categoryFilter, e.target.value]);
        } else {
            setCategoryFilter(categoryFilter.filter(ev => ev !== e.target.value));
        }
    }

    const handleAuthorFilter = e => {
        if(e.target.checked) {
            setAuthorFilter([...authorFilter, e.target.value]);
        } else {
            setAuthorFilter(authorFilter.filter(ev => ev !== e.target.value));
        }
    }

    useEffect(() => {
        if (categoryFilter.length === 0 && authorFilter.length === 0) {
            setFilterProduct(response);
            setAuthor([...new Set(response.map(item => item.author))]);
        } else {
            let filteredProduct = response;
            
            if (categoryFilter.length > 0) {
                filteredProduct = filteredProduct.filter((product) =>
                    categoryFilter.some(cat => cat === product.category)
                );
                setAuthor([...new Set(filteredProduct.map(item => item.author))]);
                console.log('author', author)
            }
            
            if (authorFilter.length > 0) {        
                filteredProduct = filteredProduct.filter((item) =>
                    authorFilter.some(auth => auth === item.author)
                );
            }
            setFilterProduct(filteredProduct);
        }
    }, [categoryFilter, authorFilter]);
    
    
    return (
        <div className='shop-wrapper py-5'>
            <Container fluid>
                <Row>
                    <Col lg={2} className='h-100 sticky-top' style={{top: "15px"}}>
                        <aside className='text-start bg-light p-3'>
                            <div className='category-block'>
                                <h5 className='text-bold my-2'>Search Products</h5>
                                <div className='p-2 '>
                                    <FormControl id="outlined-basic" autoComplete='off' type="text" onChange={handleSearch} label="Outlined" variant="outlined" placeholder='Search by title or category...' />
                                </div>
                            </div>

                            <div className='category-block'>
                                <h5>Category</h5>
                                <ul className='list-unstyled'>
                                    {category.data?.categories.map((item, i) => <li key={i}><Form.Check type='checkbox' label={item.categoryName.charAt(0).toUpperCase() + item.categoryName.slice(1)} value={item.categoryName} onChange={handleCategoryFilter} /></li>)}
                                </ul>
                            </div>
                            <div className='category-block'>
                                <h5>By Author</h5>
                                <ul className='list-unstyled'>
                                    <li>{
                                        author.map(auth => <Form.Check key={auth} type="checkbox" label={auth} value={auth} onChange={handleAuthorFilter} />)    
                                    }</li>
                                </ul>
                            </div>
                            <div className='category-block'>
                                <h5>By Price</h5>
                                <Slider range={100} max={100} />
                            </div>
                            <div className='category-block mt-3'>
                                <h5>By Review</h5>
                                <ul className='list-unstyled'>
                                    <li><Form.Check type="radio" label="5 Star" name='rating' /></li>
                                    <li><Form.Check type="radio" label="4 Star" name='rating' /></li>
                                    <li><Form.Check type="radio" label="3 Star" name='rating' /></li>
                                    <li><Form.Check type="radio" label="2 Star" name='rating' /></li>
                                    <li><Form.Check type="radio" label="1 Star" name='rating' /></li>
                                </ul>
                            </div>
                            <div className='category-block mt-3'>
                                <h5>Sorting</h5>
                                <ul className='list-unstyled'>
                                    <li><Form.Check type='radio' label="Best seller" name="sorting" /></li>
                                    <li><Form.Check type='radio' label="Price: Low to High" name="sorting" /></li>
                                    <li><Form.Check type='radio' label="Price: High to Low" name="sorting" /></li>
                                </ul>
                            </div>
                        </aside>
                    </Col>

                    <Col lg={10}>
                        <div className='products-wrapper text-start'>
                            <h4>Product</h4>
                            <Row>
                                {
                                    filterProduct?.map(item => <Col key={item.id} lg={2}>
                                        <BookCard {...item} />
                                    </Col>)
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Shop