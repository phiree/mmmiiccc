$('.list .down').click(
function(event){
 
 event.stopPropagation();
 var st=$(window).scrollTop();

$("html, body").animate({ scrollTop: st+670+"px" });
// $(window).scrollTop($(window).scrollTop()+455);
 
	return false;
}
	);


