import React from 'react'
import { IoIosStar } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6"; 
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

function ProductInfo({product}) {
  return (
    <div className="details_item">
                    <h1 className='name'>{product.title}</h1>
                    <div className="start">
                         <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <FaRegStarHalfStroke />
                    </div>
                    <p className='price'>$<span>{product.price}</span></p>
                    <p className='brand'> Brand :<span>{product.brand}</span></p>
                    <h5> Availability : <span>{product.availabilityStatus}</span></h5>
                    <p className='desc'>{product.description}</p>
                    <h5 className='stock'><span> Hurry Up Only     <strong style={{color:"black"}}> {product.stock}</strong> Products letf in stock</span></h5>
                    <button  className='btn'>
                      <p>Add to car</p> 
                      <span ><FaCartArrowDown/></span> 
                  
                    </button>
                     <div className='icon'> 
                      <button className='btn_icon'> <span  ><FaRegHeart/></span></button> 
                      <button className='btn_icon'> <span  ><FaShare/></span></button> </div> 
                     
                </div>
                
  )
}

export default ProductInfo
