$(document).ready(function(){
     $(".main").click(function(){
     $("#design").toggle();
     $("#space").toggle();
  });
     $(".mai").click(function(){
     $("#development").toggle();
    $("#road").toggle();
  });
    $(".kim").click(function(){
    $("#product").toggle();
    $("#craft").toggle();
  });

});
$(document).ready(function(){
  $"form#form").submit(function(event){
    var name= $("input#userInfo").val();
    var email= $("input#gmail").val();
    var massage= $("input#sms").val();
    if($("input#userInfo").val() && $("input#gmail").val()){
      alart(name + ", Your massage has been received.Thank you for reaching out to us.");
    }
    else{
      alert("incorrect your name and email!");
    }
  });