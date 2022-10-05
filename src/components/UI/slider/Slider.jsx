import React from 'react';
import {Pagination, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css/bundle';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import SliderItem from './SliderItem';

import Img1 from '../../../assets/images/curso-01.jpg';
// import Img2 from '../../../assets/images/curso-02.jpg';

const Slider = () => {
  // const {data} = props;

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

  const STOCK_LIMITADO = 'Stock limitado';
  const STOCK_DISPONIBLE = 'Stock disponible';

  const filtroProductos = data.filter(product => product.stock > 0).slice(0, 9);

  return (
    <>
      <section className="slider">
        <Swiper
          slidesPerView={4}
          spaceBetween={4}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
        >
          {/* {data.slice(1, 10).map(item => ( */}
          {/* <SwiperSlide key={item.id}> */}
          <SwiperSlide key={data.id}>
            <h1>j¿holas</h1>
            {/*<img className="img-slider" src={data.img} 
             <div className="Contenedor-slider-item product__item">
              {filtroProductos.map((data, index) => (
                <div key={index}>
                  {index === 0 ? (
                    <>
                      <img className="w-75 h-75" src={''} alt="" />
                    </>
                  ) : (
                    <>
                      <div className="slider-item-stock">
                        <img className="img-slider" src={data.img} alt=""></img>
                        <h6 style={{color: '#fcd202'}}>{data.title}</h6>

                        <h6 className="addTOCart__btn" style={{color: '#21242d'}}>
                          {data.stock <= 5 ? STOCK_LIMITADO : STOCK_DISPONIBLE}
                        </h6>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div> */}
          </SwiperSlide>
          {/* ))} */}
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
