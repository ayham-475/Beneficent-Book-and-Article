import React, { useEffect, useState } from 'react';
import "./home.css";
import Heroslider from '../../component/heroslider';

import SlideProducts from '../../component/slideProducts/slideProducts'; 
const categories=[
  "smartphones",
  "laptops",
  // "sports-accessories"
  // "sports-accessories",
];    
export default function Home() {
 const [products,setProducts]=useState({});
 const [loading,setloading]=useState(true);
const src= '/public/';
  useEffect(()=>{
  const fetchProduct=async()=>{
    try{
      const results=await Promise.all(
        categories.map(async(category)=>{
          const res =await fetch(`/data/${category}.json`);
          const data =await res.json();
          return {[category]:data.products}
        })
      );
      const productsData=Object.assign({},...results);
      setProducts(productsData)
      console.log("fetch sucess",productsData);
    }catch(error){
        //  console.log("Erorr Fetching ",error);
    }finally{
      setloading(false)
    }
  }
  fetchProduct();
},[])
// console.log("product ",products)
  return (
    <div>
      <Heroslider />
      {loading?
     ( <p>loading ....</p>):
     (
     categories.map((category) => (
        <SlideProducts
          key={category}
          data={products[category]}
          title={category.replace("-" ," ")}
        />
      ))
     )
      
    }
    
    </div>
  );
}



