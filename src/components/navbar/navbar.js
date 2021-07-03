import React from 'react';
import './navbar.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = ({addedCount}) => {

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-md">
        <Link to="/" className="title"><span className="navbar-brand mb-0 h1">Phones Store</span></Link>
        <div className="cart-count-container">
          <Link to="/cart"><button className="btn btn-outline-dark shadow-none">Корзина</button></Link>
          <div className={`count ${addedCount === 0 ? 'hide ': ''}`}>{addedCount}</div>
        </div>
      </div>
    </nav>
  )
}
const mapStateToProps = ({cart}) => {
  return {
    addedCount: cart.addedItems.length
  }
}

export default connect(mapStateToProps)(Navbar)