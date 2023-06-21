
var $ = jQuery.noConflict();
$(document).ready(function(){
    let $window = $(window);
    let $hcSlider = $('.healthcare-slider');
    hcSettings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        speed: 1000,
        dots: false,
        arrows: false,
        // prevArrow: '<button class="slick_arrow slick-prev button"><span class="fa-sharp fa-regular fa-arrow-left"></span>Healthcare</button>',
        // nextArrow: '<button class="slick_arrow slick-next button">BUILT ENVIRONMENTS<span class="fa-sharp fa-regular fa-arrow-right"></span></button>',  
        variableWidth: true,
        responsive: [
            {
            breakpoint: 1299,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ]
    };

    $(".slick-prev").click(function () {
		$hcSlider.slick("slickPrev");
        $(".slick-next").removeClass("slick-disabled");
        $(this).addClass("slick-disabled");
	});

	$(".slick-next").click(function () {
		$hcSlider.slick("slickNext");
        $(".slick-prev").removeClass("slick-disabled");
        $(this).addClass("slick-disabled");
	});
    

    $hcSlider.slick(hcSettings);
    $window.on('load resize', function(){
        if ($window.width() <= 1023) {
            if ($hcSlider.hasClass('slick-initialized')){
                $hcSlider.slick('unslick');
                return false;
            }
        }
        if (!$hcSlider.hasClass('slick-initialized')){
            return $hcSlider.slick(hcSettings);
        }
    });
});