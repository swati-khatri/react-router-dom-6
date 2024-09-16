import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
    <>
    <h1>Welcome to Products Page</h1>
    <input type='search' placeholder='search for products' />
    <nav>
        <Link to='featured' >Featured</Link>
        <Link to='new' >New</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Product