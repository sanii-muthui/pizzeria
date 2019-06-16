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