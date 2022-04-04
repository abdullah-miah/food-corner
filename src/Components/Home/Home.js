import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import '../Home/Home.css'
import ReviewCart from '../Review-cart/ReviewCart';

const Home = () => {
    const [reviews, setReview]= useReview();
    return (
            <div>
                <div className='home'>
            <div className='home-content'> 
              <h1> Best food in your corner.
              </h1>
              <p> Food corner maintain quality of products.
                      Best chef job in food corner. World famous recipe cooked in hear.
                      Quick home delivary in here.
                      
                  </p>
                  <button>Buy Now</button>

            </div>
            <div className='home-pic'>
                <img src={'https://i.insider.com/5bbd187101145529745a9895?width=700'}></img>
            </div>
        </div>
        <h1 className='review-title' >Customers Review</h1>
        <div className='cart'>
        {
            reviews.slice(0,3).map(review => <ReviewCart
            key={review.id}
            review={review}
            ></ReviewCart>)
        }
        </div>
        <p className='review-btn'><Link to="/review"> More review..</Link></p>
            </div>
    );
};

export default Home;