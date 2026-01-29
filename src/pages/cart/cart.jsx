
import React, { useContext, useState } from 'react'
import { CartContext } from '../../component/context/cardContext'
import { FaTrashAlt } from "react-icons/fa";
import './cart.css'
function Cart() {
    const [number ,setnumber]=useState(1);
   
    function handladd(){
     const n=[...number];
     n=n+1;
     setnumber(n);

    }
        const {cartItems}=useContext(CartContext);
  const total =cartItems.reduce((acc,item)=>acc+item.price,0);
  return (
    <div>
      <div style={{marginTop:'200px'}} className="checkout">
        <div className="ordersummary">
            <div className="items">
            {cartItems.length===0?(
                <p>Your  Cart is empty</p>
            ):
            cartItems.map((item,index)=>(
               <div className="item_cart" key={index}>
                <div className="image_name">
                 <img  src={item.images[0]} alt="omg" />
                    <div className="content">
                        <h4>{item.title}</h4>
                        <p className='price_item'>${item.price}</p>
                        <div className="quntity_control">
                          <span className=''>-</span>
                          <span className=''>{number}</span>
                         <button> <span onClick={handladd} className=''>+</span></button>
                        </div>
                    </div>

                </div>
                    <button className='delete_item' ><FaTrashAlt /></button>
               </div>
            ))
            
             
        }
            </div>

            <div className="bottom_summary">
                <div className="shop_table">
                    <p>Total :</p>
                    <span className='total_checkout'>${total.toFixed(2)}</span>
                </div>

            
            <div className="botton_div">
             <button className='b' style={{width:'100%', alignItems:'center'}} type='submit'>Place Order</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
