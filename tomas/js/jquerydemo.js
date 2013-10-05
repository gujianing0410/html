$(function(){
	initEvents();
	
});

function initEvents(){
	

	$(".aboutme").click(function(){
		$("#main").animate({scrollTop:"1360px"},600);
	});
	$(".contact").click(function(){
		$("#main").animate({scrollTop:"2560px"},600);
	});
	$(".services").click(function(){
		$("#main").animate({scrollTop:"0"},600);
	});


//
	$("#opicak").hover(
		function(){
		$(".shuoming2").show();
	    }
	    ,
		function(){
		$(".shuoming2").hide();
		}
	);

	$("#rocket").hover(
		function(){
		$(".shuoming1").show();
	    }
	    ,
		function(){
		$(".shuoming1").hide();
		}
	);

	$("#ufo").hover(
		function(){
		$(".shuoming3").show();
	    }
	    ,
		function(){
		$(".shuoming3").hide();
		}
	);

	$("#knez").hover(
		function(){
		$(".shuoming4").show();
	    }
	    ,
		function(){
		$(".shuoming4").hide();
		}	
	);

	$("#sochy").hover(
		function(){
		$(".shuoming5").show();
	    }
	    ,
		function(){
		$(".shuoming5").hide();
		}	
	);
	$("#jelen").hover(
		function(){
		$(".shuoming6").show();
	    }
	    ,
		function(){
		$(".shuoming6").hide();
		}	
	);
	$("#potapeka").hover(
		function(){
		$(".shuoming7").show();
	    }
	    ,
		function(){
		$(".shuoming7").hide();
		}	
	);
	$("#ponorka").hover(
		function(){
		$(".shuoming8").show();
	    }
	    ,
		function(){
		$(".shuoming8").hide();
		}	
	);

}