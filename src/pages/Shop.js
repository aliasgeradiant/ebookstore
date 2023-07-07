import Slider from 'rc-slider'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'rc-slider/assets/index.css';

const Shop = () => {
    
  return (
    <div className='shop-wrapper py-5'>
        <Container fluid>
            <Row>
                <Col lg={2} className='h-100'>
                    <aside className='text-start bg-light p-3'>
                        <div className='category-block'>
                            <h5>Category</h5>
                        </div>
                        <div className='category-block'>
                            <h5>By Author</h5>
                            <ul className='list-unstyled'>
                                <li><p className='m-0'>William Shakespeare</p></li>
                                <li><p className='m-0'>Agatha Christie</p></li>
                                <li><p className='m-0'>Barbara Cartland</p></li>
                            </ul>
                        </div>
                        <div className='category-block'>
                            <h5>By Price</h5>
                            <Slider range={100} />
                        </div>
                        <div className='category-block'>
                            <h5>By Review</h5>
                        </div>
                    </aside>
                </Col>

                <Col lg={10}>
                    <div className='products-wrapper text-start'>
                        <h4>Product</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Shop