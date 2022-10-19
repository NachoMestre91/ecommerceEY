import React, {useState, useEffect} from 'react';

import Helmet from '../components/Helmet/Helmet.js';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import heroImg from '../assets/images/banner-01.gif';
import bannerImg from '../assets/images/banner-02.gif';
import {Link} from 'react-router-dom';
import products from '../assets/fake-data/products.js';

// import Category from '../components/UI/category/Category.jsx';
// import ProductCard from '../components/UI/product-card/ProductCard.jsx';

import Productos from './Productos';
import Sliders from '../components/UI/slider/Slider';

import '../assets/css/hero-section.css';
import '../assets/css/home.css';

const Home = () => {
  /* ------ Inicializacion estados de categorias ------ */

  // const [category, setCategory] = useState('ALL');
  // const [allProducts, setAllProducts] = useState(products);
  // const [cursoProducto, setcursoProducto] = useState([]);

  /* ------ Filtrado de categorias inicializacion ------ */

  // useEffect(() => {
  //   const filtrar = products.filter(item => item.category === 'Todos');
  //   const sliceProducto = filtrar.slice(0, 4);
  //   setcursoProducto(sliceProducto);
  // }, []);

  /* ------ Filtro categorias ------ */

  // useEffect(() => {
  //   if (category === 'ALL') {
  //     setAllProducts(products);
  //   }

  //   if (category === 'JAVA') {
  //     const filteredProducts = products.filter(item => item.category === 'java');

  //     setAllProducts(filteredProducts);
  //   }

  //   if (category === 'JAVASCRIPT') {
  //     const filteredProducts = products.filter(item => item.category === 'javascript');

  //     setAllProducts(filteredProducts);
  //   }

  //   if (category === 'PHP') {
  //     const filteredProducts = products.filter(item => item.category === 'php');

  //     setAllProducts(filteredProducts);
  //   }
  // }, [category]);

  return (
    <>
      <section className="Fondo-banner">
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
