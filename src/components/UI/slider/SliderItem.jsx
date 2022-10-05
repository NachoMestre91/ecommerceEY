import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './SliderItem.css';
import Img1 from '../../../assets/images/curso-01.jpg';

const BannerItem = props => {
  const {item} = props;

  // const filtradoProductos = props.filter(item => item.stock > 0).slice(0, 9);

  // const STOCK_LIMITADO = 'Stock limitado';
  // const STOCK_DISPONIBLE = 'Stock disponible';

  return (
    <div className="Contenedor-slider-item product__item">
      {/* <img className="img-slider" src={item.img} alt=""></img>
      <div className="slider-item-stock">
        <h6 style={{color: '#fcd202'}}>{item.title}</h6>
        <h6 style={{color: '#fcd202'}}>stock: {item.stock}</h6>
      </div> */}

      {/* {filtradoProductos.map((item, index) => (
        <div key={index}>
          {index === 0 ? (
            <>
              <img
                className="w-75 h-75"
                src={
                  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/woman-sports-wear-fashion-sale-shop-store-ad-design-template-8843cd2ac8f9fcd7d9911d3afd7a3e10_screen.jpg?ts=1598422483'
                }
                alt="banner-product"
              />
            </>
          ) : (
            <>
              <img className="w-75 h-75" src={item.image} alt={item.image} />
              <h6 className="mt-3 text-center">
                {item.stock <= 5 ? STOCK_LIMITADO : STOCK_DISPONIBLE}
              </h6>
            </>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default BannerItem;
