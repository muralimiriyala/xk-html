
jQuery(window).on("load scroll", function(){
    let scroll = jQuery(this).scrollTop();
    scroll > 4 ? jQuery(".main-header").addClass("fixed-header") :  jQuery(".main-header").removeClass("fixed-header");
});
































