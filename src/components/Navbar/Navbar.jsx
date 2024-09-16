import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

const navLinkStyle = ({ isActive }) => {
return {
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: isActive ? 'none' : 'underline',
}
}
function Navbar() {
  return (
    <nav>
        <NavLink style={navLinkStyle} to='/'>Home</NavLink>
        <NavLink style={navLinkStyle} to='/about'>About</NavLink>
    </nav>
  )
}

export default Navbar