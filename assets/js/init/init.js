$(document).ready(function () {
  /*MOBILE MENU*/
  $('#js-mobileMenu').click(function () {
    $('#js-headerMenu').animate({
      'height': 'toggle'
    }, 300);
  });

  /*DISABLE MOBILE MENU*/
  enquire.register("screen and (min-width: 1000px)", {
    setup: function () {
      // Load in content via AJAX (just the once)
    },
    match: function () {
      $('#js-headerMenu').css({ 'display': '' });
    },
    unmatch: function () {
    }
  });

  /*SLIDER*/
  $('#js-slider__home').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
  });

  $('#js-slider__modelMain').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    // fade: true,
    // speed: 1000,
    swipe: false,
    infinite: false,
    adaptiveHeight: true,
    asNavFor: '#js-slider__modelThumbnail'
  });

  $('#js-slider__modelThumbnail').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    mobileFirst: true,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '#js-slider__modelMain',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        }
      }
      ,
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 8,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 9,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 10,
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 11,
        }
      }
    ]
  });

  /**history timeline */
  $('#js-timeline').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: false,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8
        }
      }
    ]
  });

  /**click timeline */
  var timeline = $('#js-timeline');
  var timelineSlide = timeline.find('.slick-slide');
  var timeinfoCard = $('.c-timeinfo').find('.o-timeinfo__card');
  var headerHeight = $('.c-header').outerHeight();
  /**default class timeline current */
  if (timelineSlide) {
    timelineSlide.eq(0).addClass('timeline-current');
  }
  timelineSlide.click(function (e) {
    e.preventDefault();
    var index = parseInt(this.getAttribute('data-slick-index'));
    timeline.slick('slickGoTo', index);
    timeline.find('.slick-slide').removeClass('timeline-current');
    $(this).addClass('timeline-current');
    /**scroll */
    var timeinfoCardCurrent = timeinfoCard.eq(index);
    var timelineHeight = timelineContainer.outerHeight();
    if (window.matchMedia("(min-width: 1000px)").matches) {
      $('html, body').animate({
        scrollTop: timeinfoCardCurrent.offset().top - headerHeight - timelineHeight
      }, 800);
    } else {
      $('html, body').animate({
        scrollTop: timeinfoCardCurrent.offset().top - timelineHeight
      }, 800);
    }
  });

  /**scroll timeline */
  var timeinfoContainer = $('.c-timeinfo');
  var timelineContainer = $('.c-timeline');
  var timelineCheck = document.querySelector('.c-timeline');
  if (timelineCheck) {
    window.addEventListener('scroll', function () {
      var timelineHeight = timelineContainer.outerHeight();
      if (window.matchMedia("(min-width: 1000px)").matches) {
        var timeinfoPosition = timeinfoContainer.offset().top - headerHeight - timelineHeight;
      } else {
        var timeinfoPosition = timeinfoContainer.offset().top - timelineHeight;
      }

      var scrollPosition = window.pageYOffset;
      if (scrollPosition >= timeinfoPosition) {
        timelineContainer.addClass('c-timeline--fixed');
      } else {
        timelineContainer.removeClass('c-timeline--fixed');
      }
    });    
  }



  /*CHECK MINIMUM SLIDE*/
  var slideHome = $('#js-slider__home');
  var slideCount = slideHome.find('.o-slider__wrap').length;
  if (slideCount <= 1) {
    slideHome.find('.slick-dots').hide();
  }

  /*SCROLL*/
  $('.js-scroll').on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });

    }
  });

  /*ELLIPSIS*/
  Ellipsis({
    ellipsis: '…', //default ellipsis value
    debounce: 0, //if you want to chill out your memory usage on resizing
    responsive: true, //if you want the ellipsis to move with the window resizing
    className: '.o-article__title', //default class to apply the ellipsis
    lines: 4, //default number of lines when the ellipsis will appear
    portrait: null, //default no change, put a number of lines if you want a different number of lines in portrait mode,
    break_word: true, //default the ellipsis can truncate words
  }); //specific conf on titles

  Ellipsis({
    ellipsis: '…', //default ellipsis value
    debounce: 0, //if you want to chill out your memory usage on resizing
    responsive: true, //if you want the ellipsis to move with the window resizing
    className: '.o-article__excerpt', //default class to apply the ellipsis
    lines: 8, //default number of lines when the ellipsis will appear
    portrait: null, //default no change, put a number of lines if you want a different number of lines in portrait mode,
    break_word: true, //default the ellipsis can truncate words
  }); //specific conf on titles

  // video iframe fit video wysiwyg
  $(".o-article-inner__content").fitVids();
  $(".o-model__video").fitVids();


  /*
    FRONT TOUR 360 VIEW INIT
  */
  /*mg_ZS 360 view interior*/
  // var mg_zs = document.getElementById('js-mg-zs');
  // if (mg_zs) {
  //   embedpano({swf:"tour.swf", xml:"tour-mg_ZS.xml", target:"js-mg-zs", html5:"always", mobilescale:1.0, passQueryParameters:true});
  // }
  /*mg_RX5 360 view interior*/
  // var mg_rx5 = document.getElementById('js-mg-rx5');
  // if (mg_rx5) {
  //   embedpano({swf:"tour.swf", xml:"tour-mg_RX5.xml", target:"js-mg-rx5", html5:"always", mobilescale:1.0, passQueryParameters:true});
  // }

  /*
    BACK TOUR 360 VIEW INIT
  */
  /*mg_ZS 360 view interior*/
  // var mg_zs = document.getElementById('js-mg-zs');
  // if (mg_zs) {
  //   embedpano({ swf: baseurl + "assets/tour.swf", xml: baseurl + "assets/tour-mg_ZS.xml", target: "js-mg-zs", html5: "always", mobilescale: 1.0, passQueryParameters: true });
  // }
  // /*mg_RX5 360 view interior*/
  // var mg_rx5 = document.getElementById('js-mg-rx5');
  // if (mg_rx5) {
  //   embedpano({ swf: baseurl + "assets/tour.swf", xml: baseurl + "assets/tour-mg_RX5.xml", target: "js-mg-rx5", html5: "always", mobilescale: 1.0, passQueryParameters: true });
  // }

  // $('.o-header__model').on('mouseover',function() {
  //   $('.o-header__model').addClass('active');
  // });

  // $('body').click(function(){
  //   $('.o-header__model').removeClass('active');
  // });


});
