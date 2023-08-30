particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#000","#47A992","#B799FF"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.9,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#fff",
        "opacity": 0.9,
        "width": 3
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  const typed = new Typed('#element', {
    strings: ["I'm Ariyan Eiasin.",
             "I'm a Freelancer.",
             "I'm a Developer.",
             "I'm a Designer.",
            ],
             
    typeSpeed: 50,
    smartBackspace: true,
    loop: true,
     backDelay: 900,
     backSpeed: 30,
  });

$(document).ready(function(){
  $('#icon').click(function(){
    $('#header').toggle();
  })
})

$(document).ready(function($) {
  $('.counter_tag').counterUp({
      delay: 10,
      time: 1000
  });
});


$(document).ready(function(){
  $('#bar1').barfiller({duration: 1000});
  $('#bar2').barfiller({duration: 1000});
  $('#bar3').barfiller({duration: 1000});
  $('#bar4').barfiller({duration: 1000});
  $('#bar5').barfiller({duration: 1000});
  $('#bar6').barfiller({duration: 1000});
});

let eiasin = document.querySelector('.tamim');
var mixer = mixitup(eiasin);

$(window).on("load",function(){
  $(".prreloader").delay(1000).fadeOut(1000)
})


$(window).scroll(function(){
  var scrolling = $(this).scrollTop()

  if (scrolling > 100){
    $(".backtotop").fadeIn(500)
  }else{
    $(".backtotop").fadeOut(500)
  }
})

$(".backtotop").click(function(){
  $('html,body').animate({
    scrollTop:0
  })
})

$(".main-menu >i").click(function(){
  $(".main-menu").hide();
})
$(".icon_main").click(function(){
  $(".main-menu").show();
})


// testmonial silick 
$('.client__speak__content__main__slick').slick({ 
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  speed: 2000,
  centerPadding: "0px",
  centerMargin : "0px",
  dots:true,
  arrows: false,
});

