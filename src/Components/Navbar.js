import React from "react";

import "./css/slicknav.min.css";
import "./css/slick.css";
import "./css/style.css";
import "./css/bootstrap.min.css";
import { $, jQuery } from "jquery";

import logo from "./imgs/old.png";
import { NavLink,Link } from "react-router-dom";

function Navbar() {
  
  // function closeSide() {
  //   var sideMenu = document.getElementById('offcanvasExample');
  //   var offBody = document.getElementsByClassName('offcanvas-body')
  //   sideMenu.style.visibility="hidden";
  //   offBody.style.visibility="hidden";
  // }
  
    // var menu = document.getElementById("#offcanvasExample");
    
    // function onClickHide(){
    //   menu.style.visibility="hidden";
    // }
//     $(document).ready(function(){
//     setTimeout(function() {
//       $('#offcanvasExample').fadeOut('fast');
//   }, 10000); // <-- time in milliseconds
// });


// $("#B").hide();  // Div B hidden by default
// $("#canvas__open").click(function () {
//     $.when (
//         renderChildPage()
//     ).done (
//         $("#offcanvasExample").show()
//     )
// });
// function renderChildPage() {
//   // 1. some async calls
//   // 2. fill some elements in Div B.
// }



  return (
    
    <div>
      {/* <!-- Header Section Begin --> */}
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <Link to="/">
                  <img src={logo} alt="" width="100" />
                </Link>
                {/* <!-- <h2>ArCoN<span> Structures</span></h2> --> */}
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects">Projects</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__widget">
                <span>Call us for any questions</span>
                <h4>+91 7887836478</h4>
              </div>
            </div>
          </div>
          <a
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <div className="canvas__open" id="canvas__open">
              <i className="fa fa-bars"></i>
            </div>
          </a>

          {/* <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  NavLink with href
</a> */}
        </div>
      </header>
      {/* <!-- Header Section End --> */}

      <div
        class="offcanvas offcanvas-start"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <div className="offcanvas__logo">
            <a href="#">
              <img src={logo} alt="" width="100" />
            </a>
          </div>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul className="mobile-menu">
            <li>
              <NavLink  to="/" className="list" id="link1">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink  to="/about" className="list">
                About
              </NavLink>
            </li>
            <li>
              <NavLink  to="/projects" className="list">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink  to="/services" className="list">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink  to="/contact" className="list">
                Contact
              </NavLink>
            </li>
          </ul>

          <div class="offcanvas-footer">
            <span>Call us for any questions</span>
            <h4>+91 7887836478</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// !(function (event) {
// event(".canvas__open").on("click", function () {
//   event(".offcanvas-menu-wrapper").addClass("active"),
//     event(".offcanvas-menu-overlay").addClass("active");
// }),
// event(".offcanvas-menu-overlay").on("click", function () {
//   event(".offcanvas-menu-wrapper").removeClass("active"),
//     event(".offcanvas-menu-overlay").removeClass("active");
// })
// })

// jQuery(document).ready(function(){

//   jQuery('.canvas__open').click(function(){
//     console.log("test");
//     jQuery(".offcanvas-menu-wrapper").addClass("active");
//      jQuery(".offcanvas-menu-overlay").addClass("active");
//   })

// })
