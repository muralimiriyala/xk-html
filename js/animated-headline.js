

var $ = jQuery.noConflict();
let animatedSlider = $('.animated-headlines');
animatedSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
});
$('.animated-slide:nth-child(6)').addClass("third-animate");
animatedSlider.on('init beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.animated-slide').removeClass('third-animate');
    if(nextSlide == 0){
        $('.animated-slide[data-slick-index=' + (nextSlide + 3) + ']').addClass("third-animate");
    }
    $('.animated-slide[data-slick-index=' + (nextSlide + 2) + ']').addClass("third-animate");
});