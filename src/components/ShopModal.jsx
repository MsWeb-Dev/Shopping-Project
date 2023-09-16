import React, { useState } from 'react'
import { createPortal } from "react-dom"
import "./css/shopModal.css"
function ShopModal({ colseShop ,closeBacketModal}) {
    const [order,setOrder]=useState([
        {
            name:"",
            lastname:"",
            cartNum:"",
            location:""
            }
    ])

   console.log(order)

    const handleSubmit=(e)=>{
        e.preventDefault()
        colseShop()
        closeBacketModal()
       
      }
    console.log(order)
    return createPortal((
        <div className='modal_back'>
            <div className="modall">
                <form onSubmit={handleSubmit}  className='form-shop'>
                    <h3 style={{ textAlign: "center", color: 'salmon' }}>Product Shopping</h3>
                    <label>
                        {/* <span>Ism</span> */}
                        <input required type="text" placeholder='Ism' onChange={(e) => { setOrder((prev) => { return { ...prev, name: e.target.value } }) }} />
                    </label> <br />
                    <label>
                        {/* <span>Familya</span> */}
                        <input required type="text" placeholder='Familya' onChange={(e) => { setOrder((prev) => { return { ...prev, lastname: e.target.value } }) }} />
                    </label> <br />
                    <label>
                        {/* <span>Karta raqam</span> */}
                        <input required type="text" placeholder='Karta Raqam' onChange={(e) => { setOrder((prev) => { return { ...prev, cartNum: e.target.value } }) }} />
                        <br />
                        <br />
                    </label>
                    <label>
                        {/* <span>Mazil</span> */}
                        <input required type="text" placeholder='Manzil' onChange={(e) => { setOrder((prev) => { return { ...prev, location: e.target.value } }) }} />
                    </label>
                    <br /><br /><br />
                    <button onClick={handleSubmit} style={{marginLeft:"30%",borderRadius:"12px", width:"150px", height:"40px"}}  type='submit' className='btn btn-hover' >Sotib olish</button>
                </form><br />
            </div>
        </div>
    ), document.body)
}

export default ShopModal