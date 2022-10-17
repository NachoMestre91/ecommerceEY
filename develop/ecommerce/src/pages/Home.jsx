import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import bannerImg from '../assets/images/banner-02.gif';
import '../assets/css/Home.css';
import Slider from '../components/UI/Slider/Slider';

const Home = () => {
  return (
    <section className="Fondo-banner">
      <Row>
        <Col lg="12" md="12">
          <Slider />
        </Col>
      </Row>
    </section>
  );
};

export default Home;
