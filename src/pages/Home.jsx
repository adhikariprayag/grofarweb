import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../scss/Home.scss'
import Promo1 from '../img/promo1.jpg'
import Promo2 from '../img/promo2.jpg'
import Promo3 from '../img/promo3.jpg'
import Promo4 from '../img/promo4.jpg'
import { category } from '../data/Category';
import { products } from '../data/Products';

// SLICK JS
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SCard from '../components/SCard';
import BCard from '../components/BCard';

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

  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: true,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

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
            <div className="carousel-container category">
              <Slider {...settings2}>
                {category.map(category => (
                  // <a href="cat/{category.id}" className='text-decoration-none text-dark'>
                  // <SCard key={category.id}
                  //   title={category.title}
                  //   img={category.img} />
                  //   </a>


                  <div className='w-100 d-flex justify-content-center '>
                    <a href="" className='text-decoration-none '>
                      <SCard key={category.id}
                        title={category.title}
                        img={category.img} />
                    </a>


                  </div>

                ))}
              </Slider>
            </div>

            <div className="col-12">
              <div className="title-container">
                <div className="main-title">promos for you </div>
                <div className="main-btn"><a href="">See More</a></div>
              </div>

              <div className="carousel-container promo  py-3">

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

              <div className='py-3 px-3'>
                <div className="row  ">
                 {products.map(products =>(
                  <div className="col-lg-3 col-md-4 mt-3 col-sm-6 d-flex justify-content-center">
                    <BCard img={products.img} title={products.title} price={products.price} discount={products.discount}/>
                  </div>
                 ))}
                </div>
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