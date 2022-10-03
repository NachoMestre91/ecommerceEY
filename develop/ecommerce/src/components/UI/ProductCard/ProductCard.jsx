import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';

export const ProductCard = ({id, title, image, price, shortDescription, stock}) => {
  return (
    <>
      <div className="product__item">
        <div className="product__img">
          <img src={image} alt="product-img" className="w-50" />
        </div>

        <div className="product__content">
          <div className="text-center">
            <h5>{title}</h5>
          </div>
          <div className="product_description text-center">
            <h5>{shortDescription}</h5>
          </div>
          <div className="product_stock">
            <span className="product__price text-center">${price}</span>
            <span className="product__price text-center">Stock: {stock}</span>
          </div>
          <br></br>
          <div className=" d-flex align-items-center mr-1 pr-1 justify-content-between ">
            <Link className="addTOCart__btn">
              <i className="ri-eye-line m-1"></i>
              Detalle
            </Link>
            <button className="addTOCart__btn">
              <i className="ri-bank-card-line m-1"></i>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
