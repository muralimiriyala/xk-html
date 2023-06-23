
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

    $(window).on("load orientationchange", function() {
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
    $(".positions-row:first").addClass("current-q");
    $('ul.positions-links li a').on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');
        var attrName = $(this).attr("data-value");
        $(".positions-row").removeClass("current-q").hide();
        $('.positions-row[data-target="' + attrName + '"]').fadeIn(1000);
        let allAttr = $('ul.positions-links li:first a').attr("data-value");
        if(allAttr == attrName){
            $(".positions-row").fadeIn(1000);
        }
    });

    $('.browse-btn').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(".browse-logos-row").fadeToggle("slow");
    });

    $('ul.graphic-filters li:first a').addClass("active");
    $(".contact-list:first").addClass("current-g");
    $(".contact-form-list:first").addClass("current-g");
    $('ul.graphic-filters li a').on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');
        var attrName = $(this).attr("data-name");
        $(".contact-list").removeClass("current-g").hide();
        $('.contact-list[data-value="' + attrName + '"]').fadeIn(1000);
        $(".contact-form-list").removeClass("current-g").hide();
        $('.contact-form-list[data-value="' + attrName + '"]').fadeIn(1000);
    });


    $('ul.doc-tabs-link-1 li:first a').addClass("active");
    $('ul.doc-tabs-link-1 li a').on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');
        var attrName = $(this).attr("data-value");
        $(".financial-row").removeClass("current-q").hide();
        $('.financial-row[data-target="' + attrName + '"]').fadeIn(1000);
    });

    $('ul.doc-tabs-link-2 li:first a').addClass("active");
    $(".doc-repos-lists:first").addClass("current-q");
    $('ul.doc-tabs-link-2 li a').on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');
        var attrName = $(this).attr("data-value");
        $(".doc-repos-lists").removeClass("current-q").hide();
        $('.doc-repos-lists[data-target="' + attrName + '"]').fadeIn(1000);
    });


    $('ul.doc-tabs-link-3 li:first a').addClass("active");
    $(".doc-file-row:first").addClass("current-q");
    $('ul.doc-tabs-link-3 li a').on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');
        var attrName = $(this).attr("data-value");
        $(".doc-file-row").removeClass("current-q").hide();
        $('.doc-file-row[data-target="' + attrName + '"]').fadeIn(1000);
    });

    $(window).on("load orientationchange", function() {
        if($(window).width() <= 767){
            $(".positions-btn").on("click", function(e){
                e.preventDefault();
                $(this).toggleClass("active");
                $("ul.positions-links").slideToggle("slow");
                $("ul.tab-links").slideToggle("slow");
            });
            $('ul.positions-links li a, ul.tab-links a').on('click', function(e){
                e.preventDefault();
                $(".positions-btn").removeClass("active");
                $("ul.positions-links").slideUp();
                $("ul.tab-links").slideUp();
                let ptext = $(this).text();
                let pimage = $(this).children(".positions-icon").html();
                $(".positions-btn span").text(ptext);
                $(".positions-btn-icon").html(pimage);
            });
            $(".graphic-mobile-btn").on("click", function(e){
                e.preventDefault();
                $(this).toggleClass("active");
                $("ul.graphic-filters").slideToggle("slow");
            });
            $('ul.graphic-filters li a').on('click', function(e){
                e.preventDefault();
                $(".graphic-mobile-btn").removeClass("active");
                $("ul.graphic-filters").slideUp();
                let ptext = $(this).text();
                let pimage = $(this).children(".graphic-icon").html();
                $(".graphic-btn-text").text(ptext);
                $(".graphic-btn-icon").html(pimage);
            });
        }
    });
});