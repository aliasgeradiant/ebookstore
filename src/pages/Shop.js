import Slider from 'rc-slider'
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import 'rc-slider/assets/index.css';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import { getAllCategoriesHandler } from '../backend/controllers/CategoryController';

const Shop = () => {
    const response = useSelector((state) => state.products.product);
    const [category, setCategory] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [authorFilter, setAuthorFilter] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);

    useEffect(() => {
        setCategory(getAllCategoriesHandler);
        setFilterProduct(response);
    }, [response]);

    const author = [...new Set(response.map(item => item.author))]

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
        
        if (categoryFilter.length === 0) {
          setFilterProduct(response);
        } else {
          const filtered = response.filter((product) =>
            categoryFilter.some(cat => cat === product.category)
          );
          setFilterProduct(filtered);
        }

        // if (authorFilter.length === 0) {
        //     setFilterProduct(response);
        // } else {
        //     const filtered = filterProduct.filter((product) =>
        //       authorFilter.some(cat => cat === product.author)
        //     );
        //     setFilterProduct(filtered);
        // }
    }, [categoryFilter, authorFilter]);
    
    
    return (
        <div className='shop-wrapper py-5'>
            <Container fluid>
                <Row>
                    <Col lg={2} className='h-100 sticky-top' style={{top: "15px"}}>
                        <aside className='text-start bg-light p-3'>
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
                                    filterProduct.map(item => <Col key={item.id} lg={2}>
                                        <BookCard image={item.image} title={item.title} author={item.author} price={item.price} />
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