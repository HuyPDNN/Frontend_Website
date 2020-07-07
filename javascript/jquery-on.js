$(document).ready(function(){
    $("input").on({
       function(){
        $(this).css("background-color", "red");
      }, 
      mouseleave: function(){
        $(this).css("background-color", "white");
      }, 
      click: function(){
        $(this).css("background-color", "yellow");
      }  
    });
  });