import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import png from '../../img/logo.png'
import { FaSearchengin } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import "./header.css";
import { CartContext } from '../context/cardContext';
export default function TopHeader() {
   const {cartItems}=useContext(CartContext);
   console.log(cartItems);

  return (
    <div className='top_Header'>
        <div className='container'>
          <Link to="/"> <img className='logo' src={png}  alt='logo'/></Link>
          <form className ="search-box">
            <input type='text' id='search' placeholder='srach for products'/>
            <button type='submit' > <FaSearchengin/></button>
          </form>
          <div className="header_icon">
            <div className='icon'>
              <FaRegHeart/>
              <span className='count'>0</span>      
            </div>
             <div className='icon'>
             <Link to="/cart"> <FaCartArrowDown/>
              <span className='count'>{cartItems.length}</span></Link>
            </div>
          </div>
        </div>
      
    </div>
  )
}
