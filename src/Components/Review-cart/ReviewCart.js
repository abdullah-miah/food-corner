import React from 'react';
import "../Review-cart/ReviewCart.css";

const ReviewCart = (props) => {
    const {name, pic, ratings, des}= props.review;
    return (
        <div className='review-cart'>
            <img src={pic}></img>
            <div className='review-des'>
            <h4>Name: {name}</h4>
            <p className='des'>{des}</p>
            <p>Ratings: <span>{ratings}</span></p>
            </div>
        </div>
    );
};

export default ReviewCart;