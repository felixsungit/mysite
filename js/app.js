var $overlay = $('<div id="overlay"></div>');
var $menu = $("<ul id='menu'></ul>");
var current = 'dw2';
var open_1 = true;
var open_2 = false;
var open_3 = false;
var open_4 = false;



$menu.append('<li><a href="index.html" id="home">HOME</a></li>');
// $menu.append('<li><a href="about.html" id="about">ABOUT</a></li>');
$menu.append('<li><a href="resume.html" id="resume-page">RESUME</a></li>');
$menu.append('<li><a href="#">PORTFLIO</a></li>');
$menu.append('<li><a href="#">CONTACT</a></li>');
$menu.append('<li id="site"><a href="#">About This Site</a></li>');




$overlay.append($menu);
$("body").append($overlay);

//overlay-------------------------------------------


$("#drawer").click(function(event){
  // event.preventDefault();
  $overlay.slideToggle(500);
 
  if (current === 'dw2'){
  	$("#drawer img").attr('src', "pics/dw3.png");
  	current = 'dw3';

  }
  else{
  	$("#drawer img").attr('src', "pics/dw2.png");
  	current = 'dw2';
  	
  }
  
});


$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() > 720) {
			$overlay.slideUp(200);

			if (current === 'dw3'){
  			$("#drawer img").attr('src', "pics/dw2.png");
  			current = 'dw2';
  	
  		}
  	}
  	

});

//resume-------------------------------------------


$(".summary").hide();
$("#skills").show();

$("#skills-title").css("border-bottom","2px solid #0F0F0D");
$("#skills-title .triangle").attr('src', "pics/triangle2.png");

$("#skills-title").click(function(event){
  // event.preventDefault();
  $("#skills").slideToggle(500);
  if (open_1 === false){
    $("#skills-title").css("border-bottom","2px solid #0F0F0D");
    $("#skills-title .triangle").attr('src', "pics/triangle2.png");
    open_1 = true;
  }else{
    $("#skills-title").css("border-bottom","none");
    $("#skills-title .triangle").attr('src', "pics/triangle.png");
    open_1 = false;
  }




});


$("#work-title").click(function(event){
  // event.preventDefault();
  $("#work").slideToggle(500);
  if (open_2 === false){
    $("#work-title").css("border-bottom","2px solid #0F0F0D");
    $("#work-title .triangle").attr('src', "pics/triangle2.png");
    open_2 = true;
  }else{
    $("#work-title").css("border-bottom","none");
    $("#work-title .triangle").attr('src', "pics/triangle.png");
    open_2 = false;
  }

});

$("#school-title").click(function(event){
  // event.preventDefault();
  $("#school").slideToggle(500);
  

});

$("#side-title").click(function(event){
  // event.preventDefault();
  $("#side").slideToggle(500);

});



//parallax-------------------------------------------




// $overlay..click(function(event){
//   event.preventDefault();
//   $overlay.slideToggle(500);

// });	


// if ($( window ).width() > 720px){
// 	//$overlay.fadeout();
// }




