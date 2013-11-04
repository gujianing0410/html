$(function(){
	initEvents();
	
});

function initEvents(){
	$(".pic").hover(
		function(){
			$(this).find(".buynum").show();
		
	    }
	    ,
		function(){
			$(this).find(".buynum").hide();
		}
	);

	$(".headlist2").hover(
		function(){
			$(this).find(".hisbox").show();
			$(this).css({"border-top-color":"rgb(220, 220, 220)","border-right-color":"rgb(220, 220, 220)","border-left-color":"rgb(220, 220, 220)"});
			$(this).find(".gray6").css({"border-left-color":"rgb(250, 250, 250)","border-right-color":"rgb(250, 250, 250)"});
			$(this).find(".triangleT").hide();
			$(this).find(".triangleP").show();
		}
		,
		function(){
			$(this).find(".hisbox").hide();
			$(this).css({"border-top-color":"rgb(250, 250, 250)","border-right-color":"rgb(250, 250, 250)","border-left-color":"rgb(250, 250, 250)"});
			$(this).find(".gray6").css({"border-left-color":"rgb(220, 220, 220)","border-right-color":"rgb(220, 220, 220)"});
			$(this).find(".triangleT").show();
			$(this).find(".triangleP").hide();
		}
	);
}