import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {cartActions} from '../store/Slices/cartSlice.js';
import {Link} from 'react-router-dom';
import '../assets/css/ProductDetail.css';

const ProductDetail = () => {
  const dispatch = useDispatch();

  const {products} = useSelector(state => state.product);

  /* ------ Inicializacion de estados ------ */

  const [tab, setTab] = useState('desc');

  /* ------ parametro que trae de detalle ------ */

  const {id} = useParams();

  console.log(id);

  /* ------ parametro que trae de detalle ------ */

  const product = products.find(product => product.id === id);
  console.log(product);

  const {title, price, image, stock, largeDescription, shortDescription} = product;
  const [previewImg, setPreviewImg] = useState(image);

  // console.log({title, price, image, stock, largeDesciption, shortDescription});

  // const relatedProduct = products.filter(item => category === item.category);

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

  // const submitHandler = e => {
  //   e.preventDefault();

  //   console.log(enteredName, enteredEmail, reviewMsg);
  // };

  // useEffect(() => {
  //   setPreviewImg(product.image);
  // }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="4" md="4">
              <div className="product__main-img product__item">
                <img src={previewImg} alt="" className="w-50" />
              </div>
              <br></br>
              <div className="product_stock ">
                <h2 className="product__price text-center">Precio: ${price}</h2>
                <h2 className="product__price text-center">Stock: {stock}</h2>
              </div>
              <br></br>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{product.title}</h2>
                <Col lg="12">
                  <p> {shortDescription}</p>

                  <h6>Descripcion</h6>
                  <p>{largeDescription}</p>
                </Col>
              </div>
              <Col lg="12" className="detail-action ">
                <button className="addTOCart__btn" onClick={addItem}>
                  Agregar
                </button>
                <button className="volver__btn me-4">
                  <Link to="/home">Volver</Link>
                </button>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetail;
