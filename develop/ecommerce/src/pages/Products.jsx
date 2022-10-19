import {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ReactPaginate from 'react-paginate';
import '../assets/css/pagination.css';
import '../assets/css/Products.css';
import ProductCard from '../components/UI/ProductCard/ProductCard';
import {useSelector} from 'react-redux';

const Products = () => {
  const {products} = useSelector(state => state.product);

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
                  <i className="ri-search-line"></i>
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
              <ProductCard {...item} />
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
