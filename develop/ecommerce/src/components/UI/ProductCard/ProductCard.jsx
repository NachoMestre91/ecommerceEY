import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductCard.css";
import { cartActions } from "../../../store/Slices/cartSlice.js";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export const ProductCard = ({
  id,
  title,
  image,
  price,
  shortDescription,
  largeDescription,
  stock,
}) => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addToCart = () => {
    const cantidad = cartItems?.find((product) => product.id === id);

    const newStock = stock - 1;

    const cantidaditem = cantidad?.quantity;

    if (cantidaditem <= newStock || !cantidaditem) {
      dispatch(
        cartActions.addItem({
          id,
          title,
          image,
          price,
          largeDescription,
          shortDescription,
          stock,
        })
      );
    }
  };

  return (
    <>
      {stock >= 1 && (
        <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
          <div className="product__item">
            <div className="product__img">
              <img src={image} alt="product-img" className="w-50" />
            </div>

            <div className="product__content">
              <div className="text-center">
                <h5>{title}</h5>
              </div>
              <div className="product_description text-center">
                <h5>{shortDescription}</h5>
              </div>
              <div className="product_stock">
                <span className=" product__price text-center">${price}</span>
                <span className=" product__price text-center">
                  Stock: {stock}
                </span>
              </div>
              <br></br>
              <div className=" d-flex align-items-center  mr-1 pr-2 justify-content-between ">
                <Link
                  className="addTOCart__btn me-2"
                  to={`/detalleproducto/${id}`}
                >
                  <i className="ri-eye-line me-2"></i>
                  Detalle
                </Link>

                <button className="addTOCart__btn" onClick={addToCart}>
                  <i className="ri-bank-card-line me-2"></i>
                  Agregar
                </button>
                {/* ) : (
                  <>
                     <>
                    <p>sub tco</p>
                    <button className="volver__btn">agregar</button>
                  </> */}
                {/* </>
                )} */}
              </div>
            </div>
          </div>
        </Col>
      )}
    </>
  );
};

export default ProductCard;
