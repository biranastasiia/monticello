$(document).ready(function(){
      $('.header').slick({
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
      });

      $('.news__slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
          prevArrow: '<svg class="slide__svg left-arrow"><use xlink:href="#arrow-left"></use></svg>',
          nextArrow: '<svg class="slide__svg right-arrow"><use xlink:href="#arrow-right"></use></svg>',
      });
  
  $(".menu__list").on('click', 'a', function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  })
  
  $('.menu__burger').click(function(){
    $('.menu__list').toggleClass('menu-open');
  })
      
    });