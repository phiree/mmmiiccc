$.fn.Scroll=function(options){
var defaultOptions={
	scrollDistance:445
};
var options=$.extend(defaultOptions,options);
$(this).click(function(event){
	event.stopPropagation();
 var st=$(window).scrollTop();

$("html, body").animate({ scrollTop: st+options.scrollDistance+"px" });
// $(window).scrollTop($(window).scrollTop()+455);
	return false;
});

}