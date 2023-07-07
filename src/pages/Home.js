import React from 'react'
import { Container } from 'react-bootstrap'
import Category from '../components/Category'
import BaseSlider from '../components/BaseSlider'
import { useSelector } from 'react-redux'

const Home = () => {
    const response = useSelector((state) => state.products.product);
    const bestseller = response.filter(res => res.category === "bestseller");
    const art = response.filter(res => res.category === "art");
    const horror = response.filter(res => res.category === "horror");
    const fantasy = response.filter(res => res.category === "fantasy");
    const romance = response.filter(res => res.category === "romance");

    return (
        <div className='home'>
            <Container>
                <section>
                    <h3 className='pt-2 m-0 text-start'>Category</h3>
                    <Category />

                    <BaseSlider title="Best Sellers" data={bestseller} />

                    <BaseSlider title="Art" data={art} />
                    <BaseSlider title="Horror" data={horror} />
                    <BaseSlider title="Fantasy" data={fantasy} />
                    <BaseSlider title="Romance" data={romance} />
                </section>
            </Container>
        </div>
    )
}

export default Home