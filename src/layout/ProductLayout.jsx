import React from 'react'
import { Outlet } from 'react-router-dom'
import "./css/productlayout.css"
function ProductLayout() {
  return (
    <>
      <div className='box'>
        <Outlet></Outlet>
      </div>

    </>
  )
}

export default ProductLayout