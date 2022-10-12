import React, {useRef, useEffect} from 'react';
import {Container} from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/isologo.png';
import {cartUiActions} from '../../store/Slices/cartUiSlice.js';
import './Header.css';
import {startLogout} from '../../store/auth/thunks';

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.auth);
  const onLogout = () => {
    dispatch(startLogout());
  };

  // const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  // const toggleCart = () => {
  //   dispatch(toggle());
  // };

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  /* ------ Scroll Fixed Menu ------ */

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__scroll');
      } else {
        headerRef.current.classList.remove('header__scroll');
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
  ];

  return (
    <header className="header" ref={headerRef} onClick={toggleMenu}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            {/* <Link to="/home"> */}
            <img src={logo} alt="logo" />
            {/* </Link> */}
          </div>

          {/* ======= menu ======= */}
          {/* <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav_menu.map((item, index) => (
                <navLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </navLink>
              ))}
            </div>
          </div> */}

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-cart-line"></i>
              <span className="cart__badge">0</span>
            </span>

            <span className="user">
              {status === 'not-authenticated' ? (
                <Link to="/login">
                  <i className="ri-user-6-line"></i>
                </Link>
              ) : (
                <i onClick={onLogout} className="ri-logout-box-r-line"></i>
              )}
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
