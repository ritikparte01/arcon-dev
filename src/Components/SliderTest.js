import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sliderimage1 from "./imgs/project/nariman.jpeg";
import sliderimage2 from "./imgs/project/rahees.jpg";
import sliderimage3 from "./imgs/project/glenmark.jpeg";
import sliderimage4 from "./imgs/project/moonbeam.jpg";
import sliderimage5 from "./imgs/project/masjid.jpg";
import "./SliderTest.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export default function App() {
  AOS.init();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="App2">
      <div class="row mb-2">
        <div class="col-lg-12 text-center">
          <div class="section-title">
            <span data-aos="fade-down" data-aos-delay="300">Our works</span>
            <h2 data-aos="fade-down" data-aos-delay="450">Latest projects</h2>
          </div>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2500}
        loop={true}
        infinite={true}
        transitionDuration={1000}
      >
        <div class="project__slider__item nariman set-bg">
          <img className="main-img" src={sliderimage1} alt="" />
          <div class="project__slider__item__hover">
            <span>Nariman Bhat Jetty</span>
            <h5>Prabhadevi</h5>
          </div>
        </div>

        <div class="project__slider__item rahiss set-bg">
          <img className="main-img" src={sliderimage2} alt="" />
          <div class="project__slider__item__hover">
            <span>Rahiss CHSL</span>
            <h5>Vasai East</h5>
          </div>
        </div>

        <div class="project__slider__item glenmark set-bg">
          <img className="main-img" src={sliderimage3} alt="" />
          <div class="project__slider__item__hover">
            <span>Glennmark Pharmaceutical</span>
            <h5>Baddi,Himachal</h5>
          </div>
        </div>

        <div class="project__slider__item moonbeam mx-2 set-bg">
            <img src={sliderimage5} alt="" />
            <div class="project__slider__item__hover">
              <span>Burhani Masjid</span>
              <h5>Vasai</h5>
            </div>
          </div>

        <div class="project__slider__item moonbeam set-bg">
          <img className="main-img" src={sliderimage4} alt="" />
          <div class="project__slider__item__hover">
            <span>Moonbeam CHSL</span>
            <h5>Vasai East</h5>
          </div>
        </div>

       
{/*
          <div class="project__slider__item moonbeam m-2 set-bg">
            <img src={sliderimage4} alt="" />
            <div class="project__slider__item__hover">
              <span>Moonbeam CHSL</span>
              <h5>Vasai East</h5>
            </div>
          </div>

          <div class="project__slider__item moonbeam m-2 set-bg">
            <img src={sliderimage4} alt="" />
            <div class="project__slider__item__hover">
              <span>Moonbeam CHSL</span>
              <h5>Vasai East</h5>
            </div>
          </div> */}
      </Carousel>

      <div className="btn-sec d-flex justify-content-center my-5 pb-5">
        <Link data-aos="flip-left" data-aos-delay="500" to="/projects" className="primary-btn normal-btn">
          See All
        </Link>
      </div>
    </div>
  );
}
