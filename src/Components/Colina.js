import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import img1 from "./imgs/project/goa/A-01 (1).jpg";
import img2 from "./imgs/project/goa/A-01 (2).jpg";
import img3 from "./imgs/project/goa/B-01 (1).jpg";
import img4 from "./imgs/project/goa/C-01 (1).jpg";
import img5 from "./imgs/project/goa/C-01 (2).jpg";
import img6 from "./imgs/project/goa/D-01 (1).jpg";
import img7 from "./imgs/project/goa/D-01 (2).jpg";
import img8 from "./imgs/project/goa/E-01 (1).jpg";
import img9 from "./imgs/project/goa/E-01 (2).jpg";
import img10 from "./imgs/project/goa/F-01 (1).jpg";
import img11 from "./imgs/project/goa/F-01 (2).jpg";
import img12 from "./imgs/project/goa/G-01 (1).jpg";
import img13 from "./imgs/project/goa/G-01 (2).jpg";
import img14 from "./imgs/project/goa/H-01 (1).jpg";
import img15 from "./imgs/project/goa/H-01 (2).jpg";
import img16 from "./imgs/project/goa/I-01 (1).jpg";
import img17 from "./imgs/project/goa/I-01 (2).jpg";

function Colina() {
  return (
    <div className="g-main">
      {/* <!-- Header Section Begin --> */}
      <Navbar />
      {/* <!-- Header Section End --> */}

      {/* <!-- Breadcrumb Section Begin --> */}
      <div
        class="breadcrumb-option spad set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb__text">
                <h2>Colina Goa</h2>
                <div class="breadcrumb__links">
                  <Link to="/projects">Projects</Link>
                  <span>Colina</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb Section End --> */}

      <div class="container-fluid gallery">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
        <img src={img12} alt="" />
        <img src={img13} alt="" />
        <img src={img14} alt="" />
        <img src={img15} alt="" />
      </div>

      {/* <!-- Footer Section Begin --> */}
      <footer class="footer set-bg" data-setbg="img/foot2.jpg">
        <div class="container">
          <div class="footer__top">
            <div class="row">
              <div class="col-lg-8 col-md-6">
                <div class="footer__top__text">
                  <h2>Ready To Work With Us?</h2>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="footer__top__newslatter">
                  <form action="#">
                    <input type="text" placeholder="Enter your email..." />
                    <button type="submit">
                      <i class="fa fa-send"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__about">
                <div class="footer__logo">
                  <a href="#">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
                <p>
                  A-104, Rahiss Aprtment, Samarth Ramdas Nagar, Navghar Road,
                  <br /> Vasai East – Palghar 401208{" "}
                </p>
                <ul>
                  <li>arconstructures@gmail.com</li>
                  <li> +91 7887836478</li>
                </ul>
                <div class="footer__social">
                  <a href="https://www.facebook.com/pages/category/Structural-Engineer/Arcon-Structures-110019937322861/">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=+917887836478&text=Hi">
                    <i class="fa fa-whatsapp"></i>
                  </a>
                  <a href="https://www.instagram.com/arconstructures/">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
              <div class="footer__widget">
                <h6>Company</h6>
                <ul>
                  <li>
                    <a href="./about.html">About Us</a>
                  </li>
                  <li>
                    <a href="./services.html">Services</a>
                  </li>
                  <li>
                    <a href="./projects.html">Our Works</a>
                  </li>
                  <li>
                    <a href="./contact.html">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6">
              <div class="footer__widget">
                <h6>
                  <a href="./services.html">Services</a>
                </h6>
                <ul>
                  {/* <!-- <li><a href="./projects.html">Architecture</a></li>
                            <li><a href="./projects.html">Interior Design</a></li>
                            <li><a href="./projects.html">Exterior Design</a></li>
                            <li><a href="./projects.html">Planning</a></li> --> */}
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="footer__address">
                <h6>Get In Touch</h6>
                <p>
                  A-104, Rahiss Aprtment, Samarth Ramdas Nagar, Navghar Road,
                  <br /> Vasai East – Palghar 401208{" "}
                </p>
                <ul>
                  <li>arconstructures@gmail.com</li>
                  <li> +91 7887836478</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="copyright">
            <div class="row">
              <div class="col-lg-8 col-md-7">
                <div class="copyright__text">
                  <p>
                    Copyright ©
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    All rights reserved | This Website is made by{" "}
                    <a href="http://snapperly.epizy.com">Snapperly</a>
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-5">
                <div class="copyright__widget">
                  <a href="#">Terms of use</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Colina;
