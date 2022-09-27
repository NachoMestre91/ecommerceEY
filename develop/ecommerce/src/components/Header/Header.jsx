import React, {useRef, useEffect} from 'react';
import {NavLink, Container} from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
// import {NavLink, Link} from 'react-router-dom';
import logo from '../../assets/images/isologo.png';

// import {useSelector, useDispatch} from 'react-redux';
// import {cartUiActions} from '../../store/shopping-cart/cartUiSlice';
import './Header.css';

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  // const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  // const toggleCart = () => {
  //   dispatch(toggle());
  // };

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
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            {/* <Link to="/home"> */}
            <img src={logo} alt="logo" />
            {/* </Link> */}
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
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

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon">
              <i class="ri-shopping-cart-line"></i>
              <span className="cart__badge">0</span>
            </span>

            <span className="user">
              {/* <Link to="/login"> */}
              <i class="ri-user-6-line"></i>
              {/* </Link> */}
            </span>

            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
