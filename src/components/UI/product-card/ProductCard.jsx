import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../../store/shopping-cart/cartSlice';

import './product-card.css';

const ProductCard = props => {
  /* ------ Variables de las props que recibe------ */

  const {id, title, image, price} = props.item;
  const dispatch = useDispatch();

  /* ------ Accion agregar al carrito------ */

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <div className="text-center">
          <h5>{title}</h5>
        </div>

        <span className="product__price text-center">${price}</span>
        <br></br>
        <div className=" d-flex align-items-center justify-content-between ">
          <Link className="addTOCart__btn" to={`/detalleproducto/${id}`}>
            <i className="ri-eye-line mr-1"></i>
            Detalle
          </Link>
          <button className="addTOCart__btn" onClick={addToCart}>
            <i className="ri-bank-card-line ml-1"></i>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
