import React, { useEffect, useState } from 'react'
import { getAllCategoriesHandler } from '../backend/controllers/CategoryController';
import { Link } from 'react-router-dom';

const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        setCategory(getAllCategoriesHandler);
    }, []);

    // console.log(category.data?.categories)

    return (
        <div className='category-wrapper mt-3'>
            {
                category.data?.categories.map(item => <div className='card' key={item._id}><Link to={`/category/${item.categoryName}`} className='text-decoration-none text-dark'>{item.categoryName}</Link></div>)
            }
        </div>
    )
}

export default Category