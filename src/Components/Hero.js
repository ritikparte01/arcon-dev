import React from "react";
import { Carousel } from "bootstrap";
import hero1 from "./imgs/nb2.jpg";
import hero2 from "./imgs/nb5.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function Hero() {
  AOS.init();
  return (
    <div className="main-hero">
      {/* <!-- Carousel wrapper --> */}
      <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark "
        data-mdb-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <div class="carousel-indicators">
          <button
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="1"
            aria-label="Slide 1"
          ></button>
        </div>

        {/* <!-- Inner --> */}
        <div class="carousel-inner">
          {/* <!-- Single item --> */}
          <div class="carousel-item active">
            <img src={hero1} class="d-block w-100" alt="Motorbike Smoke" />
            <div class="carousel-caption d-md-block">
              <div class="hero__text1" data-aos="fade-in" data-aos-delay="300"
               data-aos-easing="linear">
                <h2>
                  Welcome to The <br/><span>ArCoN</span><br/> Structures
                </h2>
                <a href="#pro" class="primary-btn">
                  See Project
                </a>
                <div class="hero__social" id="hero_social">
              <a
                href="https://www.facebook.com/pages/category/Structural-Engineer/Arcon-Structures-110019937322861/"
                ><i class="fa fa-facebook"></i
              ></a>
              <a
                href="https://api.whatsapp.com/send?phone=+917887836478&text=Hi"
                ><i class="fa fa-whatsapp"></i
              ></a>
              <a href="https://www.instagram.com/arconstructures/"
                ><i class="fa fa-instagram"></i
              ></a>
            </div>
                <a href="#hero_social" class="more_btn">Discover more</a>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div class="carousel-item">
            <img src={hero2} class="d-block w-100" alt="Mountaintop" />
            <div class="carousel-caption d-md-block">
              <div class="hero__text">
                <h4 class="htxt2">
                  We are the team of Young Professional Engineers, all geared up
                  to rock on new opportunities, with only aim, to provide
                  dependable and cost-effective service.
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button
          class="carousel-control-prev hero-prev"
          type="button"
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide="prev"
        >
          <span
            class="carousel-control fa fa-angle-left"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden"></span>
        </button>

        <button
          class="carousel-control-next hero-next"
          type="button"
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide="next"
        >
          <span
            class="carousel-control fa fa-angle-right"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden"></span>
        </button>
      </div>
      {/* <!-- Carousel wrapper --> */}
    </div>
  );
}

export default Hero;
