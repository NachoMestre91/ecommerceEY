import React from 'react';
import {Navigation, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import SliderItem from './SliderItem';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Slider = props => {
  const {data} = props;

  return (
    <>
      <section className="slider">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          scrollbar={{draggable: true}}
        >
          {data.slice(1, 4).map(item => (
            <SwiperSlide key={item.id}>
              <SliderItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
