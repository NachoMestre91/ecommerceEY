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
        <h2 className="text-black text-center">Nuestros cursos</h2>
        <p className="text-black text-center">Selecciona el curso que quieras</p>
        <div className="common__section seccion-sticky">
          <Col lg="6" md="6" sm="6" xs="12">
            <Container>
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
            </Container>
          </Col>
        </div>
        <Container>
          <Row>
            {displayPage.map(item => (
              <ProductCard key={item.id} {...item} />
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={cambiarPagina}
                previousLabel={
                  <div>
                    <i className="ri-arrow-left-s-line "></i>
                  </div>
                }
                nextLabel={
                  <div>
                    <i className="ri-arrow-right-s-line  "></i>
                  </div>
                }
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
