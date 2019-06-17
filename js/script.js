$(document).ready(function() {
$("#submit").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();
$("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (name == '' || email == '' || message == '') {
alert("Please Fill Required Fields");
} else {
alert("submitted");
}
$("#form")[0].reset(); // To reset form fields 
});
});
$(document).ready(function(){
	$("click").click(function(){
    
	});
});
$(document).ready(function() {
$("#delivery").click(function() {
var city = $("#city").val();
var area = $("#area").val();
$("#message").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (city == '' || area == '') {
alert("Please Fill Required Fields");
} else {
alert("Your Order will be Delivered Soon!!!");
}
$("#form")[0].reset(); // To reset form fields 
});
$("#no-delivery").click(function(){
	alert("Enjoy Your Meal");

});
});
$(document).ready(function(){
  $(".navbar-toggler").click(function(){
    $("#navbarNavAltMarkup").collapse('toggle');
    });
  });
$(document).ready(function() {
  $(".custom-control-input").click(function () {
      var total = 0;
      $(".custom-control-input:checked").each(function () {
        total += parseInt($(this).val());
      });
      $('#txtSavingsTot').val(total);
    })
  .change();
});