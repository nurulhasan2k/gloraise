$(function(){
	superplaceholder({
		el: domainInput,
		sentences : ['eg: .com','eg: .asia','eg: .online','eg: .me','eg: .cn','eg: .bd'],
		options:{
			letterDelay:200,
			startOnFocus:false,
			loop:true
		}
	});
	superplaceholder({
		el: mailEmail,
		sentences : ['abc@example.com','123@example.com','demo@example.com','ABC@example.com'],
		options:{
			letterDelay:200,
			loop:true
		}
	});
	$(document).ready(function(){
		$('.counter').counterUp({
			delay:10,
			time:1000
		});
	});
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		if (scroll >60){
			$('.navbar-2').addClass('fixed-top');
		}else {
			$('.navbar-2').removeClass('fixed-top');
		};
	});
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		if (scroll > 650){
			$('.anim1').addClass('rollIn');
		}else{
			$('.anim1').removeClass('rollIn');
		}
	});
});