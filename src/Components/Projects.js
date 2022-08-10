import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import glenmark from "./imgs/project/glenmark.jpeg";
import rahees from "./imgs/project/rahees.jpg";
import moonbeam from "./imgs/project/moonbeam.jpg";
import masjid from "./imgs/project/masjid.jpg";
import nariman from "./imgs/project/pa1.jpeg";
import colinathumb from "./imgs/project/goa/A-01 (2).jpg";
import sienathumb from "./imgs/project/goa/siena/siena-1.jpeg";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function Projects() {
  
 // The back-to-top button is hidden at the beginning
 const [showButton, setShowButton] = useState(false);

 useEffect(() => {
   window.addEventListener("scroll", () => {
     if (window.pageYOffset > 300) {
       setShowButton(true);
     } else {
       setShowButton(false);
     }
   });
 }, []);

 // This function will scroll the window to the top 
 const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth' // for smoothly scrolling
   });
 };
  AOS.init();
  return (
    <div>
        {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8593;
        </button>
      )}
      {/* <!-- Page Preloder --> */}
      {/* <div id="preloder">
        <div class="loader"></div>
    </div> */}

      {/* <!-- Header Section Begin --> */}
      <Navbar />
      {/* <!-- Header Section End --> */}

      {/* <!-- Breadcrumb Section Begin --> */}
      <div
        class="breadcrumb-option spad set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
      >
        <div class="container Project-page">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb__text">
                <h2 data-aos="fade-down" data-aos-delay="300">Our Projects</h2>
                <div class="breadcrumb__links" data-aos="fade-down" data-aos-delay="500">
                <Link to="/">Home</Link>
                  <span>Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Project Page Section Begin --> */}
      <section class="project-page Project-page spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="project__item" data-aos="fade-right" data-aos-delay="700">
                <img src={glenmark} alt="" />
                <h4>
                  <a href="#">
                    Glennmark Pharmaceutical
                    <br />
                    <span>Baddi,Himachal</span>
                  </a>
                </h4>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="project__item" data-aos="fade-left" data-aos-delay="700">
                <img src={rahees} alt="" />
                <h4>
                  <a href="#">
                    Rahiss CHSL
                    <br />
                    <span>Vasai East</span>
                  </a>
                </h4>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="project__item" data-aos="fade-right" data-aos-delay="700">
                <img src={nariman} alt="" />
                <h4>
                  <a href="#">
                    Nariman Bhat Jetty
                    <br />
                    <span>Prabhadevi</span>
                  </a>
                </h4>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="project__item" data-aos="fade-left" data-aos-delay="700">
                <img className="masjid" src={masjid} alt="" />
                <h4>
                  <a href="#">
                  Burhani Masjid
                    <br />
                    <span>Vasai</span>
                  </a>
                </h4>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="project__item colina" data-aos="fade-right" data-aos-delay="700">
                <Link to="/colina">
                  <img src={colinathumb} alt="" />
                </Link>
                <h4>
                  <Link to="/colaina" className="project-link">
                    COLINA VADDO <br /> <span>GOA</span>
                  </Link>
                </h4>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="project__item vaddo" data-aos="fade-left" data-aos-delay="700">
                <Link to="/siena">
                  <img src={sienathumb} alt="" />
                </Link>
                <h4>
                  <Link to="/siena">
                    SIENNA VADDO <br />
                    <span>Alibag</span>
                  </Link>
                </h4>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="project__item" data-aos="fade-left" data-aos-delay="700">
                <img src={moonbeam} alt="" />
                <h4>
                  <a href="#">
                    Moonbeam CHSL
                    <br />
                    <span>Vasai East</span>
                  </a>
                </h4>
              </div>
            </div>
            {/* <!-- <div class="col-lg-12 text-center">
                    <a href="#" class="primary-btn normal-btn">Load More</a>
                </div> --> */}
          </div>
        </div>
      </section>
      {/* <!-- Project Page Section End --> */}

      {/* <!-- Footer Section Begin --> */}
    <Footer/>
    </div>
  );
}

export default Projects;
