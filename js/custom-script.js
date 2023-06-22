
var $ = jQuery.noConflict();
$(window).on("load scroll", function(){
    let scroll = $(this).scrollTop();
    scroll > 4 ? $(".main-header").addClass("fixed-header") : $(".main-header").removeClass("fixed-header");
});

$(".toggle_icon").on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("open");
    $("html, body").toggleClass("nav-overlay-open");
    $(".main-header").removeClass("fixed-header");
    $(".navigation").toggleClass("open");
});
$(document).on("load ready", function(){
    if($(window).width() >= 1024){
        $("ul.main-menu > li").mouseover(function(){
            $(this).siblings().addClass("sib");
            $(".nav-right").addClass("sib");
        }).mouseleave(function(){
            $(this).siblings().removeClass("sib");
            $(".nav-right").removeClass("sib");
        });
    }
    if($(window).width() >= 768){
        $(".leadership-list").each(function() {
            let $this = $(this).children('.leadership-text');
            let descItem = $this.find(".leadership-desc");
            $this.mouseenter(function() {
                descItem.stop(true, false).slideDown(1000);
            }).mouseleave(function() {
                descItem.stop(true, false).slideUp(1000);
            });
        });
    }
    if($(window).width() <= 1023){
        let level1 = $("ul.main-menu > li.menu-item-has-children > a");
        level1.on("click", function(e){
            e.preventDefault();
            $(this).parent("li").siblings().children("a").removeClass("active");
            $(this).toggleClass("active");
            $(this).parent("li").siblings().children("ul").slideUp(900);
            $(this).siblings("ul").slideToggle(900);
        });
        // let level2 = $("ul.main-menu > li > ul > li.menu-item-has-children > a");
        // level2.on("click", function(){
        //     $(this).parent().siblings("li.menu-item-has-children").find("ul").slideUp();
        //     $(this).siblings("ul").slideToggle();
        // });
    }
    if($(window).width() <= 767){
        $(".leadership-text").on("click", function() {
            $(this).parent().siblings(".leadership-list").find(".leadership-text").removeClass('expand');
            $(this).toggleClass('expand');
            $(this).parents().siblings().find(".leadership-desc").slideUp();
            $(this).children(".leadership-desc").fadeToggle();
        });
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

    $("ul.tab-scroll-links > li:first > a").addClass("active");
    $("ul.tab-scroll-links > li > a").on("click", function(e){
        e.preventDefault();
        $(this).addClass("active");
        $(this).parent().siblings().find('a').removeClass("active");
    });
    $("#ez-toc-container nav > ul > li:first > a").addClass("active");

    let headerHeight = $(".main-header").outerHeight(true);
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - headerHeight
            }, 1000);
            return false;
            }
        }
    });
    let techRow = $(".training-row");
    techRow.each(function(index, item){
        var biolist = jQuery(this);
        var techList = biolist.children('.tech-support-list');
        if(techList.length > 6) {
            techList.slice(6).hide();
            let buttons = biolist.next(".tech-support-more");
            let button = buttons.children(".show-all-btn");
            let originalText = button.text().trim();
            button.on('click', function(event) {
                event.preventDefault();
                techList.slice(6).fadeToggle('normal');
                $(this).toggleClass('expanded');
                $(this).text($(this).text() == originalText ? 'Show Less' : originalText);
            });
        }
    });
    $("ul.ez-toc-list a").on("click", function(){
        $("ul.ez-toc-list a").removeClass("active");
        $(this).addClass("active");
    });
});






















