import React, {useRef, useEffect} from 'react';
import {Container} from 'reactstrap';
import logo from '../../assets/images//isologo.png';
import {NavLink, Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {cartUiActions} from '../../store/shopping-cart/cartUiSlice';
import './header.css';
import {startLogout} from '../../store/auth/thunks';

/* ------ Hardcodeo Menu ------ */

const nav__links = [
  {
    display: 'Home',
    path: '/home',
  },

  {
    display: 'Carrito',
    path: '/cart',
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const {displayName} = useSelector(state => state.auth);
  const onLogout = () => {
    dispatch(startLogout());
  };

  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

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

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/home">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={navClass => (navClass.isActive ? 'active__menu' : '')}
                >
                  {item.display}
                </NavLink>
              ))}
              <p style={{color: 'white'}}>{displayName}</p>
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-cart-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-6-line"></i>
              </Link>
            </span>
            <span onClick={onLogout} style={{color: 'white'}}>
              Logout
            </span>

            {/* <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span> */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
