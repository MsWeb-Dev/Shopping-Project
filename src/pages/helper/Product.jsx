import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../../components/Card'
import BacketModal from '../../components/BacketModal'
import ProductAddModal from '../../components/ProductAddModal'
import ProductAddForm from '../../components/ProductAddForm'
import "../css/product.css"
import ProductDetail from './ProductDetail'
function Product({ backet, setBacket, incr, decr, cardDelete, addbasket, addToBasket }) {
  // search panel
  const url = "https://fakestoreapi.com/products"
  const { data: products, isPanding, error } = useFetch(url)
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  // addProdact
  const [productAddModal, setProductAddModal] = useState(false)
  const [productNew, setProductNew] = useState(false)
  const closeModal = () => {
    setProductAddModal(false)
  }
  const [newProduct, setNewProduct] = useState([])
  const addProduct = (newProduct) => {
    setNewProduct((prev) => {
      return [...prev, newProduct]
    })
  }

  const [productDetail, setProductDetail] = useState(false)
  return (
    <>

      {/* AddProduct */}
      {productAddModal && <ProductAddModal closeModal={closeModal} addProduct={addProduct}></ProductAddModal>}

      <button className='btn-add-button' style={{
        background: "red", position: "fixed", marginTop: "5%", padding: "5px 8px", border: "none", borderRadius: '8px', right: "0", color: "white", background: "blueviolet"
      }} onClick={() => setProductAddModal(true)}>Add Product</button>


      <BacketModal style={{ marginTop: "4%" }} backet={backet} setBacket={setBacket} incr={incr} decr={decr} cardDelete={cardDelete} products={products}></BacketModal>
      <div className='search-result' style={{ marginTop: "10%" }}>
        <h1 style={{ color: "blueviolet", textAlign: "center" }}>Maxsulotlarni qidirish</h1>
      </div>
      <ul >
        <input type="text" value={searchTerm} onChange={handleSearch} style={{ width: "50%", marginLeft: "25%", outline: "none", border: "none", borderBottom: "1px solid blueviolet", display: "block" }} placeholder="🔍Maxsulot qidirish" />
        {products && products
          .filter((productss) => productss.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((productss) => (
            <div className="card" key={productss.id}>
              <Card products={productss} key={productss} onSearch={handleSearch} addbasket={addbasket} {...productss} addToBasket={addToBasket} productss={productss} />
              {/* PRoduct deatil in Basket */}
              {productDetail && <ProductDetail  {...productss} addToBasket={addToBasket} productss={productss}></ProductDetail>}
            </div>
          ))}
      </ul>

      <div key={products}>
        {isPanding && <h1 className='loading'>....Loading</h1>}
        {error && <h1 className='error'>{error}</h1>}
      </div>
      {newProduct.map((item) => {
        return (
          <div className='card' key={item.id}>
            <div className="card-content">
              <img src={item.url} width="300" />
              <div className="card-container">
                <h1 className='product_title'>Product name : {item.name}</h1>
                <h3 className='product-price'>Product price : {item.price}$</h3>
                <h4>Rating {item.category}</h4>
                <h4>Count is {item.customer}</h4>
              </div>
            </div>
            <button className='btn btn-buy  buy-btn'>Buy</button>
          </div>
        )
      })}
    </>
  )
}

export default Product