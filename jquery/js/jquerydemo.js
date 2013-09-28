$(function(){
	initEvents();
	
});

function initEvents(){
	$(window).scroll(function(){
		$("#slideC").css("top",($(this).scrollTop()+100)+"px");
	});
	$("#btnC").click(function(){
		var openflag=$(this).attr("openf");
		if(openflag=="no"){
			$("#slideC").animate({left:0},500,function(){
				$("#btnC").css("background-position","-35px,0");
				$("#btnC").attr("openf","yes");
			});

		}else{
			$("#slideC").animate({left:-268},500,function(){
				$("#btnC").css("background-position","0,0");
				$("#btnC").attr("openf","no");
			});
		}
		
	});
	$(".tooltip").hover(function(){
		var tiptxt=$(this).attr("tiptxt")
		$(this).append('<div class="tip">' + tiptxt + '</div>');
	},function(){
		$(this).find(".tip").remove();
	});



}

