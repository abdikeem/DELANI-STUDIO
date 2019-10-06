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
 
$("#submit").click(function () {
  event.preventDefault()
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  if (name == '' || email == '' || message == '') {
    $("#post").html("Please fill all fields");
    $(".post").css('backgroud-color', 'blue')
  } else {
    $("#post").html(name + " Your message has been received. Thank you for reaching out to us");
    $(".post").css('background-color', 'black')
    $("form")[0].reset();
  }
});
