$(document).ready(function(){
  $(".header").click(function(){
    $(".topnav").hide(5000,function(){alert
    ("the nav bar is gone!!!!!!!!!!");
  });
});
});
$("#show").click(function(){
  $(".topnav").show(5000,function(){
    alert("the nav bar is back!!!!")
  });
});
$("button").click(function() {
  $("div").animate({left:250px});

});

});
