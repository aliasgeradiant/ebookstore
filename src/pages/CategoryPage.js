import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
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
      <Container>
        <Row>
          {
            data.map(item => 
              <Col lg={4} key={item.id}>
                <BookCard image={item.image} author={item.author} title={item.title} price={item.price} />
              </Col>  
            )
          }
        </Row>
      </Container>
    </>
  )
}

export default Category