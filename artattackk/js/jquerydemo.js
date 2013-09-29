$(function(){
	initEvents();
	
});



function initEvents(){

	var cnum=0;
	var index=0;
	$(".clickright").click(function(){
		if (index<9) {
			index=index+1;
			cnum=cnum-218;

			$("#lyr1").animate({left:cnum+"px"},500);
		};
	
		
		
	});
	$(".clickleft").click(function(){
		if (index>0) {
			index=index-1;
			cnum=cnum+218;
			$("#lyr1").animate({left:cnum+"px"},500);
		};
	});
//


	$("#touchbutton").click(function(){
		$("#popup1").show();
		$("#popupbox").show();
	});
	$("#popup1").click(function(){
		$("#popup1").hide();
		$("#popupbox").hide();
	});
	$("#close").click(function(){
		$("#popup1").hide();
		$("#popupbox").hide();
	});
	

	$("#pt1").click(function(){
		$("#popup").show();
		$("#bigimg1").show();
	});

	$("#bigimg1").click(function(){
		$("#bigimg1").hide();
		$("#popup").hide();
	});

	$("#popup").click(function(){
		$("#bigimg1").hide();
		$("#popup").hide();
	});
	$("#pt2").click(function(){
		$("#popup").show();
		$("#bigimg2").show();
	});

	$("#bigimg2").click(function(){
		$("#bigimg2").hide();
		$("#popup").hide();
	});

	$("#popup").click(function(){
		$("#bigimg2").hide();
		$("#popup").hide();
	});
	$("#pt3").click(function(){
		$("#popup").show();
		$("#bigimg3").show();
	});

	$("#bigimg3").click(function(){
		$("#bigimg3").hide();
		$("#popup").hide();
	});

	$("#popup").click(function(){
		$("#bigimg3").hide();
		$("#popup").hide();
	});

	$("#pt4").click(function(){
		$("#popup").show();
		$("#bigimg4").show();
	});

	$("#bigimg4").click(function(){
		$("#bigimg4").hide();
		$("#popup").hide();
	});

	$("#popup").click(function(){
		$("#bigimg4").hide();
		$("#popup").hide();
	});
	$("#pt5").click(function(){
		$("#popup").show();
		$("#bigimg5").show();
	});

	$("#bigimg5").click(function(){
		$("#bigimg5").hide();
		$("#popup").hide();
	});

	$("#popup").click(function(){
		$("#bigimg5").hide();
		$("#popup").hide();
	});
	$("#pt6").click(function(){
		$("#popup").show();
		$("#bigimg6").show();
	});

	$("#bigimg6").click(function(){
		$("#bigimg6").hide();
		$("#popup").hide();
	});

	$("#popup").click(function(){
		$("#bigimg6").hide();
		$("#popup").hide();
	});
//

	$(".styleselect").click(function(){
		$("#container").show();		
	});
	


	$(".li1").click(function(){
                var txt = $(this).html();
                $(".styleselect").html(txt);
                $("#container").hide();
            });
}
