import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {cartActions} from '../store/Slices/cartSlice.js';
import {Link} from 'react-router-dom';
import '../assets/css/ProductDetail.css';

const ProductDetail = () => {
  const dispatch = useDispatch();

  /* ------ Get States Slice ------ */

  const {products} = useSelector(state => state.product);
  const {cartItems} = useSelector(state => state.cart);

  /* ------ parametro que trae de detalle ------ */

  const {id} = useParams();

  /* ------ Filtro por ID ------ */

  const product = products.find(product => product.id === id);

  const {title, price, image, stock, largeDescription, shortDescription} = product;

  /* ------ Agregar productos al carrito ------ */

  const addItem = () => {
    const cantidad = cartItems?.find(product => product.id === id);

    const newStock = stock - 1;

    console.log(newStock);

    const cantidaditem = cantidad?.quantity;
    if (cantidaditem <= newStock || !cantidaditem) {
      dispatch(
        cartActions.addItem({
          id,
          title,
          price,
          image,
        })
      );
    }
  };

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
                <img src={product?.image} alt="" className="w-50" />
              </div>
              <br></br>
              <div className="product_stock ">
                <h2 className="product__price text-center">Precio: ${product?.price}</h2>
                <h2 className="product__price text-center">Stock: {product?.stock}</h2>
              </div>
              <br></br>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{product?.title}</h2>
                <Col lg="12">
                  <p> {product?.shortDescription}</p>

                  <h6>Descripcion</h6>
                  <p>{product?.largeDescription}</p>
                </Col>
              </div>
              <Col lg="12" className="detail-action  cart__page-btn">
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
