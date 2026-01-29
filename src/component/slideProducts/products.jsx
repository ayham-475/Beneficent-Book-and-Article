import React, { useContext } from 'react'
import { IoIosStar } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cardContext';
import { FaCheckSquare } from "react-icons/fa";
function Products({item}) {
const { cartItems, addCart } = useContext(CartContext);
  const isCart =cartItems.some(i=> i.id===item.id);
  return (
    <div>    
     <div className={`product ${isCart ?'in-cart':''}`}>
        <div className="container">
        <Link to={`/products/${item.id}`} className="img_product">
        <span className='status_cart'><FaCheckSquare /> in cart</span>
       <img  src={item.images[0]} alt="omg" />
        </Link>
       <p className='name_product'>{item.title}</p>
        <div className="stars">
       <IoIosStar />
       <IoIosStar />
       <IoIosStar />
       <IoIosStar />
       <FaRegStarHalfStroke />
        </div>
        <p className='price'> <span>${item.price}</span></p>
        <div className="icons">
            <span className='btn_cart' onClick={()=>addCart(  )} ><FaCartArrowDown /></span>
            <span><FaRegHeart /></span>
            <span><FaShare   /></span>
        </div>
     </div>
     </div>
    </div>
  )
}

export default Products
