import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import '../assets/css/Cart.css';

import {cartActions} from '../store/Slices/cartSlice.js';

const Cart = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const {cartItems} = useSelector(state => state.cart);

  return (
    <>
      <section>
        <h5 className="text-center">Listado de tu compra</h5>
        <br></br>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Carrito vacio</h5>
              ) : (
                <table className="table table-bordered ">
                  <thead className="header-table text-center">
                    <tr>
                      <th>Imagen</th>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Total: $<span className="cart__subtotal">{totalAmount}</span>
                </h6>

                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/home">Continuar comprando</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Pagar</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const Tr = props => {
  const {id, image, title, price, stock, quantity} = props.item;

  console.log(quantity);
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del">
        <i className="ri-close-circle-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};
export default Cart;
