import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-md">
        <span className="navbar-brand mb-0 h1">Phones Store</span>
        <button className="btn btn-outline-dark shadow-none">Корзина</button>
      </div>
    </nav>
  )
}

export default Navbar