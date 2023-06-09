
var $ = jQuery.noConflict();
$(window).on("load scroll", function(){
    let scroll = $(this).scrollTop();
    scroll > 4 ? $(".main-header").addClass("fixed-header") : $(".main-header").removeClass("fixed-header");
});

$(window).on("load resize orientationchange", function() {
    if($(window).width() >= 768){
        $(".leadership-list").each(function() {
            let $this = $(this).children('.leadership-text');
            let descItem = $this.find(".leadership-desc");
            $this.hover(function() {
                descItem.slideDown(1000);
            }, function() {
                descItem.slideUp(1000);
            });
        });
    }
    else{
        $(".leadership-text").on("click", function() {
            $(this).parents().siblings().find(".leadership-desc").slideUp(1000);
            $(this).children(".leadership-desc").slideToggle(1000);
        });
    }
});
$(".toggle_icon").on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("open");
    $("html, body").toggleClass("nav-overlay-open");
    $(".main-header").removeClass("fixed-header");
    $(".navigation").toggleClass("open");
});
$(document).on("load ready", function() {
    if($(window).width() <= 1023){
        let level1 = $("ul.main-menu > li.menu-item-has-children > a");
        level1.on("click", function(e){
            e.preventDefault();
            $(this).parent("li").siblings().children("a").removeClass("active");
            $(this).toggleClass("active");
            $(this).parent("li").siblings().children("ul").slideUp();
            $(this).siblings("ul").slideToggle();
        });
        // let level2 = $("ul.main-menu > li > ul > li.menu-item-has-children > a");
        // level2.on("click", function(){
        //     $(this).parent().siblings("li.menu-item-has-children").find("ul").slideUp();
        //     $(this).siblings("ul").slideToggle();
        // });
    }
});
$(document).ready(function(){
    $('.accordion-header').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().removeClass('active');
        $(this).parent().siblings().find('.accordion-header').removeClass('open');
        $(this).toggleClass("open");
        $(this).siblings('.accordion-content').slideToggle(500);
        $(this).parent().siblings().find('.accordion-content').slideUp(500);
    });

    $('.frm_fields_container input').on("click", function() {
        $(this).siblings('label').addClass("active");
        $(this).addClass("hide-placeholder");
    });
    $('.frm_fields_container input').on("keyup", function() {
        $(this).removeClass("hide-placeholder");
        var inputValue = $(this).val();
        var $thisInput = $(this);
        var $label = $(this).siblings('label');
        if (inputValue !== "") {
            $label.addClass('active');
            $thisInput.addClass("focused");
        } else {
            $label.removeClass('active');
            $thisInput.removeClass("focused");
        }
    });
    $('.frm_fields_container input').on("keydown", function(event) {
        $(this).removeClass("hide-placeholder");
        if (event.keyCode === 9) { // Tab key code
            var inputValue = $(this).val();
            var $thisInput = $(this);
            var $label = $(this).siblings('label');
            var $prevInput = $(this).parent('.frm_form_field').prev().find('input');
            var $prevLabel = $prevInput.siblings();
            if (inputValue === "") {
                $label.removeClass("active");
                $thisInput.removeClass("focused");
            } else {
                $label.addClass("active");
                $thisInput.addClass("focused");
            }
        }
    });  
});






















