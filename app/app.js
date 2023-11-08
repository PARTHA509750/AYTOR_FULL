$( function() {

    $('#banner').slick({
     arrows: false,
     dots: true, 
     dotsClass: "container bannerDots",
    });




      //BOOTSTRAP TOOL TIP
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))





//NEW PRODUCT SLIDER

$('.productSlide').slick({
  arrows: false,
  dots: false, 
  dotsClass: "container bannerDots",
  slidesToShow: 4,

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
 });





} );