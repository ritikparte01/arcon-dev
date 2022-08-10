import React, {useState,useEffect} from "react";
import Navbar from "./Navbar";
import phone from "./imgs/contact/phone.png";
import mail from "./imgs/contact/mail.png";
import map from "./imgs/contact/map.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function Contact() {
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
                <h2 data-aos="fade-down" data-aos-delay="300">Contact US</h2>
                <div className="breadcrumb__links" data-aos="fade-down" data-aos-delay="500">
                <Link to="/">Home</Link>
                  <span> Contact Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Contact Section Begin --> */}
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact__text">
                <div className="section-title">
                  <span data-aos="fade-right" data-aos-delay="300">Information</span>
                  <h2 data-aos="fade-right" data-aos-delay="400">Contact Details</h2>
                </div>
                <p data-aos="fade-right" data-aos-delay="500">
                  As you might expect of a company that began as a high-end
                  contractor, we pay strict attention.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact__widget__item">
                <div className="contact__widget__item__icon">
                  <img data-aos="fade-right" data-aos-delay="600" src={phone} alt="" />
                </div>
                <div className="contact__widget__item__text">
                  <h5 data-aos="fade-right" data-aos-delay="700">Phone Number</h5>
                  <span data-aos="fade-right" data-aos-delay="800">+91 7887836478</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact__widget__item">
                <div className="contact__widget__item__icon">
                  <img data-aos="fade-right" data-aos-delay="1000" src={mail} alt="" />
                </div>
                <div className="contact__widget__item__text">
                  <h5 data-aos="fade-right" data-aos-delay="1100">Email Address</h5>
                  <span data-aos="fade-right" data-aos-delay="1200">arconstructures@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact__widget__item last__item">
                <div className="contact__widget__item__icon">
                  <img data-aos="fade-right" data-aos-delay="1400" src={map} alt="" />
                </div>
                <div className="contact__widget__item__text">
                  <h5 data-aos="fade-right" data-aos-delay="1500">Office Location</h5>
                  <span data-aos="fade-right" data-aos-delay="1600">
                    S-04 Green View Apt. Samarth Ramdas Nagar, Navghar
                    Road,Vasai(E), Palghar, 401208.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="map"  data-aos="zoom-in-down" data-aos-delay="200">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.721962130046!2d72.83192931529746!3d19.38118804734391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec21f2349c7%3A0x5f5323acd520ed24!2sGreen%20View%20Apartment!5e0!3m2!1sen!2sin!4v1658485849089!5m2!1sen!2sin" width="600" height="450" allowfullscreen=""referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="contact__form__text">
                <div className="section-title">
                  <span data-aos="fade-right" data-aos-delay="300">Form</span>
                  <h2 data-aos="fade-right" data-aos-delay="400">Get in touch</h2>
                </div>
                <p data-aos="fade-right" data-aos-delay="500">
                  As you might expect of a company that began as a high-end
                  contractor, we pay strict attention.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="contact__form">
                {/* <!-- <form action="#">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <input type="text" placeholder="Name">
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <input type="text" placeholder="Email">
                                </div>
                                <div className="col-lg-12">
                                    <textarea placeholder="Message"></textarea>
                                    <button type="submit" className="site-btn">Send Message</button>
                                </div>
                            </div>
                        </form> --> */}

                <form method="POST" name="google-sheet">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input data-aos="fade-right" data-aos-delay="600" type="text" placeholder="Name" name="Name" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input data-aos="fade-right" data-aos-delay="700" type="text" placeholder="Email" name="Email" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input data-aos="fade-right" data-aos-delay="800" type="text" placeholder="Phone" name="Mobile" />
                    </div>
                    <div className="col-lg-12">
                      <textarea data-aos="fade-right" data-aos-delay="800" placeholder="Message" name="Message"></textarea>
                      <button data-aos="fade-right" data-aos-delay="800" type="submit" className="site-btn" name="Submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>

                {/* <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe-KqXqBEb-iZlRke2m1l0LJ_OMzN0SgzNipLSQxOUUWTUIaw/viewform?embedded=true" width="600" height="677" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section End --> */}

      {/* <!-- Footer Section Begin --> */}
        <Footer/>
      {/* <!-- Footer Section End --> */}
    </div>
  );
}

export default Contact;
