// //document.querySelector("h1").style.color ="#519259";
// //$("h1").addClass("big-title margin-50");
// $("h1").text("Thank you 2021 and Thank you in Advance 2022");
//
// //$("button").text("Don't Click Me!");
// $("button").html("<em>hey</em>");
//
// //console.log($("img").attr("src"));
// //$("a").attr("href","https://www.yahoo.com");

// adding addeventListener

// $("h1").click(function(){
//   $("h1").css("color","#519259");
// });

// for(var i=0; i<5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     document.querySelector("h1").style.color ="#519259";
//   });
// }

$("button").click(function(){
  $("h1").css("color","#519259");
});

$(document).keypress(function(event){
  $("h1").text(event.key);

  //console.log(event.key);
});
//here we also use click instead of mouseover
$("h1").on("click",function(){
  $("h1").css("color","#519259");
});

$("button").on("click",function(){
  // $("h1").toggle();
  // $("h1").hide();
  //$("h1").slideToggle();
//  $("h1").animate({opacity: 0.5});
$("h1").slideUp().slideDown().animate({opacity: 0.5});
});

//adding buttons
// $("h1").before("<button> new</button>");
// $("h1").after("<button> new</button>");
// $("h1").prepend("<button> new</button>");
// $("h1").append("<button> new</button>");
