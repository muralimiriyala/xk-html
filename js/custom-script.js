

jQuery(window).on("load scroll", function(){
    let scroll = jQuery(this).scrollTop();
    scroll > 4 ? jQuery(".main-header").addClass("fixed-header") : jQuery(".main-header").removeClass("fixed-header");
});

jQuery(".toggle_icon").on("click", function(event){
    event.preventDefault();
    jQuery(this).toggleClass("open");
    jQuery("html, body").toggleClass("nav-overlay-open");
    jQuery(".main-header").removeClass("fixed-header");
    jQuery(".navigation").toggleClass("open");
});
jQuery(document).on("ready", function(){
    if(jQuery(window).width() >= 1024){
        jQuery("ul.main-menu > li").mouseover(function(){
            jQuery(this).siblings().addClass("sib");
            jQuery(".nav-right").addClass("sib");
        }).mouseleave(function(){
            jQuery(this).siblings().removeClass("sib");
            jQuery(".nav-right").removeClass("sib");
        });
    }
    if(jQuery(window).width() >= 768){
        jQuery(".leadership-list").each(function() {
            let $this = jQuery(this).children('.leadership-text');
            let descItem = $this.find(".leadership-desc");
            $this.mouseenter(function() {
                descItem.stop(true, false).slideDown(1000);
            }).mouseleave(function() {
                descItem.stop(true, false).slideUp(1000);
            });
        });
    }
    if(jQuery(window).width() <= 1023){
        let level1 = jQuery("ul.main-menu > li.menu-item-has-children > a");
        level1.on("click", function(e){
            e.preventDefault();
            jQuery(this).parent("li").siblings().children("a").removeClass("active");
            jQuery(this).toggleClass("active");
            jQuery(this).parent("li").siblings().children("ul").slideUp(900);
            jQuery(this).siblings("ul").slideToggle(900);
        });
        // let level2 = jQuery("ul.main-menu > li > ul > li.menu-item-has-children > a");
        // level2.on("click", function(){
        //     jQuery(this).parent().siblings("li.menu-item-has-children").find("ul").slideUp();
        //     jQuery(this).siblings("ul").slideToggle();
        // });
    }
    if(jQuery(window).width() <= 767){
        jQuery(".leadership-text").on("click", function() {
            jQuery(this).parent().siblings(".leadership-list").find(".leadership-text").removeClass('expand');
            jQuery(this).toggleClass('expand');
            jQuery(this).parents().siblings().find(".leadership-desc").slideUp();
            jQuery(this).children(".leadership-desc").fadeToggle();
        });
    }

    jQuery('.accordion-header').on('click', function(e){
        e.preventDefault();
        jQuery(this).parent().toggleClass('active');
        jQuery(this).parent().siblings().removeClass('active');
        jQuery(this).parent().siblings().find('.accordion-header').removeClass('open');
        jQuery(this).toggleClass("open");
        jQuery(this).siblings('.accordion-content').slideToggle(500);
        jQuery(this).parent().siblings().find('.accordion-content').slideUp(500);
    });

    jQuery('.frm_fields_container input').on("click", function() {
        jQuery(this).siblings('label').addClass("active");
        jQuery(this).addClass("hide-placeholder");
    });
    jQuery('.frm_fields_container input').on("keyup", function() {
        jQuery(this).removeClass("hide-placeholder");
        var inputValue = jQuery(this).val();
        var $thisInput = jQuery(this);
        var $label = jQuery(this).siblings('label');
        if (inputValue !== "") {
            $label.addClass('active');
            $thisInput.addClass("focused");
        } else {
            $label.removeClass('active');
            $thisInput.removeClass("focused");
        }
    });
    jQuery('.frm_fields_container input').on("keydown", function(event) {
        jQuery(this).removeClass("hide-placeholder");
        if (event.keyCode === 9) { // Tab key code
            var inputValue = jQuery(this).val();
            var $thisInput = jQuery(this);
            var $label = jQuery(this).siblings('label');
            var jQueryprevInput = jQuery(this).parent('.frm_form_field').prev().find('input');
            var jQueryprevLabel = jQueryprevInput.siblings();
            if (inputValue === "") {
                $label.removeClass("active");
                $thisInput.removeClass("focused");
            } else {
                $label.addClass("active");
                $thisInput.addClass("focused");
            }
        }
    });  

    jQuery("ul.tab-scroll-links > li:first > a").addClass("active");
    jQuery("ul.tab-scroll-links > li > a").on("click", function(e){
        e.preventDefault();
        jQuery(this).addClass("active");
        jQuery(this).parent().siblings().find('a').removeClass("active");
    });
    jQuery("#ez-toc-container nav > ul > li:first > a").addClass("active");
    
    let techRow = jQuery(".training-row");
    techRow.each(function(index, item){
        var biolist = jQuery(this);
        var techList = biolist.children('.training-list');
        if(techList.length > 6) {
            techList.slice(6).hide();
            let buttons = biolist.next(".show-load-more");
            let button = buttons.children(".show-all-btn");
            let originalText = button.text().trim();
            button.on('click', function(event) {
                event.preventDefault();
                techList.slice(6).fadeToggle('normal');
                jQuery(this).toggleClass('expanded');
                jQuery(this).text(jQuery(this).text() == originalText ? 'Show Less' : originalText);
            });
        }
    });
    jQuery("ul.ez-toc-list a").on("click", function(){
        jQuery("ul.ez-toc-list a").removeClass("active");
        jQuery(this).addClass("active");
    });

});

jQuery(window).on("load scroll", function(){
    let e_scroll = jQuery(this).scrollTop();
    let h_height =  jQuery(".main-header").outerHeight(true);
    let e_height =  jQuery(".events-post-banner-section").outerHeight(true);
    let t_height = h_height + e_height;
    if(jQuery(".post-default-section").length > 0 ){
        if(e_scroll > t_height){
            jQuery(".post-default-section").addClass("sticky");
        }
        else{
            jQuery(".post-default-section").removeClass("sticky");
        }
    }
});
















