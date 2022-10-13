import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Routers from '../../routes/Routers';
import Cart from '../../pages/Cart';
import Carts from '../../components/UI/Cart/Carts.jsx';
import ProductCard from '../../components/UI/ProductCard/ProductCard.jsx';
import Products from '../../pages/Products';
import Home from '../../pages/Home';

const Layout = () => {
  return (
    <div>
      <Header />

      <div>
        <Routers />
      </div>
      {/* <Cart /> */}
      <Products />
      {/* <Carts /> */}
      <Footer />
    </div>
  );
};

export default Layout;
