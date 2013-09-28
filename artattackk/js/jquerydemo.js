$(function(){
	initEvents();
	
});

function initEvents(){

	$(".clickright").click(function(){
		$("#lyr1").css("left","-218px");
	});
	$(".clickleft").click(function(){
		$("#lyr1").css("left","218px");
	});
}