var open = 'no';

//turn off parallax for now
// $(window).on("resize", function () {
//   if ( $(window).width() > 480){



//     var ypos,image;
//       function parallex() {
//         image = document.getElementById('bridge');
//         ypos = window.pageYOffset;
//         image.style.top = ypos * .7+ 'px';
//       }
//       window.addEventListener('scroll', parallex),false;
//   }
// }).resize();

$("#drawer").click(function(event){
  if(open === 'no'){
    open = 'yes';
    $('header').css("background", "#252728");
    $('header').css('border-bottom', '2px solid #0F0F0D');
    console.log("hello");
  }
  else{
    open = 'no';
    $('header').delay(500).queue( function(next){ 
      $('header').css("background", "rgba(0,0,0,0)");
      next(); 
    });
    $('header').css("border-bottom", "none");

  }

});



$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    if (scroll > 105){
      $('header').css("background", "#252728");
      $('header').css('border-bottom', '2px solid #0F0F0D');
      
    }else{
      if (open === 'no'){
        $('header').css("background", "rgba(0,0,0,0)");
        $('header').css("border-bottom", "none");
      }
    }
});
$("#down").click(function(event){
  
  
    $('html, body').animate({
      scrollTop: $("#about-info").offset().top
    }, 1000);
  
  
});

