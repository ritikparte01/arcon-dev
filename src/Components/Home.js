import React, { useEffect, useState } from "react";
import aboutImg from "./imgs/about.jpg";
import { Link } from "react-router-dom";

import "./css/bootstrap.min.css";
import "./css/owl.carousel.min.css";
import "./css/slicknav.min.css";
import "./css/slick.css";
import "./css/style.css";
import Hero from "./Hero";
import madan from "./imgs/team/madannew.jpg";
import ankita from "./imgs/team/ankita.jpg";
import ramdev from "./imgs/team/ramdev.jpg";
import omkar from "./imgs/team/omkar.jpg";
import rahul from "./imgs/team/rahul.jpg";
import service1 from "./imgs/services/services-1.png";
import service2 from "./imgs/services/services-2.png";
import service3 from "./imgs/services/services-3.png";
import service4 from "./imgs/services/services-4.png";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import SliderTest from "./SliderTest";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import {$, jQuery} from 'jquery'
import NewTestim from "./NewTestim";


function Home() {
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
    <>
      <div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8593;
        </button>
      )}
        <Hero />

        {/* <!-- Hero Section End --> */}

        {/* <!-- About Section Begin --> */}
        <section className="about spad">
          <div className="container" id="see">
            <div className="row">
              <div className="col-lg-6">
                <div className="about__text">
                  <div className="section-title">
                    <span data-aos="fade-right" data-aos-delay="500">who are we</span>
                    <h2 data-aos="fade-right" data-aos-delay="700">Welcome to The ArCoN Structures</h2>
                  </div>
                  <div className="about__para__text">
                    <p data-aos="fade-right" data-aos-delay="850">
                      At ArCoN Structures, we work closely with our clients and
                      partners and take on every challenge that comes our way.
                      We offer commitment to safety and quality, because our
                      relationships are rooted in Trust, and we have capable
                      team to Trust upon who is always excited to tackle new
                      problems.
                    </p>
                    <p data-aos="fade-right" data-aos-delay="900">
                      We value keeping great people, attaining operational
                      excellence, and delivering outstanding work to our valued
                      clients. This is our driving force for each coming day....
                    </p>
                  </div>
                  <Link data-aos="fade-right" data-aos-delay="950" to="/about" className="primary-btn normal-btn">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about__pic" data-aos="fade-left" 
              data-aos-delay="500"
              data-aos-easing="linear">
                  <div className="about__pic__inner">
                    <img src={aboutImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- About Section End --> */}

        {/* <!-- Project Section Begin --> */}
        <section className="project" id="pro">
          <div className="container-fluid">
            <SliderTest />
          </div>
        </section>

        {/* <!-- Services Section Begin --> */}
        <section className="services spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <span data-aos="fade-right" data-aos-delay="300">Our specialization</span>
                  <h2 data-aos="fade-right" data-aos-delay="400">What we offer</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="services__item">
                  <img data-aos="fade-right" data-aos-delay="550" src={service1} alt="" />
                  <h4 data-aos="fade-right" data-aos-delay="650">Structural Design services</h4>
                  <p data-aos="fade-right" data-aos-delay="700">
                    We provide structural analysis and design of RCC and Steel
                    structures, for every type of project, be it commercial,
                    industrial or residential project, with latest technologies
                    and software’s. We are expert at Designing of luxury villas.
                    We also provide technical support at site for the same.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="services__item">
                  <img data-aos="fade-right" data-aos-delay="550" src={service2} alt="" />
                  <h4 data-aos="fade-right" data-aos-delay="650">Structural Audits and Repair solutions</h4>
                  <p data-aos="fade-right" data-aos-delay="700">
                    We carry out detailed site inspection to find the root cause
                    for deterioration of structures. We carry out
                    Non-Destructive Tests detailed site inspection to arrive at
                    the results for above We recommend the new/quick and
                    reliable solutions for repairs and rehabilitation of
                    Structures
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="services__item">
                  <img data-aos="fade-right" data-aos-delay="550" src={service3} alt="" />
                  <h4 data-aos="fade-right" data-aos-delay="650">Project Management Consultancy</h4>
                  <p data-aos="fade-right" data-aos-delay="700">
                    For project cost up to 50lakhs, we offer PMC services which
                    include timely selection of materials, Material Stock
                    Management, Quality Control, RA Bills, Timely updates and
                    reports to clients
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="services__item">
                  <img data-aos="fade-right" data-aos-delay="550" src={service4} alt="" />
                  <h4 data-aos="fade-right" data-aos-delay="650">Design drawing</h4>
                  <p data-aos="fade-right" data-aos-delay="700">
                    Creating architectural and creative solutions to help people
                    realize their vision and make them a reality.
                  </p>
                </div>
              </div>
            </div>
            <div className="counter__content">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter__item">
                    <div className="counter__item__number">
                      <h2 className="count" data-aos="fade-down" data-aos-delay="300">20</h2>
                    </div>
                    <div className="counter__item__text">
                      <h5 data-aos="fade-down" data-aos-delay="350">
                        Projects
                        <br />
                        Completed
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter__item">
                    <div className="counter__item__number">
                      <h2 className="count" data-aos="fade-down" data-aos-delay="400">20</h2>
                    </div>
                    <div className="counter__item__text">
                      <h5 data-aos="fade-down" data-aos-delay="450">
                        Happy
                        <br />
                        Clients
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter__item">
                    <div className="counter__item__number">
                      <h2 className="count" data-aos="fade-down" data-aos-delay="500">03</h2>
                    </div>
                    <div className="counter__item__text">
                      <h5 data-aos="fade-down" data-aos-delay="550">
                        Repair
                        <br />
                        Projects
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter__item">
                    <div className="counter__item__number">
                      <h2 className="count" data-aos="fade-down" data-aos-delay="600">17</h2>
                    </div>
                    <div className="counter__item__text">
                      <h5 data-aos="fade-down" data-aos-delay="650">
                        Design
                        <br />
                        Projects
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Services Section End --> */}

        {/* <!-- Testimonial Section Begin --> */}
        <Testimonial />
        {/* <NewTestim/> */}
        {/* <!-- Testimonial Section End --> */}

        {/* <!-- Team Section Begin --> */}
        <section className="team spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-8 col-sm-6">
                <div className="section-title">
                  <span data-aos="fade-right" data-aos-delay="400">Our Team</span>
                  <h2  data-aos="fade-right" data-aos-delay="500">Meet our team</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team__btn">
                  {/* <Link to="/about" className="primary-btn normal-btn">
                    Learn More
                </Link> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="team__item madan set-bg"  data-aos="fade-right" data-aos-delay="700" data-setbg={madan}>
                  <div className="team__text">
                    <div className="team__title" data-aos="fade-right" data-aos-delay="600">
                      <h5>Mathankumar Nadar</h5>
                      <span>Founder, Structural Engineer</span>
                    </div>
                    <p>
                      Mr. Mathankumar Nadar, a man of action, he leads the
                      Group's initiatives into new technologies, segments and
                      geographies. His networking skills and, - keen eye for
                      adapting contemporary concepts within the organisation,
                      keeps the team future-ready.
                    </p>
                    <div className="team__social">
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team__item ankita set-bg" data-aos="fade-right" data-aos-delay="700" data-setbg={ankita}>
                  <div className="team__text">
                    <div className="team__title" data-aos="fade-right" data-aos-delay="600">
                      <h5>Ankita Ingale</h5>
                      <span>Co-founder, Civil & Structural Engineer</span>
                    </div>
                    <p>
                      BTech Civil Engineer, Veermata Jijabai Technological
                      Institute, Mumbai. Member of the American Concrete
                      Institute Member of the American Society of Civil
                      Engineers A thought-leader who places a strong emphasis on
                      'speak less, do more' and chooses to live by this credo.
                      Ms. Ankita Ingale truly lives up to her role and manages
                      the Group's activities.
                    </p>
                    <div className="team__social">
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team__item ramdev set-bg"data-aos="fade-right" data-aos-delay="700" data-setbg={ramdev}>
                  <div className="team__text">
                    <div className="team__title" data-aos="fade-right" data-aos-delay="600">
                      <h5>Ramdev Prajapati</h5>
                      <span>Lead Structural Engineer</span>
                    </div>
                    <p>
                      M. E. Structures, Mumbai University (Pursuing) B. E. Civil
                      Engineer, Mumbai University Ramdev is Experienced and
                      Dynamic Structural Engineer, with 6+years of experience
                      and proven track record of ensuring that structures are
                      architecturally safe and compliant with codes.
                    </p>
                    <div className="team__social">
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="team__item omkar set-bg" data-aos="fade-right" data-aos-delay="700" data-setbg={omkar}>
                  <div className="team__text">
                    <div className="team__title" data-aos="fade-right" data-aos-delay="600">
                      <h5>Omkar Mungurdekar</h5>
                      <span>Lead Structural Engineer</span>
                    </div>
                    <p>
                      M. Tech. Structures/ B. E. Civil Engineer/ Associate
                      Member of Institute of Engineers, INDIA – AM 1775807
                      Licensed Structural Engineer for Belgaum (KA) City
                      Corporation Omkar is Experienced and Dynamic Structural
                      Engineer, with 3+years of experience and proven track
                      record of ensuring that structures are architecturally
                      safe and compliant with codes.
                    </p>
                    <div className="team__social">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="team__item rahul set-bg" data-aos="fade-right" data-aos-delay="700" data-setbg={rahul}>
                  <div className="team__text">
                    <div className="team__title" data-aos="fade-right" data-aos-delay="600">
                      <h5>Rahul Ghag</h5>
                      <span>Inspection Engineer / Structural Draughtsman</span>
                    </div>
                    <p>
                      Rahul is Experienced and Dynamic Structural Draughtsman
                      cum Inspection Engineer, with 8+years of experience and
                      proven track record of ensuring Structural Audit and
                      Structural Detailing Services
                    </p>
                    <div className="team__social">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Team Section End --> */}

        {/* <!-- Call To Action Section Begin --> */}
        <section className="callto spad set-bg" data-setbg="img/call-bg.jpg">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 text-center">
                <div className="callto__text">
                  <span data-aos="fade-down" data-aos-delay="400">Why choose us?</span>
                  <h2 data-aos="fade-down" data-aos-delay="500">
                    Our Ability To Deliver Outstanding Results For Our Clients
                    Starts With Our Team Of Smart.
                  </h2>
                  <Link data-aos="fade-down" data-aos-delay="800" to="/contact" className="primary-btn normal-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Call To Action Section End --> */}

        {/* <!-- Footer Section Begin --> */}
        <Footer />
        {/* <!-- Footer Section End --> */}
      </div>
    </>
  );
}

export default Home;
