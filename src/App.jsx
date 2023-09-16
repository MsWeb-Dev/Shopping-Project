import './App.css'
// state
import { useState } from 'react'
// page
import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
// import Basket from './pages/Basket'
// react router dom
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// layout
import RootLayout from './layout/RootLayout'
import ProductLayout from './layout/ProductLayout'
import Product from './pages/helper/Product'
// import SearchPanel from './layout/SearchPanel'
import ProductDetail from './pages/helper/ProductDetail'
import AdminPanel from './pages/AdminPanel'
// import SearchPanelResult from './components/SearchPanelResult'


function App() {
  const [backet, setBacket] = useState([])
  const incr = (itemId) => {
    const newData = backet.map(item => {
      if (item.id === itemId) {
        const newCount = item.count + 1
        return {
          ...item,
          count: newCount
        }
      }
      else {
        return item
      }
    })
    setBacket(newData)
  }
  const decr = (itemId) => {
    const newData = backet.map(item => {
      if (item.id === itemId) {
        const newCount = item.count - 1
        if (newCount == 0) {
          e.target.disablet = true
        }
        return {
          ...item,
          count: newCount
        }
      }
      else {
        return item
      }
    })
    setBacket(newData)
  }

  const cardDelete = (btnId) => {
    setBacket((prev) => {
      return (
        prev.filter((item) => {
          return (btnId !== item.id)
        })
      )
    })
  }

  const addbasket = (item) => {
    const newbacket = {
      ...item,
      count: 1
    }
    setBacket([...backet, newbacket])
  }

  const addToBasket = (item) => {
    const length = backet.length
    if (length === 0) {
      const newBasket = {
        ...item,
        count: 1
      }
      setBacket([...backet, newBasket])
    } else {
      const prev = backet.filter(e => e.id === item.id)
      prev.map(item => (
        setBacket([item.count++, ...item])
      ))
      const newBasket = {
        ...item,
        count: 1
      }
      setBacket([...backet, newBasket])
    }
  }
  const [addProduct, setAddProduct] = useState([])
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout></RootLayout>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/product' element={<ProductLayout></ProductLayout>}>
          <Route index element={<Product backet={backet} setBacket={setBacket} addToBasket={addToBasket} addbasket={addbasket} incr={incr} decr={decr} cardDelete={cardDelete}  ></Product>}></Route>
          <Route path=':id' element={<ProductDetail></ProductDetail>}></Route>
        </Route>
        <Route path="/adminPanel" element={<AdminPanel addProduct={addProduct}></AdminPanel>}></Route>
      </Route>
    )
  )
  return (
    <>
      <h1 className='count' style={{ position: "fixed", marginTop: "100px", marginLeft: "50px", color: "red" }}>{backet.length == 0 ? " " : backet.length}</h1>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
