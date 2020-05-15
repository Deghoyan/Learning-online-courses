$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  	loop:true,
  	nav:true,
  	autoplay:true,
  	autoplayTimeout:5000,
  	responsive: {
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1400: {
            items: 4,
        }
    }
  });
});