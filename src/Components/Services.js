import React,{useState, useEffect} from "react";
import Navbar from "./Navbar";

import service1 from "./imgs/services/services-1.png";
import service2 from "./imgs/services/services-2.png";
import service3 from "./imgs/services/services-3.png";
import service4 from "./imgs/services/services-4.png";
import bmc from "./imgs/brands/BMC.jpg";
import fosroc from "./imgs/brands/fosroc.png";
import sunanda from "./imgs/brands/sunanda.png";
import asian from "./imgs/brands/asianpaint.png";
import ultra from "./imgs/brands/ultra.png";
import acc from "./imgs/brands/acc.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function Services() {
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

      {/* <!-- Header Section Begin --> */}
      <Navbar />
      {/* <!-- Header Section End --> */}

      {/* <!-- Breadcrumb Section Begin --> */}
      <div
        className="breadcrumb-option spad set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2  data-aos="fade-down" data-aos-delay="300">Our Services</h2>
                <div className="breadcrumb__links" data-aos="fade-down" data-aos-delay="500">
                <Link to="/">Home</Link>
                  <span> Our Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Services Section Begin --> */}
      <section className="services services-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span data-aos="fade-right" data-aos-delay="500">Our specialization</span>
                <h2 data-aos="fade-right" data-aos-delay="700">What we do</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services__item">
                <img data-aos="fade-right" data-aos-delay="900" src={service1} alt="" />
                <h4 data-aos="fade-right" data-aos-delay="1000">Structural Design services</h4>
                <p data-aos="fade-right" data-aos-delay="1100">
                  We provide structural analysis and design of RCC and Steel
                  structures, for every type of project, be it commercial,
                  industrial or residential project, with latest technologies
                  and software’s. We are expert at Designing of luxury villas.
                  We also provide technical support at site for the same.
                </p>
                {/* <!-- <ul>
                            <li>- Energy allocation.</li>
                            <li>- Fire protection, safety</li>
                            <li>- Lifts and escalators.</li>
                            <li>- Facade engineering.</li>
                        </ul> --> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services__item">
                <img data-aos="fade-right" data-aos-delay="900" src={service2} alt="" />
                <h4 data-aos="fade-right" data-aos-delay="1000">Structural Audits and Repair solutions</h4>
                <p data-aos="fade-right" data-aos-delay="1100">
                  We carry out detailed site inspection to find the root cause
                  for deterioration of structures. We carry out Non-Destructive
                  Tests detailed site inspection to arrive at the results for
                  above We recommend the new/quick and reliable solutions for
                  repairs and rehabilitation of Structures
                </p>
                {/* <!-- <ul>
                            <li>- Active system.</li>
                            <li>- Air conditioning.</li>
                            <li> -BSRIA blue book.</li>
                            <li>- Building services engineer.</li>
                        </ul> --> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services__item">
                <img data-aos="fade-right" data-aos-delay="900" src={service3} alt="" />
                <h4 data-aos="fade-right" data-aos-delay="1000">Project Management Consultancy</h4>
                <p data-aos="fade-right" data-aos-delay="1100">
                  For project cost up to 50lakhs, we offer PMC services which
                  include timely selection of materials, Material Stock
                  Management, Quality Control, RA Bills, Timely updates and
                  reports to clients
                </p>
                {/* <!-- <ul>
                            <li>- Pipework.</li>
                            <li>- Plant room.</li>
                            <li> - Plumbing.</li>
                            <li>- Rules of Thumb</li>
                        </ul> --> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="services__item">
                <img data-aos="fade-right" data-aos-delay="900" src={service4} alt="" />
                <h4 data-aos="fade-right" data-aos-delay="1000">Design drawing</h4>
                <p data-aos="fade-right" data-aos-delay="1100">
                  Creating architectural and creative solutions to help people
                  realize their vision and make them a reality.
                </p>
                {/* <!-- <ul>
                            <li>- Guidelines for building.</li>
                            <li>- Thermal comfort.</li>
                            <li>- Types of building services.</li>
                            <li>- Types of heating system.</li>
                        </ul> --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Section End --> */}

      {/* <!-- Counter Section End --> */}
      <section className="counter spad set-bg" data-setbg="img/counter-bg.jpg">
        <div className="container">
          <div className="counter__content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 data-aos="fade-down" data-aos-delay="500" className="count">20</h2>
                  </div>
                  <div className="counter__item__text">
                    <h5 data-aos="fade-down" data-aos-delay="700">
                      Projects
                      <br /> Completed
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 className="count" data-aos="fade-down" data-aos-delay="800">20</h2>
                  </div>
                  <div className="counter__item__text">
                    <h5 data-aos="fade-down" data-aos-delay="1000">
                      Happy
                      <br /> Clients
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 className="count" data-aos="fade-down" data-aos-delay="1100">3</h2>
                  </div>
                  <div className="counter__item__text">
                    <h5 data-aos="fade-down" data-aos-delay="1300">
                      Repair
                      <br /> Projects
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 className="count" data-aos="fade-down" data-aos-delay="1400">17</h2>
                  </div>
                  <div className="counter__item__text">
                    <h5 data-aos="fade-down" data-aos-delay="1600">
                      Design
                      <br /> Projects
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Counter Section End --> */}

      {/* <!-- Client Section Begin --> */}
      <section className="clients spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="section-title">
                {/* <!-- <span>Branding</span> --> */}
                <h2 data-aos="fade-right" data-aos-delay="
                400">Our Branding</h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <a href="">
                    <img  data-aos="flip-left" data-aos-delay="700" src={bmc} alt="" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <a href="">
                    <img  data-aos="flip-left" data-aos-delay="700" src={fosroc} alt="" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <a href="">
                    <img  data-aos="flip-left" data-aos-delay="700" src={sunanda} alt="" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <a href="">
                    <img  data-aos="flip-left" data-aos-delay="700" src={asian} alt="" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <a href="">
                    <img  data-aos="flip-left" data-aos-delay="700" src={ultra} alt="" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <a href="">
                    <img data-aos="flip-left" data-aos-delay="700" src={acc} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Client Section End --> */}

      {/* <!-- Footer Section Begin --> */}
     <Footer/>
      {/* <!-- Footer Section End --> */}
    </div>
  );
}

export default Services;
