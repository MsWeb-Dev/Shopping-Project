import React, { useState } from 'react'
import "./css/adminPanel.css"
import "../../src/components/css/card.css"
import ProductAddModal from '../components/ProductAddModal'
import NewProduct from '../components/NewProduct'
function AdminPanel() {
  const [productAddModal, setProductAddModal] = useState(false)
  const [productNew, setProductNew] = useState(false)
  const closeModal = () => {
    setProductAddModal(false)
  }
  // new product
  const [newProduct, setNewProduct] = useState([])
  const addProduct = (newProduct) => {
    setNewProduct((prev) => {
      return [...prev, newProduct]
    })
  }
  return (
    <div className='adminPanel' key={newProduct.id}>
      <h1>AdminPanel</h1>
      <div className="edited-card">
        <div className="btn-group">
          {productAddModal && <ProductAddModal closeModal={closeModal} addProduct={addProduct}></ProductAddModal>}
          <button className='btn-add' onClick={() => { setProductAddModal(true) }}>Maxsulot qo'shish</button>
          <button className="btn-edit">Mahsulotlarni tahrirlash</button>
          <button className="btn-del">MAxsulotlarni o'chirish</button>
        </div>
      </div>
      {productNew && <NewProduct newProduct={newProduct}></NewProduct>}
      {newProduct.map((item) => {
        return (
          <div className='card' key={item.id}>
            <div className="card-content">
              <img src={item.url} width="300" />
              <div className="card-container">
                <h2 className='product_title'>Name : {item.name}</h2>
                <span className='product-debt'>4.8$/moth</span>
                <span>CAtegory is {item.category}</span> <br />
                <span>customer is {item.customer}</span> <br />
                <span className='product-price'>{item.price}$</span>
                <br />
                <div className="btn-group">
                  <button className="btn-add">Maxsulot qo'shish</button>
                  <button className="btn-del">Maxsulot o'chirish</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}


    </div>
  )
}

export default AdminPanel