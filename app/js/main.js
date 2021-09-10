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
    menu('.header__humburger', '.header-mobile', '.header-mobile__close');

	$(document).mousemove(function(e){
		$('#cursor').css({
		  "left" : (e.pageX + 'px'),
		  "top" : (e.pageY   + 'px')
	  });
	   $('#cursorFollow').css({
		  "left" : (e.pageX + 'px'),
		  "top" : (e.pageY   + 'px')
	   });
	});

    $('.services__block').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: true,
		prevArrow: "<div class='prev'><img src='../img/svg/left-first-arrow.svg' class='img-svg' alt='left'><img src='../img/svg/long-arrow.svg' class='img-svg first__arrow' alt='left'></div>",
		nextArrow: "<div class='next'><img src='../img/svg/right-arrow.svg' class='img-svg' alt='right'><img src='../img/svg/long-arrow.svg' class='img-svg first__arrow first__arrow--right' alt='left'></div>",
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

	$('.big-slider').slick({
		dots: true,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});
	document.querySelectorAll('.big-slider__image').forEach(item => {
		item.addEventListener('click', (e) => {
			let num = $(e.target).attr('data-slick-index'); 
			$( '.big-slider' ).slick('slickGoTo', num);
		})
	})

	$(document).ready(function(){
        $(".prices__btn").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;  
            $('body,html').animate({scrollTop: top}, 1500);
        });
		$(".first__btn").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;  
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

  	$(function() {
    	$('.footer__scroll').click(function() {
      	$('html, body').animate({scrollTop: 0},1000);
      		return false;
    	})
	})
  
	function validation() {
		var letters = /^[A-Za-zА-Яа-яЁё\s]+$/;
		var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var numbers = /^[0-9]+$/;
		if (document.querySelector('.request')) {
			document.querySelector('.request__input[name="name"]').addEventListener('input', function() {
				if(this.value.match(letters)) {
					this.classList.add('valid')
					this.classList.remove('invalid')
					return true;
				} else {
					this.classList.remove('valid')
					this.classList.add('invalid')
				}
			})
			document.querySelector('.request__input[name="phone"]').addEventListener('input', function() {
				if(this.value.match(numbers)) {
					this.classList.add('valid')
					this.classList.remove('invalid')
					return true;
				} else {
					this.classList.remove('valid')
					this.classList.add('invalid')
				}
			})
			document.querySelector('.request__input[name="info"]').addEventListener('input', function() {
				if(this.value.match(mailformat)) {
					this.classList.add('valid')
					this.classList.remove('invalid')
					return true;
				} else {
					this.classList.remove('valid')
					this.classList.add('invalid')
				}
			})
		}
	}
	validation(); 

    $(window).scroll(function(){
      	$('.title').each(function(index, item) {
			var wt = $(window).scrollTop();
			var wh = $(window).height();
			var et = $(item).offset().top;
			var eh = $(item).outerHeight();
			var dh = $(document).height();   
			if (wt + wh >= et || wh + wt == dh || eh + et < wh){
				$(item).addClass('title--anim')
			}
      	})
    });
    $(document).ready(function() {
      	if (document.querySelectorAll('.title').length > 0) {
			if ($(window).scrollTop() < $('.title').filter(':first').offset().top) {
			$('.title').filter(':first').addClass('title--anim')
        	}
      	}
    })

    function productTabs() {
      	$('.portfolio__product').each(function() {
			let ths = $(this);
			ths.find('.portfolio__contentItem').not(':first').hide();
			ths.find('.portfolio__product-tab').click(function() {
				ths.find('.portfolio__product-tab').removeClass('portfolio__product-tab--activeTab').eq($(this).index()).addClass('portfolio__product-tab--activeTab');
				ths.find('.portfolio__contentItem').hide().eq($(this).index()).fadeIn()
        	}).eq(0).addClass('active');
      	});
    }
    productTabs();

    function designTabs() {
      $('.design__product').each(function() {
        let ths = $(this);
        ths.find('.design__contentItem').not(':first').hide();
        ths.find('.design__product-tab').click(function() {
          ths.find('.design__product-tab').removeClass('design__product-tab--activeTab').eq($(this).index()).addClass('design__product-tab--activeTab');
          ths.find('.design__contentItem').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
      });
    }
    designTabs();

    function openDocument() {
      	document.querySelectorAll('.useful__item').forEach(item => {
          	item.addEventListener('click', function() {
				document.querySelector('.modal__block img').src = this.querySelector('img').src
				document.querySelector('.modal').classList.add('modal__show')
          	})
          	document.querySelector('.modal').addEventListener('click', (item) => {
				if (item.target.classList.contains('modal__block')) {
					document.querySelector('.modal').classList.remove('modal__show')
				}
          })
			document.querySelector('.modal__close').addEventListener('click', (item) => {
              	document.querySelector('.modal').classList.remove('modal__show')
          	})
      	})
    }
    openDocument();

	function openForm() {
		document.querySelectorAll('.btn-modal').forEach(item => {
			item.addEventListener('click', function() {
			  document.querySelector('.modal-question').classList.add('modal-question__show')
			})
			document.querySelector('.modal-question').addEventListener('click', (item) => {
			  if (item.target.classList.contains('modal-question__block')) {
				  document.querySelector('.modal-question').classList.remove('modal-question__show')
			  }
		})
			document.querySelector('.modal-question__close').addEventListener('click', (item) => {
				document.querySelector('.modal-question').classList.remove('modal-question__show')
			})
		})
  }
  openForm();

	$(document).mousemove(function(e){
		$('#cursor').css({
		  "left" : (e.pageX + 'px'),
		  "top" : (e.pageY   + 'px')
	  	});
	});

    function openTariffPlan() {
      	if (document.querySelector('.prices')) {
			document.querySelectorAll('.prices__more').forEach(item => {
				item.addEventListener('click', () => {
				  document.querySelector('.prices-modal').classList.add('prices-modal--active');
				})
			  })
			  document.querySelector('.prices-modal__close').addEventListener('click', () => {
				document.querySelector('.prices-modal').classList.remove('prices-modal--active');
			})
			document.body.addEventListener('click', (e) => {
				if (e.target.classList.contains('prices-modal')) {
					document.querySelector('.prices-modal').classList.remove('prices-modal--active');
				}
			})
		  }
	  }
    openTariffPlan();

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
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top', // defines which position of the element regarding to window should trigger the animation
	  
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
});