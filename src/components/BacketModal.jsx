import React, { useState } from 'react'
import Backet from './Backet'
// import { FaBasketballBall } from "react-icons/fa"
function BacketModal({ backet, setBacket, incr, decr, cardDelete, productPrice,products }) {
  const [basket, setBasket] = useState(false)
  const closeBacketModal = () => {
    setBasket(false)
  }

  return (
    <>
      {basket && <Backet products={products} closeBacketModal={closeBacketModal} backet={backet} setBacket={setBacket} incr={incr} decr={decr} cardDelete={cardDelete} ></Backet>}
      <div className="basked-container" onClick={() => setBasket(true)} >
        <div className='BasketBasket' style={{ width: "50px", height: "50px", backgroundColor: "blueviolet", display: "flex", position: "fixed", marginTop: "5%" }} />
      </div>
    </>
  )
}

export default BacketModal
