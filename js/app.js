$(document).ready(function(){

	// $('#all').css({
	// 	"background":"#FFCB2F",
	// 	"color":"white",
	// });


$('.parallax-window').parallax();



	$(".hi").hide();


  $(".owl-carousel").owlCarousel({
  	autoplay:1000,
  	stopOnHover : false,
  	rewind:true,
  	items:1
  });




  $("#tu").click(function(){
  	$(".hi").fadeToggle(500,function(){
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
	// $('#all').css({
	// 	"background":"#FFCB2F",
	// 	"color":"white",
	// });

	// $('#des,#dev,#ph').css({
	// 	"background":"white",
	// 	"color":"black",
	// });

	$('#all').addClass("act");
	$('#des,#dev,#ph').removeClass("act");	
});


$("#des").click(function(){
	$(".dv,.p").hide(1000);
	$("div").filter(".de").show(1000);
	// $('#des').css({
	// 	"background":"#FFCB2F",
	// 	"color":"white",
	// });

	// $('#all,#dev,#ph').css({
	// 	"background":"white",
	// 	"color":"black",
	// });

	$('#des').addClass("act");
	$('#all,#dev,#ph').removeClass("act");
});


$("#dev").click(function(){
	$(".de,.p").hide(1000);
	$("div").filter(".dv").show(1000);
	// $('#dev').css({
	// 	"background":"#FFCB2F",
	// 	"color":"white",
	// });

	// $('#des,#all,#ph').css({
	// 	"background":"white",
	// 	"color":"black",
	// });

	$('#dev').addClass("act");
	$('#des,#all,#ph').removeClass("act");
});

$("#ph").click(function(){
	$(".de,.dv").hide(1000);
	$("div").filter(".p").show(1000);
	// $('#ph').css({
	// 	"background":"#FFCB2F",
	// 	"color":"white",
	// });

	// $('#des,#dev,#all').css({
	// 	"background":"white",
	// 	"color":"black",
	// });

	$('#ph').addClass("act");
	$('#des,#dev,#all').removeClass("act");
});




});