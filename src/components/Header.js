import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div className='header'>
        <h1>FAMOUS CITY HOTEL </h1>
        <nav className='navlist'>
          <a>Home</a>
          <a>About us</a>
          <a>Menu</a>
          <a>Login</a>
        </nav>
    </div>
  )
}
Header.defaultProps={update:"city hotel"}
export default Header