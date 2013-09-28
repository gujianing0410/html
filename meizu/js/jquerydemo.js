$(function(){
	initEvents();
});
function initEvents(){
	$(".ft6").hover(
		function(){
		$("#global").show();
	    }
	    ,
		function(){
		$("#global").hide();
		}
	);
	$(window).scroll(function(){
		
		$("#floatbar").css("top",($(this).scrollTop()+380)+"px");
	});
		$("#bar").hover(
		function(){
			$("#barcontent").show();
			$("#bar").css("background-color","#E6E6E6");
		}
		,
		function(){
			$("#barcontent").hide();
			$("#bar").css("background-color","transparent");
		}
	
	);
}

