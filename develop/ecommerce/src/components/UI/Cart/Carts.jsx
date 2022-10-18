import React, {useState} from 'react';
import {ListGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../../../assets/images/isologo.png';
import CartItem from './CartItem';

import {useDispatch, useSelector} from 'react-redux';
import {toggle} from '../../../store/Slices/cartUiSlice.js';

import './Carts.css';

const Carts = () => {
  const dispatch = useDispatch();

  /* ------ Redux Selector item y total ------ */

  const cartProducts = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(toggle());
  };

  return (
    <>
      <div className="cart__container">
        <ListGroup className="cart">
          <div className="cart__close">
            <span onClick={toggleCart}>
              <i className="ri-close-fill"></i>
            </span>
            <h6>Listado de productos </h6>
            <div className="logo-check">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="cart__item-list">
            {cartProducts.length === 0 ? (
              <h6 className="text-center mt-5">Ningún artículo añadido al carrito</h6>
            ) : (
              cartProducts.map((item, index) => <CartItem item={item} key={index} />)
            )}
          </div>

          <div className="cart__bottom d-flex align-items-center justify-content-between">
            <h6>
              Total : <span>${totalAmount}</span>
            </h6>
            <button>
              <Link to="/checkout" onClick={toggleCart}>
                Confirmar
              </Link>
            </button>
          </div>
        </ListGroup>
      </div>
    </>
  );
};

export default Carts;
