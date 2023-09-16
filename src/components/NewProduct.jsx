import React, { useState } from 'react'
import Card from './Card'

function NewProduct({ newProduct }) {
  const [showProduct, setShowProduct] = useState([])

  return (
    <>
      {setShowProduct && <Card newProduct={newProduct}></Card>}
      <div>NewProduct</div>
      {newProduct && newProduct.map((item) => {
        return (
          <div className='card' key={item.id}>
            <div className="card-content">
              <img src={item.url} width="300" />
              <div className="card-container">
                <h2 className='product_title'>Name : {item.name}</h2>
                <span>CAtegory is {item.category}</span> <br />
                <span>customer is {item.customer}</span>
                <span className='product-price'><strike className="ox">400$</strike><br />{item.price}$</span>
                <br />
                <div className="btn-group">
                  <button className="btn-add">Maxsulot qo'shish</button>
                  <button className="btn-del">Maxsulot o'chirish</button>
                </div>
                {/* <button onClick={() => { addbasket({ title, image, price, id })}} className='btn'>Buy</button> */}
              </div>
            </div>
          </div>
        )
      })}

    </>
  )
}

export default NewProduct