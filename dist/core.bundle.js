!function(g){var o=window.SelectBox=function(e,t){if(e instanceof jQuery){if(!(0<e.length))return;e=e[0]}return this.typeTimer=null,this.typeSearch="",this.isMac=navigator.platform.match(/mac/i),t="object"==typeof t?t:{},this.selectElement=e,!(!t.mobile&&navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i))&&"select"===e.tagName.toLowerCase()&&void this.init(t)};o.prototype.version="1.2.0",o.prototype.init=function(t){var e=g(this.selectElement);if(e.data("selectBox-control"))return!1;var s,o=g('<a class="selectBox" />'),a=e.attr("multiple")||1<parseInt(e.attr("size")),n=t||{},i=parseInt(e.prop("tabindex"))||0,l=this;o.width(e.outerWidth()).addClass(e.attr("class")).attr("title",e.attr("title")||"").attr("tabindex",i).css("display","inline-block").bind("focus.selectBox",function(){this!==document.activeElement&&document.body!==document.activeElement&&g(document.activeElement).blur(),o.hasClass("selectBox-active")||(o.addClass("selectBox-active"),e.trigger("focus"))}).bind("blur.selectBox",function(){o.hasClass("selectBox-active")&&(o.removeClass("selectBox-active"),e.trigger("blur"))}),g(window).data("selectBox-bindings")||g(window).data("selectBox-bindings",!0).bind("scroll.selectBox",n.hideOnWindowScroll?this.hideMenus:g.noop).bind("resize.selectBox",this.hideMenus),e.attr("disabled")&&o.addClass("selectBox-disabled"),e.bind("click.selectBox",function(e){o.focus(),e.preventDefault()}),a?(t=this.getOptions("inline"),o.append(t).data("selectBox-options",t).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox",function(e){l.handleKeyDown(e)}).bind("keypress.selectBox",function(e){l.handleKeyPress(e)}).bind("mousedown.selectBox",function(e){1===e.which&&(g(e.target).is("A.selectBox-inline")&&e.preventDefault(),o.hasClass("selectBox-focus")||o.focus())}).insertAfter(e),e[0].style.height||(i=e.attr("size")?parseInt(e.attr("size")):5,(a=o.clone().removeAttr("id").css({position:"absolute",top:"-9999em"}).show().appendTo("body")).find(".selectBox-options").html("<li><a> </a></li>"),s=parseInt(a.find(".selectBox-options A:first").html("&nbsp;").outerHeight()),a.remove(),o.height(s*i))):(a=g('<span class="selectBox-label" />'),s=g('<span class="selectBox-arrow" />'),a.attr("class",this.getLabelClass()).html(this.getLabelHtml()),(t=this.getOptions("dropdown")).appendTo("BODY"),o.data("selectBox-options",t).addClass("selectBox-dropdown").append(a).append(s).bind("mousedown.selectBox",function(e){1===e.which&&(o.hasClass("selectBox-menuShowing")?l.hideMenus():(e.stopPropagation(),t.data("selectBox-down-at-x",e.screenX).data("selectBox-down-at-y",e.screenY),l.showMenu()))}).bind("keydown.selectBox",function(e){l.handleKeyDown(e)}).bind("keypress.selectBox",function(e){l.handleKeyPress(e)}).bind("open.selectBox",function(e,t){t&&!0===t._selectBox||l.showMenu()}).bind("close.selectBox",function(e,t){t&&!0===t._selectBox||l.hideMenus()}).insertAfter(e),i=o.width()-s.outerWidth()-(parseInt(a.css("paddingLeft"))||0)-(parseInt(a.css("paddingRight"))||0),a.width(i)),this.disableSelection(o),e.addClass("selectBox").data("selectBox-control",o).data("selectBox-settings",n).hide()},o.prototype.getOptions=function(e){var t=g(this.selectElement),s=this,o=function(e,t){return e.children("OPTION, OPTGROUP").each(function(){var e;g(this).is("OPTION")?0<g(this).length?s.generateOptions(g(this),t):t.append("<li> </li>"):((e=g('<li class="selectBox-optgroup" />')).text(g(this).attr("label")),t.append(e),t=o(g(this),t))}),t};switch(e){case"inline":return a=g('<ul class="selectBox-options" />'),(a=o(t,a)).find("A").bind("mouseover.selectBox",function(e){s.addHover(g(this).parent())}).bind("mouseout.selectBox",function(e){s.removeHover(g(this).parent())}).bind("mousedown.selectBox",function(e){1===e.which&&(e.preventDefault(),t.selectBox("control").hasClass("selectBox-active")||t.selectBox("control").focus())}).bind("mouseup.selectBox",function(e){1===e.which&&(s.hideMenus(),s.selectOption(g(this).parent(),e))}),this.disableSelection(a),a;case"dropdown":var a=g('<ul class="selectBox-dropdown-menu selectBox-options" />');if((a=o(t,a)).data("selectBox-select",t).css("display","none").appendTo("BODY").find("A").bind("mousedown.selectBox",function(e){1===e.which&&(e.preventDefault(),e.screenX===a.data("selectBox-down-at-x"))&&e.screenY===a.data("selectBox-down-at-y")&&(a.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"),/android/i.test(navigator.userAgent.toLowerCase())&&/chrome/i.test(navigator.userAgent.toLowerCase())&&s.selectOption(g(this).parent()),s.hideMenus())}).bind("mouseup.selectBox",function(e){1!==e.which||e.screenX===a.data("selectBox-down-at-x")&&e.screenY===a.data("selectBox-down-at-y")||(a.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"),s.selectOption(g(this).parent()),s.hideMenus())}).bind("mouseover.selectBox",function(e){s.addHover(g(this).parent())}).bind("mouseout.selectBox",function(e){s.removeHover(g(this).parent())}),""!==(n=t.attr("class")||""))for(var n=n.split(" "),i=0;i<n.length;i++)a.addClass(n[i]+"-selectBox-dropdown-menu");return this.disableSelection(a),a}},o.prototype.getLabelClass=function(){return("selectBox-label "+(g(this.selectElement).find("OPTION:selected").attr("class")||"")).replace(/\s+$/,"")},o.prototype.getLabelHtml=function(){var e=g(this.selectElement).find("OPTION:selected");return(e.data("icon")?'<i class="fa fa-'+e.data("icon")+' fa-fw fa-lg"></i> '+e.text():e.text())||" "},o.prototype.setLabel=function(){var e=g(this.selectElement).data("selectBox-control");e&&e.find(".selectBox-label").attr("class",this.getLabelClass()).html(this.getLabelHtml())},o.prototype.destroy=function(){var e=g(this.selectElement),t=e.data("selectBox-control");t&&(t.data("selectBox-options").remove(),t.remove(),e.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control",null).removeData("selectBox-settings").data("selectBox-settings",null).show())},o.prototype.refresh=function(){var e,t=g(this.selectElement).data("selectBox-control"),s=t.hasClass("selectBox-dropdown")?"dropdown":"inline";switch(t.data("selectBox-options").remove(),e=this.getOptions(s),t.data("selectBox-options",e),s){case"inline":t.append(e);break;case"dropdown":this.setLabel(),g("BODY").append(e)}"dropdown"==s&&t.hasClass("selectBox-menuShowing")&&this.showMenu()},o.prototype.showMenu=function(){var t=this,e=g(this.selectElement),s=e.data("selectBox-control"),o=e.data("selectBox-settings"),a=s.data("selectBox-options");if(s.hasClass("selectBox-disabled"))return!1;this.hideMenus();var n,i=parseInt(s.css("borderBottomWidth"))||0,l=parseInt(s.css("borderTopWidth"))||0,c=s.offset(),r=o.topPositionCorrelation||0,d=o.bottomPositionCorrelation||0,h=a.outerHeight(),p=s.outerHeight(),u=parseInt(a.css("max-height")),f=g(window).scrollTop(),f=c.top-f,x=g(window).height()-(f+p),B=x<f&&(null==o.keepInViewport||o.keepInViewport),v=s.innerWidth()>=a.innerWidth()?s.innerWidth()+"px":"auto",h=B?c.top-h+l+r:c.top+p-i-d;if(f<u&&x<u&&(B?(a.css({"max-height":u-(n=u-(f-5))+"px"}),h+=n):a.css({"max-height":u-(n=u-(x-5))+"px"})),a.data("posTop",B),a.width(v).css({top:h,left:s.offset().left}).addClass("selectBox-options selectBox-options-"+(B?"top":"bottom")),o.styleClass&&a.addClass(o.styleClass),e.triggerHandler("beforeopen"))return!1;function m(){e.triggerHandler("open",{_selectBox:!0})}switch(o.menuTransition){case"fade":a.fadeIn(o.menuSpeed,m);break;case"slide":a.slideDown(o.menuSpeed,m);break;default:a.show(o.menuSpeed,m)}o.menuSpeed||m();l=a.find(".selectBox-selected:first");this.keepOptionInView(l,!0),this.addHover(l),s.addClass("selectBox-menuShowing selectBox-menuShowing-"+(B?"top":"bottom")),g(document).bind("mousedown.selectBox",function(e){1!==e.which||g(e.target).parents().andSelf().hasClass("selectBox-options")||t.hideMenus()})},o.prototype.hideMenus=function(){0!==g(".selectBox-dropdown-menu:visible").length&&(g(document).unbind("mousedown.selectBox"),g(".selectBox-dropdown-menu").each(function(){var e=g(this),t=e.data("selectBox-select"),s=t.data("selectBox-control"),o=t.data("selectBox-settings"),a=e.data("posTop");if(t.triggerHandler("beforeclose"))return!1;function n(){t.triggerHandler("close",{_selectBox:!0})}if(o){switch(o.menuTransition){case"fade":e.fadeOut(o.menuSpeed,n);break;case"slide":e.slideUp(o.menuSpeed,n);break;default:e.hide(o.menuSpeed,n)}o.menuSpeed||n(),s.removeClass("selectBox-menuShowing selectBox-menuShowing-"+(a?"top":"bottom"))}else g(this).hide(),g(this).triggerHandler("close",{_selectBox:!0}),g(this).removeClass("selectBox-menuShowing selectBox-menuShowing-"+(a?"top":"bottom"));e.css("max-height",""),e.removeClass("selectBox-options-"+(a?"top":"bottom")),e.data("posTop",!1)}))},o.prototype.selectOption=function(e,t){var s=g(this.selectElement);e=g(e);var o,a=s.data("selectBox-control");if(s.data("selectBox-settings"),a.hasClass("selectBox-disabled"))return!1;if(0===e.length||e.hasClass("selectBox-disabled"))return!1;s.attr("multiple")?t.shiftKey&&a.data("selectBox-last-selected")?(e.toggleClass("selectBox-selected"),o=(o=e.index()>a.data("selectBox-last-selected").index()?e.siblings().slice(a.data("selectBox-last-selected").index(),e.index()):e.siblings().slice(e.index(),a.data("selectBox-last-selected").index())).not(".selectBox-optgroup, .selectBox-disabled"),e.hasClass("selectBox-selected")?o.addClass("selectBox-selected"):o.removeClass("selectBox-selected")):this.isMac&&t.metaKey||!this.isMac&&t.ctrlKey?e.toggleClass("selectBox-selected"):(e.siblings().removeClass("selectBox-selected"),e.addClass("selectBox-selected")):(e.siblings().removeClass("selectBox-selected"),e.addClass("selectBox-selected")),a.hasClass("selectBox-dropdown")&&a.find(".selectBox-label").html(e.html());var n=0,i=[];return s.attr("multiple")?a.find(".selectBox-selected A").each(function(){i[n++]=g(this).attr("rel")}):i=e.find("A").attr("rel"),a.data("selectBox-last-selected",e),s.val()!==i&&(s.val(i),this.setLabel(),s.trigger("change")),!0},o.prototype.addHover=function(e){e=g(e),g(this.selectElement).data("selectBox-control").data("selectBox-options").find(".selectBox-hover").removeClass("selectBox-hover"),e.addClass("selectBox-hover")},o.prototype.getSelectElement=function(){return this.selectElement},o.prototype.removeHover=function(e){e=g(e),g(this.selectElement).data("selectBox-control").data("selectBox-options").find(".selectBox-hover").removeClass("selectBox-hover")},o.prototype.keepOptionInView=function(e,t){var s,o,a;e&&0!==e.length&&(o=(s=g(this.selectElement).data("selectBox-control")).data("selectBox-options"),s=s.hasClass("selectBox-dropdown")?o:o.parent(),o=parseInt(e.offset().top-s.position().top),a=parseInt(o+e.outerHeight()),t?s.scrollTop(e.offset().top-s.offset().top+s.scrollTop()-s.height()/2):(o<0&&s.scrollTop(e.offset().top-s.offset().top+s.scrollTop()),a>s.height()&&s.scrollTop(e.offset().top+e.outerHeight()-s.offset().top+s.scrollTop()-s.height())))},o.prototype.handleKeyDown=function(e){var t=g(this.selectElement),s=t.data("selectBox-control"),o=s.data("selectBox-options"),a=t.data("selectBox-settings"),n=0,i=0;if(!s.hasClass("selectBox-disabled"))switch(e.keyCode){case 8:e.preventDefault(),this.typeSearch="";break;case 9:case 27:this.hideMenus(),this.removeHover();break;case 13:s.hasClass("selectBox-menuShowing")?(this.selectOption(o.find("LI.selectBox-hover:first"),e),s.hasClass("selectBox-dropdown")&&this.hideMenus()):this.showMenu();break;case 38:case 37:if(e.preventDefault(),s.hasClass("selectBox-menuShowing")){for(var l=o.find(".selectBox-hover").prev("LI"),n=o.find("LI:not(.selectBox-optgroup)").length,i=0;(0===l.length||l.hasClass("selectBox-disabled")||l.hasClass("selectBox-optgroup"))&&(0===(l=l.prev("LI")).length&&(l=a.loopOptions?o.find("LI:last"):o.find("LI:first")),!(++i>=n)););this.addHover(l),this.selectOption(l,e),this.keepOptionInView(l)}else this.showMenu();break;case 40:case 39:if(e.preventDefault(),s.hasClass("selectBox-menuShowing")){var c=o.find(".selectBox-hover").next("LI");for(n=o.find("LI:not(.selectBox-optgroup)").length,i=0;(0===c.length||c.hasClass("selectBox-disabled")||c.hasClass("selectBox-optgroup"))&&(0===(c=c.next("LI")).length&&(c=a.loopOptions?o.find("LI:first"):o.find("LI:last")),!(++i>=n)););this.addHover(c),this.selectOption(c,e),this.keepOptionInView(c)}else this.showMenu()}},o.prototype.handleKeyPress=function(e){var t=g(this.selectElement).data("selectBox-control"),s=t.data("selectBox-options"),o=this;if(!t.hasClass("selectBox-disabled"))switch(e.keyCode){case 9:case 27:case 13:case 38:case 37:case 40:case 39:break;default:t.hasClass("selectBox-menuShowing")||this.showMenu(),e.preventDefault(),clearTimeout(this.typeTimer),this.typeSearch+=String.fromCharCode(e.charCode||e.keyCode),s.find("A").each(function(){if(g(this).text().substr(0,o.typeSearch.length).toLowerCase()===o.typeSearch.toLowerCase())return o.addHover(g(this).parent()),o.selectOption(g(this).parent(),e),o.keepOptionInView(g(this).parent()),!1}),this.typeTimer=setTimeout(function(){o.typeSearch=""},1e3)}},o.prototype.enable=function(){var e=g(this.selectElement),e=(e.prop("disabled",!1),e.data("selectBox-control"));e&&e.removeClass("selectBox-disabled")},o.prototype.disable=function(){var e=g(this.selectElement),e=(e.prop("disabled",!0),e.data("selectBox-control"));e&&e.addClass("selectBox-disabled")},o.prototype.setValue=function(t){var e,s=g(this.selectElement),o=(s.val(t),null===(t=s.val())&&(t=s.children().first().val(),s.val(t)),s.data("selectBox-control"));o&&(e=s.data("selectBox-settings"),o=o.data("selectBox-options"),this.setLabel(),o.find(".selectBox-selected").removeClass("selectBox-selected"),o.find("A").each(function(){if("object"==typeof t)for(var e=0;e<t.length;e++)g(this).attr("rel")==t[e]&&g(this).parent().addClass("selectBox-selected");else g(this).attr("rel")==t&&g(this).parent().addClass("selectBox-selected")}),e.change)&&e.change.call(s)},o.prototype.disableSelection=function(e){g(e).css("MozUserSelect","none").bind("selectstart",function(e){e.preventDefault()})},o.prototype.generateOptions=function(e,t){var s=g("<li />"),o=g("<a />");s.addClass(e.attr("class")),s.data(e.data()),e.data("icon")?o.attr("rel",e.val()).html('<i class="fa fa-'+e.data("icon")+' fa-fw fa-lg"></i> '+e.text()):o.attr("rel",e.val()).text(e.text()),s.append(o),e.attr("disabled")&&s.addClass("selectBox-disabled"),e.attr("selected")&&s.addClass("selectBox-selected"),t.append(s)},g.extend(g.fn,{setOptions:function(e){var t=g(this),s=t.data("selectBox-control");switch(typeof e){case"string":t.html(e);break;case"object":for(var o in t.html(""),e)if(null!==e[o])if("object"==typeof e[o]){var a,n=g('<optgroup label="'+o+'" />');for(a in e[o])n.append('<option value="'+a+'">'+e[o][a]+"</option>");t.append(n)}else{var i=g('<option value="'+o+'">'+e[o]+"</option>");t.append(i)}}s&&g(this).selectBox("refresh")},selectBox:function(s,e){var t;switch(s){case"control":return g(this).data("selectBox-control");case"settings":if(!e)return g(this).data("selectBox-settings");g(this).each(function(){g(this).data("selectBox-settings",g.extend(!0,g(this).data("selectBox-settings"),e))});break;case"options":if(void 0===e)return g(this).data("selectBox-control").data("selectBox-options");g(this).each(function(){g(this).setOptions(e)});break;case"value":if(void 0===e)return g(this).val();g(this).each(function(){(t=g(this).data("selectBox"))&&t.setValue(e)});break;case"refresh":g(this).each(function(){(t=g(this).data("selectBox"))&&t.refresh()});break;case"enable":g(this).each(function(){(t=g(this).data("selectBox"))&&t.enable(this)});break;case"disable":g(this).each(function(){(t=g(this).data("selectBox"))&&t.disable()});break;case"destroy":g(this).each(function(){(t=g(this).data("selectBox"))&&(t.destroy(),g(this).data("selectBox",null))});break;case"instance":return g(this).data("selectBox");default:g(this).each(function(e,t){g(t).data("selectBox")||g(t).data("selectBox",new o(t,s))})}return g(this)}})}(jQuery),jQuery(document).ready(function(){jQuery("select").selectBox({keepInViewport:!1,menuSpeed:"slow",mobile:!0}),jQuery(".selectBox, .selectBox-dropdown .selectBox-label").removeAttr("style")}),$(window).on("load scroll",function(){4<$(this).scrollTop()?$(".main-header").addClass("fixed-header"):$(".main-header").removeClass("fixed-header")}),$(window).on("load resize orientationchange",function(){768<=$(window).width()?$(".leadership-list").each(function(){var e=$(this).children(".leadership-text");let t=e.find(".leadership-desc");e.hover(function(){t.slideDown(1e3)},function(){t.slideUp(1e3)})}):$(".leadership-text").on("click",function(){$(this).parents().siblings().find(".leadership-desc").slideUp(1e3),$(this).children(".leadership-desc").slideToggle(1e3)})}),$(document).ready(function(){$(".accordion-header").on("click",function(e){e.preventDefault(),$(this).parent().toggleClass("active"),$(this).parent().siblings().removeClass("active"),$(this).parent().siblings().find(".accordion-header").removeClass("open"),$(this).toggleClass("open"),$(this).siblings(".accordion-content").slideToggle(500),$(this).parent().siblings().find(".accordion-content").slideUp(500)}),$(".frm_fields_container input").on("click",function(){$(this).siblings("label").addClass("active"),$(this).addClass("hide-placeholder")}),$(".frm_fields_container input").on("keyup",function(){$(this).removeClass("hide-placeholder");var e=$(this).val(),t=$(this),s=$(this).siblings("label");""!==e?(s.addClass("active"),t.addClass("focused")):(s.removeClass("active"),t.removeClass("focused"))}),$(".frm_fields_container input").on("keydown",function(e){var t,s;$(this).removeClass("hide-placeholder"),9===e.keyCode&&(e=$(this).val(),t=$(this),s=$(this).siblings("label"),$(this).parent(".frm_form_field").prev().find("input").siblings(),""===e?(s.removeClass("active"),t.removeClass("focused")):(s.addClass("active"),t.addClass("focused")))})}),$(document).ready(function(){$("ul.partners-links li:first a").addClass("active"),$(".partners-rows-list:first").addClass("active"),$("ul.partners-links li a").on("click",function(e){e.preventDefault(),$(this).parent().siblings().find("a").removeClass("active"),$(this).addClass("active");e=$(this).attr("data-value");$(".partners-rows-list").removeClass("active").hide(),$('.partners-rows-list[data-target="'+e+'"]').fadeIn(1e3)}),$(".partners-btn").on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$("ul.partners-links").slideToggle("slow")}),$(window).on("load resize orientationchange",function(){$(window).width()<=767&&$("ul.partners-links li a").on("click",function(e){e.preventDefault(),$(".partners-btn").removeClass("active"),$("ul.partners-links").slideUp();var e=$(this).text(),t=$(this).children(".partners-icon").html();$(".partners-btn span").text(e),$(".partners-btn-icon").html(t)})}),$("ul.financial-qlinks li:first a").addClass("active"),$(".financial-row:first").addClass("current-q"),$("ul.financial-qlinks li a").on("click",function(e){e.preventDefault(),$(this).parent().siblings().find("a").removeClass("active"),$(this).addClass("active");e=$(this).attr("data-name");$(".financial-row").removeClass("current-q").hide(),$('.financial-row[data-target="'+e+'"]').fadeIn(1e3)}),$("ul.positions-links li:first a").addClass("active"),$(".positions-rows-list:first").addClass("current-q"),$("ul.positions-links li a").on("click",function(e){e.preventDefault(),$(this).parent().siblings().find("a").removeClass("active"),$(this).addClass("active");e=$(this).attr("data-value");$(".financial-row").removeClass("current-q").hide(),$('.financial-row[data-target="'+e+'"]').fadeIn(1e3)}),$(".positions-btn").on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$("ul.positions-links").slideToggle("slow")}),$(window).on("load resize orientationchange",function(){$(window).width()<=767&&$("ul.positions-links li a").on("click",function(e){e.preventDefault(),$(".positions-btn").removeClass("active"),$("ul.positions-links").slideUp();var e=$(this).text(),t=$(this).children(".positions-icon").html();$(".positions-btn span").text(e),$(".positions-btn-icon").html(t)})})});