var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    autoplay: {
        delay: 50000,
        disableOnInteraction: false
    },
    loopAdditionalSlides: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1024: {
            slidesPerView: 1.5,
            spaceBetween: 50,
            slidesPerColumn: 1,
        },
        840: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            slidesPerColumn: 1,
        },
        768: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            slidesPerColumn: 1,
        },
        640: {
            slidesPerView: 1.2,
            spaceBetween: 5,
            slidesPerColumn: 1,
        },
        360: {
            slidesPerView: 1.1,
            spaceBetween: 0,
            slidesPerColumn: 2,
        },
        320: {
            slidesPerView: 1.05,
            spaceBetween: 0,
            slidesPerColumn: 2,
        }
    }
});

var mySwiper = new Swiper('.swiper-responsive', {
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    loopAdditionalSlides: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        840: {
            slidesPerView: 4.8,
            spaceBetween: 0,
            slidesPerColumn: 1,
        },
        768: {
            slidesPerView: 4.8,
            spaceBetween: 0,
            slidesPerColumn: 1,
        },
        428: {
            slidesPerView: 2.8,
            spaceBetween: 0,
            slidesPerColumn: 1,
        },
        320: {
            slidesPerView: 2.8,
            spaceBetween: 0,
            slidesPerColumn: 1,
        }
    }
});

$(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

/* gallery  */
var galleryTop = new Swiper(".gallery", {
    spaceBetween: 10,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    loopedSlides: 4,
    autoplay: {
      delay: 50000
    },
    on: {
      click: function() {
      }
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  });
  /* thumbs */
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 4.5,
    touchRatio: 0.4,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4,
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  });
  
  /* set conteoller  */
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
  