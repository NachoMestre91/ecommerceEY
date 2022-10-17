import React from 'react';
import './SliderItem.css';

const SliderItem = ({product}) => {
  const Limitado = 'Limitado';
  const Disponible = 'Disponible';

  return (
    <>
      <div className="sliderItem product__item">
        <div>
          <img className="img-slider" src={product.image} alt=""></img>
          <h6 style={{color: '#fcd202'}}>{product.title}</h6>
          <h6 style={{color: '#fcd202'}}>stock: {product.stock}</h6>
          {product.stock <= 5 ? (
            <h6 className="stock-limitado">{Limitado}</h6>
          ) : (
            <h6 className="stock-disponible">{Disponible}</h6>
          )}
        </div>
      </div>
    </>
  );
};

export default SliderItem;
