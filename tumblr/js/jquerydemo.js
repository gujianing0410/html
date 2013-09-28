$(function(){
	initEvents();
});

function initEvents(){
	var txt1;
	$(".email").keyup(function(){
		txt1=$(this).val();
		if (txt1=="") {
			$(this).css("background-image","url('css/images/email.jpg')");
		}else{
			
			$(this).css("background-image","none");
		}
		
	});
	var txt2;
	$(".password").keyup(function(){
		txt2=$(this).val();
		if (txt2=="") {
			$(this).css("background-image","url('css/images/password.jpg')");
		}else{
			
			$(this).css("background-image","none");
		}
		
	});
	var txt3;
	$(".username").keyup(function(){
		txt3=$(this).val();
		if (txt3=="") {
			$(this).css("background-image","url('css/images/username.jpg')");
		}else{
			
			$(this).css("background-image","none");
		}
		
	});
}