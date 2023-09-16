import React from 'react'
import { useState } from 'react'
// import {v4 as unikalId} from "uuid"
import "./css/ProductAddForm.css"
function ProductAddForm({ addProduct, closeModal }) {
  const [newProduct, setNewProduct] = useState([
    {
      url: "",
      name: "",
      price: "",
      category: "",
      customer: "",
      // id:unikalId()
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    addProduct(newProduct);
    closeModal()
  }
  return (
    <div className='ProductAddForm'>
     
      <form onSubmit={handleSubmit}>
        <h3 style={{ textAlign: "center", color: 'salmon' }}>Product Add</h3>
        <label>
          <span>URl img</span>
          <input required type="text" onChange={(e) => { setNewProduct((prev) => { return { ...prev, url: e.target.value } }) }} />
        </label>
        <label>
          <span>Product name</span>
          <input required type="text" onChange={(e) => { setNewProduct((prev) => { return { ...prev, name: e.target.value } }) }} />
        </label>
        <label>
          <span>Product Price</span>
          <input required type="text" onChange={(e) => { setNewProduct((prev) => { return { ...prev, price: e.target.value } }) }} />
        </label>
        <label>
          <span>Category</span><br />
          <input required type="text" onChange={(e) => { setNewProduct((prev) => { return { ...prev, category: e.target.value } }) }} />
        </label>
        <label>
          <span>Product customer</span>
          <input required type="text" onChange={(e) => { setNewProduct((prev) => { return { ...prev, customer: e.target.value } }) }} />
        </label>
        <button type='submit' className=' btn-close btn' onClick={handleSubmit}>Yuklash</button>
      </form>
    </div>
  )
}

export default ProductAddForm