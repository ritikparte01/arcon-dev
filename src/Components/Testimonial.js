import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testi.css";
import rakesh from "./imgs/testimonial/rakesh.jpeg";
import naresh from "./imgs/testimonial/naresh.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function Testimonial() {
  AOS.init();
  return (
    <div className="Testi">
      <div class="container-xl">
        <div class="row main-test1">
          <div class="col-lg-12 mx-auto">
            <h2 className="testiHeading" data-aos="fade-down" data-aos-delay="300">Testimonials</h2>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              {/* <!-- Carousel indicators --> */}
              <ol class="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              {/* <!-- Wrapper for carousel items --> */}
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="img-box"  data-aos="fade-down" data-aos-delay="300">
                    <img src={rakesh} alt="" />
                  </div>
                  <p class="testimonial"  data-aos="fade-down" data-aos-delay="400">
                    "Arcon Structures" is one of the best general contractors
                    we've worked with. The entire team tactfully delivered a
                    project of exceptional quality while staying on schedule and
                    under budget. We hope to work with "Arcon Structures" again
                    in the near future!
                  </p>
                  <p class="overview" data-aos="fade-up" data-aos-delay="500">
                    <b >Rakesh Nikam</b>
                    <br /> Secretary Rahiss CHSL
                  </p>
                </div>
                <div class="carousel-item">
                  <div class="img-box" data-aos="fade-down" data-aos-delay="300">
                    <img src={naresh} alt="" />
                  </div>
                  <p class="testimonial" data-aos="fade-down" data-aos-delay="400">
                    {" "}
                    “For all the wonderful work you and your crew are doing. Our
                    team has nothing but good things to say - we are really
                    fortunate to have found you for this project!" , The one
                    phrase which remind of you and your work is " Value for
                    Money
                  </p>
                  <p class="overview"  data-aos="fade-up" data-aos-delay="500">
                    <b>Naresh Patel</b>
                    <br /> Genral Manager SBI
                  </p>
                </div>
                {/* <div class="carousel-item">
						<div class="img-box"><img src={rakesh} alt=""/></div>
						<p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
            <p class="overview"><b>Rakesh Nikam</b><br/> Secretary Rahiss CHSL</p>
					</div> */}
              </div>
              {/* <!-- Carousel controls --> */}
              <a
                class="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                class="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
