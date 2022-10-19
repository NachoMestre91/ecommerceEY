import React from 'react';
import {Pagination, Navigation, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useSelector} from 'react-redux';
// import SliderItem from './SliderItem';
import './slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  const {products} = useSelector(state => state.product);
  //const filtroProductos = products.filter(product => product.stock > 0).slice(0, 9);
  const Limitado = 'Limitado';
  const Disponible = 'Disponible';

  return (
    <>
      <div className="Contenedor-slider-item">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={4}
          spaceBetween={4}
          slidesPerGroup={2}
          loop={true}
          breakpoints={{
            0: {slidesPerview: 1, spaceBetween: 10},
            480: {slidesPerview: 2, spaceBetween: 10},
            768: {slidesPerview: 3, spaceBetween: 15},
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <div className="slider-item  product__item">
                <img className="img-slider" src={product.image} alt=""></img>
                <h6 style={{color: '#fcd202'}}>{product.title}</h6>
                <h6 style={{color: '#fcd202'}}>stock: {product.stock}</h6>
                {product.stock <= 5 ? (
                  <h6 className="stock-limitado">{Limitado}</h6>
                ) : (
                  <h6 className="stock-disponible">{Disponible}</h6>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
