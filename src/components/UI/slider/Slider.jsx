import React from 'react';
import {Pagination, Navigation, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/free-mode/free-mode.min.css';

import 'swiper/modules/thumbs/thumbs.min.css';
import './slider.css';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css';

import Img1 from '../../../assets/images/curso-01.jpg';

const Sliders = () => {
  const data = [
    {
      id: '1',
      title: 'Angular Basicos',
      stock: '2',
      img: Img1,
    },
    {
      id: '2',
      title: 'Angular avanzado',
      stock: '4',
      img: Img1,
    },
    {
      id: '3',
      title: 'React Basicos',
      stock: '2',
      img: Img1,
    },
    {
      id: '4',
      title: 'Node avanzado',
      stock: '21',
      img: Img1,
    },
    {
      id: '5',
      title: 'Angular intermedio',
      stock: '28',
      img: Img1,
    },
    {
      id: '6',
      title: 'Java',
      stock: '41',
      img: Img1,
    },
    {
      id: '7',
      title: 'Aspx',
      stock: '8',
      img: Img1,
    },
    {
      id: '8',
      title: 'C#',
      stock: '5',
      img: Img1,
    },
    {
      id: '9',
      title: 'Next JS',
      stock: '17',
      img: Img1,
    },
    {
      id: '10',
      title: 'Dart 3',
      stock: '4',
      img: Img1,
    },
  ];

  const Limitado = 'Limitado';
  const Disponible = 'Disponible';

  const filtroProductos = data.filter(product => product.stock > 0).slice(0, 9);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        cssMode={true}
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {/*<SwiperSlide key={data.toString()}>
         <div>
            {filtroProductos.map((data, index) => (
              <div className="contenedor-slider" key={index}>
                {index === 0 ? (
                  <>
                    <img src={''} alt="" />
                  </>
                ) : (
                  <>
                    <img className="img-slider" src={data.img} alt=""></img>
                    <h6 style={{color: '#fcd202'}}>{data.title}</h6>

                    <h6 className="addTOCart__btn" style={{color: '#21242d'}}>
                      {data.stock <= 5 ? Limitado : Disponible}
                    </h6>
                  </>
                )}
              </div>
            ))}
          </div> 
        </SwiperSlide>*/}
        <SwiperSlide>
          {' '}
          <img className="img-slider" src={Img1} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img className="img-slider" src={Img1} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img className="img-slider" src={Img1} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img className="img-slider" src={Img1} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img className="img-slider" src={Img1} alt=""></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliders;
