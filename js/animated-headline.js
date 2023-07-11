


let animatedSlider = jQuery(".animated-headlines");
animatedSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    focusOnSelect: true,
});
jQuery(".animated-slide:nth-child(6)").addClass("third-animate");
animatedSlider.on("init beforeChange", function(event, slick, currentSlide, nextSlide) {
    jQuery(".animated-slide").removeClass("third-animate");
    if(nextSlide == 0){
        jQuery(".animated-slide[data-slick-index=' + (nextSlide + 3) + ']").addClass("third-animate");
    }
    jQuery(".animated-slide[data-slick-index=' + (nextSlide + 2) + ']").addClass("third-animate");
});