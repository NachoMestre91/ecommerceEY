import React from 'react';
import {ListGroupItem} from 'reactstrap';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../../store/Slices/cartSlice.js';
import './CartItem.css';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const stockProducto = item.stock;

  const {id, title, price, image, quantity, totalPrice, largeDesciption, shortDescription} = item;

  /* ------ Agregar cantidad Item ------ */

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image,
        largeDesciption,
        shortDescription,
      })
    );
  };

  /* ------ sacar cantidad Item  ------ */

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  /* ------ eliminar Item ------ */

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <>
      <div className="Contenedor-items">
        <ListGroupItem className="border-0 cart__item">
          <div className="cart__item-info d-flex gap-4 flex-row">
            <div className="cart__item-image">
              <img src={image} alt="product-img" />
            </div>

            <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between ">
              <div>
                <h6 className="cart__product-title">{title}</h6>
                <p className=" d-flex align-items-center gap-5 cart__product-price">
                  x{quantity} <span>${totalPrice}</span>
                </p>
                <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
                  {quantity >= stockProducto ? (
                    <>
                      <span className="increase__btn">
                        <i className="ri-add-linesss"></i>
                      </span>
                    </>
                  ) : (
                    <span className="increase__btn" onClick={incrementItem}>
                      <i className="ri-add-line"></i>
                    </span>
                  )}

                  <span className="quantity">{quantity}</span>

                  <span className="decrease__btn" onClick={decreaseItem}>
                    <i className="ri-subtract-line"></i>
                  </span>
                </div>
              </div>

              {quantity >= stockProducto ? (
                <div className="cartel-sin-stock">
                  <h6 className="text-center mt-5">Sin cantidad</h6>
                </div>
              ) : (
                <></>
              )}

              <span className="delete__btn" onClick={deleteItem}>
                <i className="ri-close-circle-line "></i>
              </span>
            </div>
          </div>
        </ListGroupItem>
      </div>
    </>
  );
};

export default CartItem;
