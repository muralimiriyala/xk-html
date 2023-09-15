
var jQuery = jQuery.noConflict();
jQuery(document).ready(function(){
    jQuery('ul.partners-links li:first a').addClass("active");
    jQuery(".partners-rows-list:first").addClass("active");
    jQuery('ul.partners-links li a').on('click', function(e){
        e.preventDefault();
        jQuery(this).parent().siblings().find('a').removeClass('active');
        jQuery(this).addClass('active');
        var attrName = jQuery(this).attr("data-value");
        jQuery(".partners-rows-list").removeClass("active").hide();
        jQuery('.partners-rows-list[data-target="' + attrName + '"]').fadeIn(1000);
    });
    jQuery(".partners-btn").on("click", function(e){
        e.preventDefault();
        jQuery(this).toggleClass("active");
        jQuery("ul.partners-links").slideToggle("slow");
    });

    jQuery(window).on("load orientationchange", function() {
        if(jQuery(window).width() <= 767){
            jQuery('ul.partners-links li a').on('click', function(e){
                e.preventDefault();
                jQuery(".partners-btn").removeClass("active");
                jQuery("ul.partners-links").slideUp();
                let ptext = jQuery(this).text();
                let pimage = jQuery(this).children(".partners-icon").html();
                jQuery(".partners-btn span").text(ptext);
                jQuery(".partners-btn-icon").html(pimage);
            });
        }
    });

    jQuery('ul.financial-qlinks li:first a').addClass("active");
    jQuery(".financial-row:first").addClass("current-q");
    jQuery('ul.financial-qlinks li a').on('click', function(e){
        e.preventDefault();
        jQuery(this).parent().siblings().find('a').removeClass('active');
        jQuery(this).addClass('active');
        var attrName = jQuery(this).attr("data-name");
        jQuery(".financial-row").removeClass("current-q").hide();
        jQuery('.financial-row[data-target="' + attrName + '"]').fadeIn(1000);
    });

    jQuery('ul.positions-links li:first a').addClass("active");
    jQuery(".positions-row:first").addClass("current-q");
    jQuery('ul.positions-links li a').on('click', function(e){
        e.preventDefault();
        jQuery(this).parent().siblings().find('a').removeClass('active');
        jQuery(this).addClass('active');
        var attrName = jQuery(this).attr("data-value");
        jQuery(".positions-row").removeClass("current-q").hide();
        jQuery('.positions-row[data-target="' + attrName + '"]').fadeIn(1000);
        let allAttr = jQuery('ul.positions-links li:first a').attr("data-value");
        if(allAttr == attrName){
            jQuery(".positions-row").fadeIn(1000);
        }
    });

    jQuery('.browse-btn').on('click', function(e){
        e.preventDefault();
        jQuery(this).toggleClass('active');
        jQuery(".browse-logos-row").fadeToggle("slow");
    });

    jQuery('ul.graphic-filters li:first a').addClass("active");
    jQuery(".contact-list:first").addClass("current-g");
    jQuery(".contact-form-list:first").addClass("current-g");

    jQuery('ul.graphic-filters li a').on('click', function(e){
        // e.preventDefault();
        var attrName = jQuery(this).attr("href");
        var newUrl = window.location.href.split('#')[0] + '' + attrName;
        window.history.pushState({ path: newUrl }, '', newUrl);

        jQuery(this).parent().siblings().find('a').removeClass('active');
        jQuery(this).addClass('active');
        var attrName = jQuery(this).attr("data-name");
        jQuery(".contact-list").removeClass("current-g").hide();
        jQuery('.contact-list[data-value="' + attrName + '"]').fadeIn(1000);
        jQuery(".contact-form-list").removeClass("current-g").hide();
        jQuery('.contact-form-list[data-value="' + attrName + '"]').fadeIn(1000);
    });


    jQuery('ul.doc-tabs-link-1 li:first a').addClass("active");
    jQuery('ul.doc-tabs-link-1 li a').on('click', function(e){
        e.preventDefault();
        jQuery(this).parent().siblings().find('a').removeClass('active');
        jQuery(this).addClass('active');
        var attrName = jQuery(this).attr("data-value");
        jQuery(".financial-row").removeClass("current-q").hide();
        jQuery('.financial-row[data-target="' + attrName + '"]').fadeIn(1000);
    });

    jQuery('ul.doc-tabs-link-2 li:first a').addClass("active");
    jQuery(".doc-repos-lists:first").addClass("current-q");
    jQuery('ul.doc-tabs-link-2 li a').on('click', function(e){
        e.preventDefault();
        jQuery(this).parent().siblings().find('a').removeClass('active');
        jQuery(this).addClass('active');
        var attrName = jQuery(this).attr("data-value");
        jQuery(".doc-repos-lists").removeClass("current-q").hide();
        jQuery('.doc-repos-lists[data-target="' + attrName + '"]').fadeIn(1000);
    });


    jQuery('ul.doc-tabs-link-3 li:first a').addClass("active");
    jQuery(".doc-file-row:first").addClass("current-q");
    jQuery('ul.doc-tabs-link-3 li a').on('click', function(e){
        e.preventDefault();
        jQuery(this).parent().siblings().find('a').removeClass('active');
        jQuery(this).addClass('active');
        var attrName = jQuery(this).attr("data-value");
        jQuery(".doc-file-row").removeClass("current-q").hide();
        jQuery('.doc-file-row[data-target="' + attrName + '"]').fadeIn(1000);
    });

    jQuery(window).on("load orientationchange", function() {
        if(jQuery(window).width() <= 767){
            jQuery(".positions-btn").on("click", function(e){
                e.preventDefault();
                jQuery(this).toggleClass("active");
                jQuery("ul.positions-links").slideToggle("slow");
                jQuery("ul.tab-links").slideToggle("slow");
            });
            jQuery('ul.positions-links li a, ul.tab-links a').on('click', function(e){
                e.preventDefault();
                jQuery(".positions-btn").removeClass("active");
                jQuery("ul.positions-links").slideUp();
                jQuery("ul.tab-links").slideUp();
                let ptext = jQuery(this).text();
                let pimage = jQuery(this).children(".positions-icon").html();
                jQuery(".positions-btn span").text(ptext);
                jQuery(".positions-btn-icon").html(pimage);
            });
            jQuery(".graphic-mobile-btn").on("click", function(e){
                e.preventDefault();
                jQuery(this).toggleClass("active");
                jQuery("ul.graphic-filters").slideToggle("slow");
            });
            jQuery('ul.graphic-filters li a').on('click', function(e){
                e.preventDefault();
                jQuery(".graphic-mobile-btn").removeClass("active");
                jQuery("ul.graphic-filters").slideUp();
                let ptext = jQuery(this).text();
                let pimage = jQuery(this).children(".graphic-icon").html();
                jQuery(".graphic-btn-text").text(ptext);
                jQuery(".graphic-btn-icon").html(pimage);
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var hash = window.location.hash;
    var name = hash.substring(1);
    if (name !== '') {
        setTimeout(function(){
            jQuery('ul.graphic-filters li:first a').removeClass("active");
            jQuery('ul.graphic-filters li a[href="' + "#" + name + '"]').addClass('active');
            let hashAttr =  jQuery('ul.graphic-filters li a[href="' + "#" + name + '"]').attr('data-name');
            jQuery(".contact-list").removeClass("current-g");
            jQuery(".contact-form-list").removeClass("current-g");
            jQuery(".contact-list[data-value="+ hashAttr +"]").addClass("current-g");
            jQuery(".contact-form-list[data-value="+ hashAttr +"]").addClass("current-g");
        }, 1000);

    }
    jQuery("ul.copyright-links li.button > a").on("click", function(){
        let name = "tech-support";
        let value = "data-graphic-2";
        if (name !== "") {
            jQuery('ul.graphic-filters li a').removeClass("active");
            jQuery('ul.graphic-filters li a[href="' + "#" + name + '"]').addClass('active');
            jQuery(".contact-form-list").removeClass("current-g").hide();
            jQuery(".contact-form-list[data-value="+ value +"]").addClass("current-g").fadeIn(1000);
        }
    });
});
