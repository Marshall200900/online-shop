import React, { useState } from 'react';
import './cart.scss';
import PhonesGrid from '../../components/phones-grid';
import { connect } from 'react-redux';
import { changeQuantity } from '../../actions';

const Cart = ({ addedItems }) => {
  let sum = 0;
  for(let i = 0;i<addedItems.length;i++) {
    sum += addedItems[i]['rom-price'][addedItems[i].choosenRom].price * addedItems[i].quantity;
  }
  return (
    <div className="cart">
      <div className="cart-inner">
        <div className="first-row">
          <div className="sum">{sum}руб</div>
          <ConfirmButton />
        </div>
        <ListOfItems items={addedItems}/>
      </div>
    </div>
  )
}
const mapStateToProps = ({ cart }) => {
  return {
    addedItems: cart.addedItems
  }
}
const ListOfItems = ({ items }) => {
  return (
    <ul className="list-of-items">
      {items.map((el, i) => <CartItem phone={el} key={i}/>)}
    </ul>
  )
}
const CartItem = ({phone}) => {
  return (
    <li>
      <div className="phone">
        <div className="phone-info">
          <div className="phone-title">{phone.name}</div>
          <b>Встроенная память:</b>&nbsp;
          {phone['rom-price'][phone.choosenRom].rom}gb&nbsp;
          <b>Цвет:</b>&nbsp;
          {phone['color-img'][phone.choosenColor].color}
        </div>
        <div className="phone-price">{phone['rom-price'][phone.choosenRom].price}руб</div>
      </div>
      <CartItemCounter item={phone}/>
    </li>
  )
}
const ConfirmButton = () => {
  return (
    <div className="btn btn-primary confirm" onClick={() => alert('Заказ оформлен! Спасибо за использование нашего магазина!')}>
      Оформить заказ
    </div>
  )
}
const CartItemCounter = connect()(({dispatch, item}) => {
  console.log(item);
  return (
    <div className="item-counter">
      <div className="quantity title">Количество: </div>&nbsp;
      <div className="quantity number">{item.quantity}</div>
      <div className="btn btn-primary change-number" onClick={() => dispatch(changeQuantity(1, item))}>+</div>
      <div className="btn btn-primary change-number" onClick={() => dispatch(changeQuantity(-1, item))}>−</div>
    </div>
  )
});




export default connect(mapStateToProps)(Cart);