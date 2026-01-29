import React from 'react'

function ProductImage({product}) {
  return (
    
        <div className="imgs_item">
                          <div className="big_item">
                           <img id='changed' src={product.images[0]} alt={product.title}/>
                          </div>
                          <div key={index}  className="sm_item">
                          {product.images.map((img,index)=>(
                              <img  src={img} alt={product.title } onClick={()=>{document.getElementById("changed").src=img}}/>
                          ))}
                          </div>
                      </div>
  )
}

export default ProductImage
