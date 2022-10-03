import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './SliderItem.css';

const BannerItem = props => {
  const {item} = props;
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className={`box-slider ${item.classAction}`}>
        <img className="bg-slider" src={item.bgImg} />
        <div className="box-slider__main">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="content-box">
                  <h1 className="title">{item.title}</h1>
                  <p className="sub-title">{item.desc}</p>
                  <div className="wrap-btn">
                    <Link
                      to="#"
                      className="tf-button-st2 btn-effect"
                      data-toggle="modal"
                      data-target="#popup_bid"
                    >
                      <span className="effect">Inscribirme</span>
                    </Link>
                    <button
                      to="#"
                      className="tf-button btn-effect popup-youtube"
                      onClick={() => setOpen(true)}
                    >
                      <span className="boder-fade"></span>
                      <span className="effect">ver video</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="image">
                  <img src={item.img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
