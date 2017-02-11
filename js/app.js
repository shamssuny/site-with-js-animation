$(document).ready(function(){

	$('#all').css({
		"background":"#FFCB2F",
		"color":"white",
	});


	$(".hi").hide();
  $(".owl-carousel").owlCarousel({
  	autoplay:1000,
  	stopOnHover : false,
  	loop:true,
  	items:1
  });




  $("#tu").click(function(){
  	$(".hi").toggle(1000,function(){
  		var x = $("#tu").hasClass("fa-bars");
  		if(x==true){
  		$("#tu").removeClass("fa-bars");
  		$("#tu").addClass("fa-times");
  		}
  		else{
  		$("#tu").removeClass("fa-times");
  		$("#tu").addClass("fa-bars");
  		}
  	});
  });



  

  $(window).scroll(function(){
	var n = 200;
	var m = $(window).scrollTop();
	

	if(n<=m){

	$("#m").addClass("navbar-fixed-top");
		
	}
	else{
		$("#m").removeClass("navbar-fixed-top");
	}
});





$("#all").click(function(){
	$(".work-detail").show(1000);
	$('#all').css({
		"background":"#FFCB2F",
		"color":"white",
	});

	$('#des,#dev,#ph').css({
		"background":"white",
		"color":"black",
	});
});


$("#des").click(function(){
	$(".dv,.p").hide(1000);
	$("div").filter(".de").show(1000);
	$('#des').css({
		"background":"#FFCB2F",
		"color":"white",
	});

	$('#all,#dev,#ph').css({
		"background":"white",
		"color":"black",
	});
});


$("#dev").click(function(){
	$(".de,.p").hide(1000);
	$("div").filter(".dv").show(1000);
	$('#dev').css({
		"background":"#FFCB2F",
		"color":"white",
	});

	$('#des,#all,#ph').css({
		"background":"white",
		"color":"black",
	});
});

$("#ph").click(function(){
	$(".de,.dv").hide(1000);
	$("div").filter(".p").show(1000);
	$('#ph').css({
		"background":"#FFCB2F",
		"color":"white",
	});

	$('#des,#dev,#all').css({
		"background":"white",
		"color":"black",
	});
});



  

});