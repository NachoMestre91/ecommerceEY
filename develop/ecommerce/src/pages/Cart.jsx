import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../assets/css/Cart.css';

const Cart = () => {
  /**

   * ? Datos que recibe el componente tabla
   * */

  const cartItems = [
    {
      id: '1',
      price: '12',
      image: 'sin-imagen',
      title: 'angular js',
      stock: '4',
    },
    {
      id: '2',
      image: 'sin-imagen',
      price: '12',
      title: 'node js',
      stock: '2',
    },
    {
      id: '3',
      image: 'sin-imagen',
      price: '12',
      title: 'React js',
      stock: '7',
    },
  ];
  return (
    <>
      <section>
        <h5 className="text-center">Listado de tu compra</h5>
        <br></br>
        <Container>
          <Row>
            <Col lg="12">
              {/* {cartItems.length === 0 ? (
                <h5 className="text-center">Carrito vacio</h5>
              ) : ( */}
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
              {/* )} */}

              <div className="mt-4">
                <h6>
                  Total: $<span className="cart__subtotal">Total</span>
                </h6>

                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link>Continuar comprando</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link>Pagar</Link>
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
  const {id, image, title, price, stock} = props.item;
  // const dispatch = useDispatch();

  // const deleteItem = () => {
  //   dispatch(cartActions.deleteItem(id));
  // };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{stock}</td>
      <td className="text-center cart__item-del">
        <i className="ri-close-circle-line"></i>
      </td>
    </tr>
  );
};
export default Cart;
