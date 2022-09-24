import React, {useRef, useEffect} from 'react';
import {NavLink} from 'reactstrap';
import logo from '../../assets/images/isologo.png';

// import {useSelector, useDispatch} from 'react-redux';
// import {cartUiActions} from '../../store/shopping-cart/cartUiSlice';
import './Header.css';

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  /* ------ Scroll Fixed Menu ------ */

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__shrink');
      } else {
        headerRef.current.classList.remove('header__shrink');
      }
    });

    return () => window.removeEventListener('scroll', null);
  }, []);

  /* ------ Hardcodeo Menu ------ */
  const nav_menu = [
    {
      display: 'Home',
      path: '/home',
    },

    {
      display: 'Carrito',
      path: '/cart',
    },
    {
      display: 'Login',
      path: '/login',
    },
  ];

  return (
    <div className="header">
      <div className="contenendor-navegacion d-flex align-items-center justify-content-between">
        {/*------ Logo ------ */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {/*------ NavBar ------ */}
        <div className="navigation">
          <div className="menu d-flex align-items-center gap-5">
            {nav_menu.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={navClass => (navClass.isActive ? 'active__menu' : '')}
              >
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
