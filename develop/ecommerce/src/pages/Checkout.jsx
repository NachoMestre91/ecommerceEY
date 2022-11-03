import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../assets/css/checkout.css";
import { cartActions } from "../store/Slices/cartSlice";

const Checkout = () => {
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const { buyer } = useSelector((state) => state.buyer);
  const { name, email, date, items, id } = buyer;

  return (
    <>
      {buyer && (
        <section>
          <Container>
            <h2 className="text-black text-center">Tu compra realizada</h2>
            <Row>
              <Col lg="8" md="6">
                <br></br>
                <div className="checkout__form form">
                  <h4 className=" product__price text-center mt-2">
                    ID de compra:
                  </h4>
                  <h6 className="stock-limitado mt-3 mb-3">{id}</h6>

                  <h4 className=" product__price text-center mt-2">{`Nombre: ${name}`}</h4>
                  <h4 className=" product__price text-center mt-2">{`Email: ${email}`}</h4>
                  <h4 className=" product__price text-center mt-2">
                    Telefono:
                  </h4>
                </div>
              </Col>

              <Col lg="4" md="6">
                <div className="checkout__bill mt-3">
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    {`Fecha: ${date}`}
                  </h6>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    {`Cantidad: ${totalQuantity}`}
                  </h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between">
                      {`Total: ${totalAmount}`}
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
            <br></br>
            <h5 className="text-center mt-3">Listado de tu compra</h5>
            <br></br>
            <Row>
              <Col lg="12">
                {items?.length === 0 ? (
                  <h5 className="text-center">Checkout vacio</h5>
                ) : (
                  <table className="table table-bordered ">
                    <thead className="header-table text-center">
                      <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items?.map((item) => (
                        <Tr item={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                )}

                <div className="mt-4">
                  <div className="cart__page-btn">
                    <button className="addTOCart__btn me-4">
                      <Link to="/home">Volver</Link>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};
const Tr = (props) => {
  const { id, image, title, price, stock, quantity } = props.item;

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
    </tr>
  );
};
export default Checkout;
