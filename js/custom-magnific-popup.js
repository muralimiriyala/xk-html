var $ = jQuery.noConflict();
$(document).ready(function(){
    $('.popup-youtube').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-video',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
});