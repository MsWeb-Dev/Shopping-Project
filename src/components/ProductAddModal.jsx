import React from 'react'
import './css/ProductAddModalBack.css'
import ProductAddForm from './ProductAddForm'
import { createPortal } from 'react-dom'
function ProductAddModal({ closeModal, addProduct }) {
  return createPortal((
    <div className='ProductAddModalBack'>
      <div className='ProductAddModal'>
        <ProductAddForm addProduct={addProduct} closeModal={closeModal}></ProductAddForm>
      </div>
    </div>

  ), document.body)
}

export default ProductAddModal