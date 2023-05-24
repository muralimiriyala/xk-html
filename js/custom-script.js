
jQuery(window).on("load scroll", function(){
    let scroll = jQuery(this).scrollTop();
    scroll > 4 ? jQuery(".main-header").addClass("fixed-header") : jQuery(".main-header").removeClass("fixed-header");
});
jQuery(window).on("load resize orientationchange", function() {
    if(jQuery(window).width() >= 768){
        jQuery(".leadership-list").each(function() {
            let $this = jQuery(this).children('.leadership-text');
            let descItem = $this.find(".leadership-desc");
            $this.hover(function() {
                descItem.slideDown(1000);
            }, function() {
                descItem.slideUp(1000);
            });
        });
    }
    else{
        jQuery(".leadership-text").on("click", function() {
            jQuery(this).parents().siblings().find(".leadership-desc").slideUp(1000);
            jQuery(this).children(".leadership-desc").slideToggle(1000);
        });
    }
});
jQuery(document).ready(function(){
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
    jQuery(window).on("load resize orientationchange", function() {
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

});



























