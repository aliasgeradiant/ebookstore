import React from 'react';
import {AiFillStar} from "react-icons/ai"

const BookCard = (item) => {
  const {image, price, author, title, review} = item;
  let pr = Object.values(price);

  return (
    <div className='bookcard item p-3'>
        <img src={image} alt='' />

        <div className='content'>
          <span>{[...Array(review.max)].map((star, i) => 
            <AiFillStar key={i} style={{color: i + 1 <= review.current ? "gold" : "#D4D4D4"}} />
          )}</span>
          <p className='author mb-0'>By: {author}</p>
          <h5>{title}</h5>
          <span>{`${pr[0] === "EUR" ? "€" : "$"} ${pr[1]}`}</span>
        </div>
    </div>
  )
}

export default BookCard