import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import {Container, Row, Col} from 'reactstrap';
import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/product-card/ProductCard';
import ReactPaginate from 'react-paginate';

import '../assets/css/Productos.css';
import '../assets/css/pagination.css';

const Productos = () => {
  /* ------ Variables iniciacion estado ------ */

  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  /* ------ Accion de filtrado del search ------ */

  const searchedProduct = products.filter(item => {
    if (searchTerm.value === '') {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log('no se encontro');
    }
  });

  /* ------ Limitacion de item y paginado  ------ */

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  /* ------ Seleccion de  ------ */

  const changePage = ({selected}) => {
    setPageNumber(selected);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="6" xs="12">
            <div className="search__widget d-flex align-items-center justify-content-between ">
              <input
                type="text"
                placeholder="Buscar producto"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
            <div className="sorting__widget text-end">
              <select className="w-50">
                <option>Categorias</option>
              </select>
            </div>
          </Col>

          {displayPage.map(item => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              <ProductCard item={item} />
            </Col>
          ))}

          <div>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={'<Anterior'}
              nextLabel={'Siguiente >'}
              containerClassName=" paginationBttns "
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Productos;
