import React, {useState, useEffect} from 'react';

import products from '../assets/fake-data/products';
import {useParams} from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import {Container, Row, Col} from 'reactstrap';
import {useDispatch} from 'react-redux';
import {cartActions} from '../store/shopping-cart/cartSlice';
import ProductCard from '../components/UI/product-card/ProductCard';
import '../assets/css/DetalleProducto.css';

const DetalleProducto = () => {
  const dispatch = useDispatch();

  /* ------ Inicializacion de estados ------ */

  const [tab, setTab] = useState('desc');
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [reviewMsg, setReviewMsg] = useState('');

  /* ------ parametro que trae de detalle ------ */

  const {id} = useParams();

  /* ------ parametro que trae de detalle ------ */

  const product = products.find(product => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image);
  const {title, price, category, desc, image} = product;

  const relatedProduct = products.filter(item => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image,
      })
    );
  };

  const submitHandler = e => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product.image);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  {' '}
                  Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>

                <button onClick={addItem} className="addTOCart__btn">
                  Comprar
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={` ${tab === 'desc' ? 'tab__active' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Descripcion corta
                </h6>
                <h6
                  className={` ${tab === 'rev' ? 'tab__active' : ''}`}
                  onClick={() => setTab('rev')}
                >
                  Descripcion larga
                </h6>
              </div>

              {tab === 'desc' ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">No se encontro descripcion</div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">Otros cursos</h2>
            </Col>

            {relatedProduct.map(item => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default DetalleProducto;
