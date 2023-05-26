
var $ = jQuery.noConflict();
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