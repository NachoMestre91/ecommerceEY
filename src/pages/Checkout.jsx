import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';

import '../assets/css/checkout.css';

const Checkout = () => {
  const [enterName, setEnterName] = useState('');
  const [enterEmail, setEnterEmail] = useState('');
  const [enterNumber, setEnterNumber] = useState('');
  const [enterCountry, setEnterCountry] = useState('');
  const [enterCity, setEnterCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const shippingInfo = [];
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount;

  const submitHandler = e => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      {/* <CommonSection title="Checkout" /> */}
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h5 className="text-center">Registrar pago</h5>
              <br></br>
              <form className="checkout__form form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    className="input-login"
                    placeholder="Ingrese email"
                    required
                    onChange={e => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Nombre"
                    className="input-login"
                    required
                    onChange={e => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    className="input-login"
                    placeholder="Telefono"
                    required
                    onChange={e => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    className="input-login"
                    placeholder="Date"
                    required
                    onChange={e => setEnterCountry(e.target.value)}
                  />
                </div>

                <button type="submit" className="addTOCart__btn">
                  Pagar
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  {/* Shipping: <span>${shippingCost}</span> */}
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
