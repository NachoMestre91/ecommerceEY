import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import bannerImg from '../assets/images/banner-02.gif';
import '../assets/css/Home.css';
import Slider from '../components/UI/Slider/Slider';
import Productos from '../pages/Products';
import Sliders from '../components/UI/Slider/Slider';

const Home = () => {
  return (
    <>
      <section className="Fondo-banner Fondo-Inicio">
        <Container>
          <Row>
            <Col lg="12" md="12">
              <Sliders />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Productos />
      </section>
    </>
  );
};

export default Home;
