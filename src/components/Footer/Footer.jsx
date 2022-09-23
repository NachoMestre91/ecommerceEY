import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import logo from '../../assets/images/isologo.png';
import {Link} from 'react-router-dom';
import './footer.css';

/* ------ Footer ------ */

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="4"></Col>

          <Col lg="3" md="4" sm="6"></Col>

          <Col lg="3" md="4" sm="12">
            <h5 className="footer__title">Integrantes</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Ignacio Mestre</p>
                <p>Josephine Quiroga</p>
                <p>Pablo Gargaglione</p>
                <p>Bruno Arias</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
