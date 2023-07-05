import React from 'react'

const BookCard = ({image, author, title, price}) => {
    let pr = Object.values(price);

  return (
    <div className='item'>
        <img src={image} alt='' />

        <div className='content'>
            <p className='author'>By: {author}</p>
            <h5>{title}</h5>
            <span>
                {`${pr[0] === "EUR" ? "€" : "$"} ${pr[1]}`}
            </span>
        </div>
    </div>
  )
}

export default BookCard