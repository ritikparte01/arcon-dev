import React from 'react'
import { Link } from 'react-router-dom';

import logo from "./imgs/old.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function Footer() {
  AOS.init();
  return (
    <div>
        <footer className="footer set-bg" data-setbg="img/foot2.jpg">
          <div className="container">
            <div className="footer__top">
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <div className="footer__top__text">
                    <h2 data-aos="fade-right" data-aos-delay="400">Ready To Work With Us?</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="footer__top__newslatter" data-aos="fade-right" data-aos-delay="600">
                    <form action="#">
                      <input type="text" placeholder="Enter your email..." />
                      <button type="submit">
                        <i className="fa fa-send"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                  <div className="footer__logo">
                    <Link data-aos="fade-right" data-aos-delay="400" to="/">
                      <img src={logo} alt="" width={50} />
                    </Link>
                    
                    
                    
                  </div>
                  <p data-aos="fade-right" data-aos-delay="500">
                    S-04 Green View apt. Samarth Ramdas Nagar, Navghar Road,
                    <br />
                    Vasai East – Palghar 401208
                  </p>
                  <ul>
                    <li data-aos="fade-right" data-aos-delay="600">arconstructures@gmail.com</li>
                    <li data-aos="fade-right" data-aos-delay="650">+91 7887836478</li>
                  </ul>
                  <div className="footer__social">
                    <a data-aos="fade-right" data-aos-delay="600" href="https://www.facebook.com/pages/category/Structural-Engineer/Arcon-Structures-110019937322861/">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a data-aos="fade-right" data-aos-delay="700" href="https://api.whatsapp.com/send?phone=+917887836478&text=Hi">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                    <a data-aos="fade-right" data-aos-delay="800" href="https://www.instagram.com/arconstructures/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                <div className="footer__widget">
                  <h6 data-aos="fade-right" data-aos-delay="500">Company</h6>
                  <ul>
                    <li data-aos="fade-right" data-aos-delay="600">
                    <Link to="/about">About Us</Link>
                    </li>
                    <li data-aos="fade-right" data-aos-delay="700">
                    <Link to="/services">Services</Link>
                    </li>
                    <li data-aos="fade-right" data-aos-delay="800">
                    <Link to="/projects">Our Works</Link>
                    </li>
                    <li data-aos="fade-right" data-aos-delay="900">
                    <Link to="/contact">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer__widget">
                  <h6 data-aos="fade-right" data-aos-delay="600">
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
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer__address">
                  <h6 data-aos="fade-right" data-aos-delay="600">Get In Touch</h6>
                  <p data-aos="fade-right" data-aos-delay="700">
                    S-04, Green View Aprtment, Samarth Ramdas Nagar, Navghar Road,
                    <br />
                    Vasai East – Palghar 401208
                  </p>
                  <ul>
                    <li data-aos="fade-right" data-aos-delay="800">arconstructures@gmail.com</li>
                    <li data-aos="fade-right" data-aos-delay="900">+91 7887836478</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="row">
                <div className="col-lg-8 col-md-7">
                  <div className="copyright__text">
                    <p>
                      Copyright ©
                      All rights reserved | This Website is made by
                      <a href="https://ritikparte1.epizy.com"> Snapperly</a>
                    </p>
                  </div>
                </div>
                {/* <!-- <div className="col-lg-4 col-md-5">
                        <div className="copyright__widget">
                            <a href="#">Terms of use</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div> --> */}
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer