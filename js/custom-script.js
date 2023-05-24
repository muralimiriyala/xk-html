
jQuery(window).on("load scroll", function(){
    let scroll = jQuery(this).scrollTop();
    scroll > 4 ? jQuery(".main-header").addClass("fixed-header") :  jQuery(".main-header").removeClass("fixed-header");
});
jQuery(window).on("load resize orientationchange", function() {
    if(jQuery(window).width() >= 768){
        jQuery(".leadership-list").each(function() {
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
});



























