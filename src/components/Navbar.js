import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
        <h1>BrandName</h1>
        <ul>
            <li>Opportunities</li>
            <li>Experience</li>
        </ul>
        <div>
            <button>Login</button>
            <button>Signup</button>
        </div>
    </nav>
  )
}

export default Navbar
