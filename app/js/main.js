document.addEventListener("DOMContentLoaded", function(event) {



    function menu(menuBtn, block, close) {
        if (document.querySelector(menuBtn)) {
            document.querySelector(menuBtn).addEventListener('click', () => {
                document.querySelector(block).style.cssText = 'left: 0';
                document.body.style.overflow = "hidden"
            })
            document.querySelector(close).addEventListener('click', () => {
                document.body.style.overflow = "auto"
                document.querySelector(block).style.cssText = 'left: -100%';
            })
        }
    } 
    // menu('', '', '');

    $('.services__block').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: true,
        prevArrow: "<div class='prev'><img src='../img/svg/left-arrow.svg' class='img-svg' alt='left'></div>",
        nextArrow: "<div class='next'><img src='../img/svg/right-arrow.svg' class='img-svg' alt='right'></div>",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.first__slider').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      arrows: true,
      prevArrow: "<div class='prev'><img src='../img/svg/left-first-arrow.svg' class='img-svg' alt='left'><img src='../img/svg/long-arrow.svg' class='img-svg first__arrow' alt='left'></div>",
      nextArrow: "<div class='next'><img src='../img/svg/right-arrow.svg' class='img-svg' alt='right'><img src='../img/svg/long-arrow.svg' class='img-svg first__arrow first__arrow--right' alt='left'></div>",
  });

    $(document).ready(function () {
        $('img.img-svg').each(function(){
            var $img = $(this);
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
            }, 'xml');
        }); 
    })

    $(function() {
      $('.footer__scroll').click(function() {
        $('html, body').animate({scrollTop: 0},1000);
        return false;
      })
    })
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 320, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top', // defines which position of the element regarding to window should trigger the animation
    
    });
});