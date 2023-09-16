import React, { useState } from 'react'
import "../components/Card.jsx"
import "./css/card.css"
function Card(props) {
  const { productss, title, image, price, id, addToBasket, onSearch, products } = props

  if(!productss){
    <h1 style={{marginTop:"10%"}}>Products not found</h1>
  }
  return (
    <>
      <div className="card-content">
        <img onClick={() => location.href = `/product/${products.id}`} src={productss.image} alt={productss.title} width="300" />
        <div className="card-container">
          <h2 key={productss.id}>Product name :{productss.title}</h2>
          <h3><i>Product price:</i> {productss.price}</h3>
          <h3>Raiting: {productss.rating.rate}</h3>
          <h3>Count :{productss.rating.count}</h3>
        </div>
        <div className="btn-shop">
          <button onClick={() => { addToBasket({ title, image, price, id, productss }) }} className='btn btn-buy'>Buy</button>
        </div>
      </div>
      {/* <div className='card' key={product.id}>
        <div className="card-content" style={{zIndex:"-1"}}>
          <img onClick={() => location.href = `/product/${product.id}`} src={product.image} alt={product.title} width="300" />
          <div className="card-container">
            <h2 className='product_title'>Name : {product.title}</h2>
            <span className='pro_title'>{product.title.slice(0, 20)} <br /><i className="i">⭐{product.rating.rate}    ({product.rating.count} price)</i> <br />
              <span className='product-debt'>4.8$/moth</span>
              <span className='product-price'><strike className="ox">400$</strike><br />{product.price}$</span>
            </span><br />
            
          </div>
          <div className="btn-shop">
            <button onClick={() => { addToBasket({ title, image, price, id }) }}  className='btn btn-buy'>Buy</button>
            </div>
        </div>
      </div> */}
    </>
  )
}

export default Card