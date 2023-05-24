
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
$(document).ready(function(){

    $('ul.partners-links li:first a').addClass("active");
    $(".partners-rows-list:first").addClass("active");
    $('ul.partners-links li a').on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');
        var attrName = $(this).attr("data-value");
        $(".partners-rows-list").removeClass("active").hide();
        $('.partners-rows-list[data-target="' + attrName + '"]').fadeIn(1000);
    });
    $(".partners-btn").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $("ul.partners-links").slideToggle("slow");
    });
    $(window).on("load resize orientationchange", function() {
        if($(window).width() <= 767){
            $('ul.partners-links li a').on('click', function(e){
                e.preventDefault();
                $(".partners-btn").removeClass("active");
                $("ul.partners-links").slideUp();
                let ptext = $(this).text();
                let pimage = $(this).children(".partners-icon").html();
                $(".partners-btn span").text(ptext);
                $(".partners-btn-icon").html(pimage);
            });
        }
    });

    $('ul.financial-qlinks li:first a').addClass("active");
    $(".financial-row:first").addClass("current-q");
    $('ul.financial-qlinks li a').on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');
        var attrName = $(this).attr("data-name");
        $(".financial-row").removeClass("current-q").hide();
        $('.financial-row[data-target="' + attrName + '"]').fadeIn(1000);
    });

    $('ul.positions-links li:first a').addClass("active");
    $(".positions-rows-list:first").addClass("current-q");
    $('ul.positions-links li a').on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');
        var attrName = $(this).attr("data-value");
        $(".financial-row").removeClass("current-q").hide();
        $('.financial-row[data-target="' + attrName + '"]').fadeIn(1000);
    });
    $(".positions-btn").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $("ul.positions-links").slideToggle("slow");
    });
    $(window).on("load resize orientationchange", function() {
        if($(window).width() <= 767){
            $('ul.positions-links li a').on('click', function(e){
                e.preventDefault();
                $(".positions-btn").removeClass("active");
                $("ul.positions-links").slideUp();
                let ptext = $(this).text();
                let pimage = $(this).children(".positions-icon").html();
                $(".positions-btn span").text(ptext);
                $(".positions-btn-icon").html(pimage);
            });
        }
    });
});



























