import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import "./css/Backet.css"
import "./css/basket.css"
import ShopModal from './ShopModal'

function Backet({ closeBacketModal, backet, incr, decr, cardDelete, price,setBacket,products }) {
  const [shop, setShop] = useState(false)
  const colseShop = () => {
    setShop(false)
  }

  if(products){
    console.log("Prodact  is available");
  }else{
    console.log("Product is not aviable");
  }

  
  var totalPrice =0
  return createPortal((
    <div className='BacketModalBack'>
      <div className='BacketModal'>
        < div className='basket-modal-container'>
          
          {
            backet.map(item => (
              totalPrice +=item.price * item.count ,
              <div className='basked-modal' key={item.id}>
                <h1 className='basked-modal-title' style={{ fontSize: "20px" }}>{item.title}</h1>
                <div className="modal-container">
                  <img className='basked-modal-img' src={item.image} alt="" />
                  <span className='basked-modal-price'> Product price:  <i style={{ fontSize: "20px" }} className='basked-modal-price-i'>{Math.trunc(item.price) * item.count}$</i></span>
                  <div className='btn-group'>
                    <button onClick={() => decr(item.id)} className='btn-dec'>-</button>
                    <button className='btn-x'>{item.count}</button>
                    <button onClick={() => { incr(item.id) }} className='btn-inc'>+</button>
                  </div>
                  <button className="btn-delete" onClick={() => { cardDelete(item.id) }}>O'chirish</button>
                  <span>
                    {price}
                  </span>
                </div>
              </div>
            ))
          }
        
          {shop && <ShopModal colseShop={colseShop} setBacket={setBacket} closeBacketModal={closeBacketModal}></ShopModal>}
          <div className="TotalPrice">
             <h2 style={{marginLeft:'5%'}}>
              Umumiy narx:
              <span>
                {Math.trunc(totalPrice)}$
              </span>
             </h2>
          </div>
          <button className="btn-shop-button" style={{ background: "blue", color: "white", padding: "5px 5px", marginTop: "3%",marginLeft:"-2%",borderRadius:"8px" }} onClick={() =>setShop(true)}>Sotib olish</button>
        </div>
      
        <button onClick={closeBacketModal} className='btn-close-shop'>CLose</button>
      </div>
    </div>
  ), document.body)
}

export default Backet