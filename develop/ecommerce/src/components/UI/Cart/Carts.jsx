import React, {useState} from 'react';
import {ListGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../../../assets/images/isologo.png';
import CartItem from './CartItem';
import './Carts.css';
const Carts = () => {
  return (
    <>
      <div className="cart__container">
        <ListGroup className="cart">
          <div className="cart__close">
            <span>
              <i class="ri-close-fill"></i>
            </span>
            <h6>Listado de productos </h6>
            <div className="logo-check">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="cart__item-list">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="cart__bottom d-flex align-items-center justify-content-between">
            <h6>
              Total : <span>$</span>
            </h6>
            <button>
              <Link>Confirmar</Link>
            </button>
          </div>
        </ListGroup>
      </div>
    </>
  );
};

export default Carts;
