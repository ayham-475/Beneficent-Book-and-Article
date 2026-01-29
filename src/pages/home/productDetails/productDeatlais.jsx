import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

import ProductImage from './productImage';
import ProductInfo from './productInfo';
import './productDetails.css'
import SlideProducts from '../../../component/slideProducts/slideProducts';
function ProductDeatlais() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  const [loading, setloading] = useState(true);
  const [productCategory, setproductCategory] = useState([]);
  const [loadCategory, setloadCategory] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setProducts(data)
        setloading(false)
      } catch (error) {
        console.log(" the Erorr is  ", error);

      }
    }
    fetchProduct()
  }, [id])
  useEffect(() => {
    if (!product) return
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setproductCategory(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setloadCategory(false))
  }, [product?.category]
  );
  //  if(loadCategory) return <p>Loading .....</p>
  // console.log("productCategory ", productCategory)
  if (loading) return <p>Loading ....</p>
  return (

    <div>
      {
        loadCategory ? (
          <p>Loading .....</p>
        ) : (
          <div className="item_detailes">
            <div className="container">
              <ProductImage product={product} />
              <ProductInfo product={product} />
            </div>
          </div>)
      }


      {
        loadCategory ? (
          <p>Loading .....</p>
        ) : (
          <SlideProducts key={product.category} data={productCategory} title={product.category.replace("-", " ")} />
        )
      }
    </div>
  )
}

export default ProductDeatlais
