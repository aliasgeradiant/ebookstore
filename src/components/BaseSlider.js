import React, { useEffect } from 'react';
import Slider from 'react-slick';
import BookCard from './BookCard';


const BaseSlider = ({title, data}) => {
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  
  return (
    <div className='baseslider mt-5'>
        <h3 className='text-start'>{title}</h3>

        <Slider {...settings}>
          {
            data?.map(item => {
              return (
                <BookCard key={item.id} image={item.image} author={item.author} price={item.price} />
              )
            })
          }
        </Slider>
    </div>
  )
}

export default BaseSlider