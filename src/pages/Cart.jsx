import React from 'react';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {cartActions} from '../store/shopping-cart/cartSlice';
import {Link} from 'react-router-dom';
// import '../styles/cart-page.css';
import '../assets/css/Carrito.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Mi Carrito" />
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
                    <Link to="/detalleproduct">Continuar comprando</Link>
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
    </Helmet>
  );
};

const Tr = props => {
  const {id, image, title, price, quantity} = props.item;
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
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i className="ri-close-circle-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
