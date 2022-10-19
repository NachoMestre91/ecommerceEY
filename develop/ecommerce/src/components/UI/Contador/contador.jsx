import React from 'react';
import {useDispatch} from 'react-redux';

import {cartActions} from '../../../store/Slices/cartSlice.js';

const contador = () => {
  const quantity = 3;
  // const dispatch = useDispatch();

  const addToCart = () => {
    alert('Add to cart');
    // dispatch(
    //   cartActions.addItem({
    //     stock,
    //   })
    // );
  };

  return (
    <div>
      {quantity <= 1 ? (
        <button className="volver__btn">
          <i className="ri-bank-card-line ml-1"></i>
          sin stock
        </button>
      ) : (
        <button className="addTOCart__btn" onClick={addToCart}>
          <i className="ri-bank-card-line ml-1"></i>
          comprar
        </button>
      )}
    </div>
  );
};

export default contador;
