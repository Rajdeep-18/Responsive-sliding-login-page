$(document).ready(function () {
	$("#RightToLeft").on("click", function () {
		$("#slide").animate({
			marginLeft: "0",
		});
		$(".top").animate({
			marginLeft: "100%",
		});
	});
	$("#LeftToRight").on("click", function () {
		$("#slide").animate({
			marginLeft: "50%",
		});
		$(".top").animate({
			marginLeft: "0",
		});
	});
});

function submitForm() { 
	const email =  
		  document.getElementById('email').value; 
	const password =  
		  document.getElementById('password').value; 

	window.alert('The form is submitted'); 

	document.getElementById('email').value = ''; 
	document.getElementById('password').value = ''; 
}
