import React from 'react';
import {ListGroupItem} from 'reactstrap';
import './CartItem.css';

const CartItem = () => {
  return (
    <>
      <div className="Contenedor-items">
        <ListGroupItem className="border-0 cart__item">
          <div className="cart__item-info d-flex gap-4 flex-row">
            <img alt="product-img" />

            <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between ">
              <div>
                <h6 className="cart__product-title">Nombre producto</h6>
                <p className=" d-flex align-items-center gap-5 cart__product-price">
                  cantidad <span>precio</span>
                </p>
                <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
                  <span className="increase__btn">
                    <i class="ri-add-line"></i>
                  </span>
                  <span className="quantity">Cantidad</span>
                  <span className="decrease__btn">
                    <i class="ri-subtract-line"></i>
                  </span>
                </div>
              </div>

              <span className="delete__btn">
                <i class="ri-close-circle-line "></i>
              </span>
            </div>
          </div>
        </ListGroupItem>
      </div>
    </>
  );
};

export default CartItem;
