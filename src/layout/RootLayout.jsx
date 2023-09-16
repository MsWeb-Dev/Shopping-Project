import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import "./css/rootlayout.css"
import Footer from '../components/Footer'
function RootLayout() {
  return (
    <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/adminPanel">Admin Panel</NavLink>
        </nav>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout