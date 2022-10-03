import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import bannerImg from '../assets/images/banner-02.gif';
import '../assets/css/Home.css';

const Home = () => {
  return (
    <section className="Fondo-banner">
      <Container>
        <Row>
          <Col lg="12" md="12">
            <p className=" d-flex align-items-center gap-2 ">
              <span style={{color: '#fcd202'}}>Banner sliderss</span>
            </p>

            <div className="contenedor-banner">
              <img src={bannerImg} alt="hero-img" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
