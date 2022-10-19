import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Routers from '../../routes/Routers';
import Carts from '../UI/Cart/Carts.jsx';
import Products from '../../pages/Products';
import {useSelector} from 'react-redux';

const Layout = () => {
  const {cartIsVisible} = useSelector(state => state.cartUi);

  return (
    <div>
      <Header />
      {cartIsVisible && <Carts />}
      <div>
        <Routers />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
