import React from 'react'
import "../css/productDetail.css"
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
function ProductDetail(props) {
  const { productss, title, image, price, addToBasket, onSearch, products} = props

  const { id } = useParams()
  const url = "https://fakestoreapi.com/products/" + id
  const { data: product, isPanding, error } = useFetch(url)
  return (
    <>
      <div className="product-container">
        {
          product && <div className="product-card">
            <img src={product.image} alt={product.title} className='product-img' />
            <div className="product-about">
              <h3 className='product-title'>Product name:{product.title}</h3><br />
              <h3 className='product-desc'>Product description: {product.description}</h3>
              <button style={{marginTop:"5%",marginLeft:"30%"}} className="btn" onClick={()=>{ addToBasket({ title, image, price, id, productss }) }}>Sotib olish</button>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default ProductDetail