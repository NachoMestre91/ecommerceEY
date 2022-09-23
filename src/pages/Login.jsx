import React, {useRef} from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

import '../assets/css/login.css';

const Login = () => {
  /**
   * !falta logica routeo con login
   * ? falta logica registro
   * */

  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <Helmet title="Loguearse">
      <CommonSection title="Mi cuenta" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    className="input-login"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    className="input-login"
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">Crear cuenta</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
