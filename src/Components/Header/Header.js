import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
    return (
        <div className='header-section' >
          <div className='header'>
          <div className='logo'>
              <h4>food <span>.</span> 
              <small> Corner</small>
              </h4>
            </div>
            <div className='link'>
            <Link to ='/' > HOME</Link>
                <Link to ='/review'> REVIEWS</Link>
                <Link to ='/dashboard' > DASHBOARD</Link>
                <Link to ='/blogs' > BLOGS</Link>
                <Link to ="/about">ABOUT</Link>
            </div>
          </div>
        </div>
    );
};

export default Header;