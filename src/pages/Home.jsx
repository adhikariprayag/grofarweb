import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../scss/Home.scss'
import Promo1 from '../img/promo1.jpg'
import Promo2 from '../img/promo2.jpg'
import Promo3 from '../img/promo3.jpg'
import Promo4 from '../img/promo4.jpg'

// SLICK JS
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

  return (
    <>
      <Navbar />

      <main className='py-5 px-2'>
        <div className='container '>
          <div className="row">

            <div className="col-12">
              <div className="title-container">
                <div className="main-title">what are you looking for?</div>
                <div className="main-btn"><a href="">See More</a></div>
              </div>
            </div>

            <div className="col-12">
              <div className="title-container">
                <div className="main-title">promos for you </div>
                <div className="main-btn"><a href="">See More</a></div>
              </div>

              <div className="carousel-container   py-3">
               
                  <Slider {...settings}>
                    <div>
                      <img src={Promo1} alt="" />
                    </div>
                    <div>
                      <img src={Promo2} alt="" />
                    </div>
                    <div>
                      <img src={Promo3} alt="" />
                    </div>
                    <div>
                      <img src={Promo4} alt="" />
                    </div>
                  </Slider>
                

              </div>
            </div>

            <div className="col-12">
              <div className="title-container">
                <div className="main-title">pick's today</div>
                <div className="main-btn"><a href="">See More</a></div>
              </div>
            </div>

            <div className="col-12">
              <div className="title-container">
                <div className="main-title">recommended for you</div>
                <div className="main-btn"><a href="">See More</a></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home