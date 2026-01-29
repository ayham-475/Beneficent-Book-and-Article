import React ,  { createContext, useEffect, useState} from 'react';

export const CartContext=createContext();
  function CardProvider({children}) {
    const [cartItems ,setCartItems] =useState(()=>{
        const saveCart =localStorage.getItem('cartItems');
        return saveCart ?JSON.parse(saveCart):[];
    });
//  const addincercart(){
    
//  }
    const addCart=(item)=>{
        setCartItems((profItems)=>[...profItems,{...item,quntity:quntity+1}] )
    }
    useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(cartItems));
    },[cartItems]);
  return (
    <div>
<CartContext.Provider value={{cartItems,addCart}}>
    {children}
</CartContext.Provider>
      
    </div>
  )
}

export default CardProvider
