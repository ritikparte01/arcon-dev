import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";

import mission from "./imgs/services/services-5.png";
import vision from "./imgs/services/services-6.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import madan from "./imgs/team/madan.jpg";
import ankita from "./imgs/team/ankita.jpg";
import ramdev from "./imgs/team/ramdev.jpg";
import omkar from "./imgs/team/omkar.jpg";
import rahul from "./imgs/team/rahul.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function About() {
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

        {/*
        <!-- Header Section Begin --> */}
        <Navbar />
        {/*
        <!-- Header Section End --> */}

        {/*
        <!-- Breadcrumb Section Begin --> */}
        <div
          className="breadcrumb-option spad set-bg"
          data-setbg="img/breadcrumb-bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2 data-aos="fade-down" data-aos-delay="300">About Us</h2>
                  <div className="breadcrumb__links" data-aos="fade-down" data-aos-delay="500">
                  <Link to="/">Home</Link>
                    <span> About Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
        <!-- Breadcrumb Section End --> */}

        {/*
        <!-- About Page Section Begin --> */}
        <section className="about-page spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="about__text about__page__text">
                  <div className="section-title">
                    <span data-aos="fade-right" data-aos-delay="700">who are we</span>
                    <h2 data-aos="fade-right" data-aos-delay="800">About Us</h2>
                  </div>
                  <div className="about__para__text">
                    <p data-aos="fade-right" data-aos-delay="900">
                      Our distinctive set of skills and expertise opens infinite
                      possibilities of successfully executing your dream
                      project, according to your requirements and needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="about__page__services">
                  <div className="about__page__services__text">
                    <p data-aos="fade-right" data-aos-delay="1300">
                      We are the team of Young Professional Engineers, all
                      geared up to rock on new opportunities, with only aim, to
                      provide dependable and cost-effective service.
                      <br />
                      At <span>ArCoN Structures</span>, we work closely with our
                      clients and partners and take on every challenge that
                      comes our way. We offer commitment to safety and quality,
                      because our relationships are rooted in Trust, and we have
                      capable team to Trust upon who is always excited to tackle
                      new problems. We value keeping great people, attaining
                      operational excellence, and delivering outstanding work to
                      our valued clients.
                      <br />
                      <span>
                        This is our driving force for each coming day!!
                      </span>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="services__item">
                        <img data-aos="fade-right" data-aos-delay="1400" src={mission} alt="" />
                        <h4 data-aos="fade-right" data-aos-delay="600">
                          Our <span>Mission</span>
                        </h4>
                        <p data-aos="fade-right" data-aos-delay="700">
                          As you might expect of a company that began as a
                          high-end interiors contractor, we pay strict
                          attention. Anisotropic elements that randomly sample.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="services__item">
                        <img data-aos="fade-right" data-aos-delay="1400" src={vision} alt="" />
                        <h4 data-aos="fade-right" data-aos-delay="600">
                          Our <span>Vision</span>
                        </h4>
                        <p data-aos="fade-right" data-aos-delay="700">
                          Our commitment to exceptional quality has never
                          wavered. To day ranks as one of the most
                          highly-regarded construction. Anisotropic elements
                          that randomly sample.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
        <!-- About Page Section End --> */}

        {/*
        <!-- Call To Action Section Begin --> */}
        <section className="callto spad set-bg" data-setbg="img/call-bg.jpg">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 text-center">
                <div className="callto__text">
                  <span data-aos="fade-down" data-aos-delay="400">Why choose us?</span>
                  <h2 data-aos="fade-down" data-aos-delay="600">
                    We are not only consultants, we provide the exact and
                    accurate solutions, you are looking forward to...
                  </h2>
                  <Link data-aos="fade-down" data-aos-delay="800" to="/contact" className="primary-btn">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
        <!-- Call To Action Section End --> */}

        {/*
        <!-- Team Section Begin --> */}
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
        {/*
        <!-- Team Section End --> */}

        {/*
        <!-- Footer Section Begin --> */}
        <Footer/>
        {/*
        <!-- Footer Section End --> */}
      </div>
    </>
  );
}

export default About;
