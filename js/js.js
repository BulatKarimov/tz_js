$(function (){
   $("#btn").click(function(){
     $("#text")
           .css("color", "green")
           .html("Новый текст")
           .css("background-color", "#333")
   });
    $("#reset").click(function(){
       location.reload(); 
    });
});