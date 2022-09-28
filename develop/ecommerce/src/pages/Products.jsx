import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ReactPaginate from 'react-paginate';
import '../assets/css/pagination.css';
import '../assets/css/Products.css';
import Curso1 from '../assets/images/curso1.jpg';
import ProductCard from '../components/UI/ProductCard/ProductCard';

const Products = () => {
  /* ------ HARCODEO PRODUCTOS ------ */
  const product = [
    {
      id: '1',
      title: 'Angular Basico',
      price: 24.0,
      image: Curso1,
      largeDesciption: 'descripcion larga',
      shortDescription: 'descripcion corta',
      stock: '2',
    },
    {
      id: '2',
      title: 'Node Basico',
      price: 24.0,
      image: Curso1,
      largeDesciption: 'descripcion larga node basico',
      shortDescription: 'descripcion corta node basico',
      stock: '5',
    },
  ];

  /* ------ Variables iniciacion estado ------ */

  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  /* ------ Accion de filtrado del search ------ */

  const searchedProduct = product.filter(item => {
    if (searchTerm.value === '') {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      // return alert('no se encontro');
    }
  });

  /* ------ Limitacion de item y paginado  ------ */

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  /* ------ Seleccion de  ------ */

  const cambiarPagina = ({selected}) => {
    setPageNumber(selected);
  };

  return (
    <div>
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
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Stock</option>
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
                onPageChange={cambiarPagina}
                previousLabel={'<Anterior'}
                nextLabel={'Siguiente >'}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Products;
