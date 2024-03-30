import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
           
           
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Explore a curated world of literature at our online bookstore, where digital or print, every click opens a gateway to captivating reads. Join a community of enthusiasts, discovering the joy of storytelling in every page.</p>
                <SearchForm />
                
              
            </div>
        </header>
    </div>
  )
}

export default Header