import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewCart from '../Review-cart/ReviewCart';
import "../Reviews/Review.css"

const Review = () => {
    const [reviews, setReview]=useReview();
    return (
        <div>
            <h1 className='review-title'> All Customers Reviews</h1>
            <div className='cart'>
                {
                 reviews.map(review =><ReviewCart
                 key={review.id}
                 review={review}
                 ></ReviewCart>)
                }

            </div>
        </div>
    );
};

export default Review;