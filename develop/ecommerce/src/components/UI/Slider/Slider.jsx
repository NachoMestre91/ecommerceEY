import React from 'react';
import {Pagination, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useSelector} from 'react-redux';
import SliderItem from './SliderItem';
import './slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  const {products} = useSelector(state => state.product);

  const filtroProductos = products.filter(product => product.stock > 0).slice(0, 9);

  return (
    <>
      <div className="Contenedor-slider-item">
        <Swiper
          slidesPerView={4}
          spaceBetween={4}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className="slider-item ">
            {filtroProductos.map((product, item) => (
              <SliderItem key={item} product={product} />
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
