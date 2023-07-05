import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import BookCard from '../components/BookCard';
import { useSelector } from 'react-redux';

const Category = () => {
  const {category} = useParams();
  const response = useSelector((state) => state.products.product);
  const data = response.filter(item => item.category === category);
  console.log(data)

  return (
    <>
      <Row>
        {
          data.map(item => 
            <Col lg={4} key={item.id}>
              <BookCard image={item.image} author={item.author} title={item.title} price={item.} />
            </Col>  
          )
        }
      </Row>
    </>
  )
}

export default Category