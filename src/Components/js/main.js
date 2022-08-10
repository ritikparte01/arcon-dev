import {jQuery} from 'jquery'

// "use strict";
!(function (a) {
  a(window).on("load", function () {
    a(".loader").fadeOut()
    a("#preloder").delay(200).fadeOut("slow");
  })
    a(".set-bg").each(function () {
      var e = a(this).data("setbg");
      a(this).css("background-image", "url(" + e + ")");
    })
    a(".canvas__open").on("click", function () {
      a(".offcanvas-menu-wrapper").addClass("active")
        a(".offcanvas-menu-overlay").addClass("active");
    })
    a(".offcanvas-menu-overlay").on("click", function () {
      a(".offcanvas-menu-wrapper").removeClass("active")
        a(".offcanvas-menu-overlay").removeClass("active");
    })
    a(".mobile-menu").slicknav({
      prependTo: "#mobile-menu-wrap",
      allowParentLinks: !0,
    })
    a(".hero__slider")
      .owlCarousel({
        loop: !0,
        margin: 0,
        items: 1,
        dots: !0,
        nav: !0,
        navText: [
          "<i class='fa fa-angle-left'><i/>",
          "<i class='fa fa-angle-right'><i/>",
        ],
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        smartSpeed: 1500,
        autoHeight: !1,
        autoplay: !0,
        mouseDrag: !1,
        onInitialized: function (e) {
          var s = this.items().length;
          a("#snh-1").html("<span>01</span><span>0" + s + "</span>");
          var t = Math.round(100 / s);
          a(".slider__progress span").css("width", t + "%");
        },
      })
      .on("changed.owl.carousel", function (e) {
        var s = --e.item.index,
          t = e.item.count;
        a("#snh-1").html(
          "<span> 0" +
            (1 > s ? s + t : s > t ? s - t : s) +
            "</span><span>0" +
            t +
            "</span>"
        );
        var o = e.page.index + 1,
          n = Math.round((100 / e.page.count) * o);
        a(".slider__progress span").css("width", n + "%");
      })
    a(".project__slider").owlCarousel({
      loop: !0,
      margin: 0,
      items: 4,
      dots: !1,
      nav: !0,
      navText: [
        "<span class='arrow_carrot-left'><span/>",
        "<span class='arrow_carrot-right'><span/>",
      ],
      smartSpeed: 1200,
      autoHeight: !1,
      autoplay: !1,
      responsive: {
        320: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 },
      },
    })
    a(".testimonial__carousel").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
      fade: !0,
      asNavFor: ".testimonial__client",
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa fa-angle-left"><i></i></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa fa-angle-right"><i></i></i></button>',
    })
    a(".testimonial__client").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".testimonial__carousel",
      arrows: !1,
      variableWidth: !0,
      centerMode: !0,
      focusOnSelect: !0,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        {
          breakpoint: 575,
          settings: { slidesToShow: 1, slidesToScroll: 1, variableWidth: !1 },
        },
      ],
    })
    a(".logo__carousel").owlCarousel({
      loop: !0,
      margin: 80,
      items: 5,
      dots: !1,
      nav: !1,
      smartSpeed: 1200,
      autoHeight: !1,
      autoplay: !0,
      responsive: { 320: { items: 2 }, 576: { items: 3 }, 992: { items: 5 } },
    }),
    a(".count").each(function () {
      a(this)
        .prop("Counter", 0)
        .animate(
          { Counter: a(this).text() },
          {
            duration: 2e4,
            easing: "swing",
            step: function (e) {
              a(this).text(Math.ceil(e));
            },
          }
        );
    });
})(jQuery);
