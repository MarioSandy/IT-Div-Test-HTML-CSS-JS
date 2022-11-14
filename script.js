// Footer
var socialIcon = document.getElementsByClassName('social-icon')[0];
var img = socialIcon.querySelectorAll('img');
 img.forEach(function(e){
 	e.addEventListener('click',function(){
 		var src = e.getAttribute('src');
 		var splitted = src.split("/");
 		var link = splitted[1].split(".");
 		window.open('https://' + link[0] + '.com', '_blank');
 	})
 })
 
 // Login
if(document.getElementsByClassName("login-button").length == 1){
var buttonLogin = document.getElementsByClassName("login-button")[0];
buttonLogin.addEventListener("click",function(e){
	var email = document.getElementById("email1");
	var password = document.getElementById("password");
	if(email.value == ""){
		alert('Email must be inputted!');
		e.preventDefault();
		return false;
	}
	else if(password.value == ""){
 		alert("Password must be inputted!");
 		e.preventDefault();
 		return false;
 	}
 	else{
		return true;
	}
})
}
// Register
var button = document.getElementById("button");
 button.addEventListener('click',function(e){
 	// Name
 	var name = document.getElementById("name");
 	var email = document.getElementById("email");
 	var male = document.getElementById("male");
 	var female = document.getElementById("female");
 	var select = document.getElementById("city");
 	var textarea = document.querySelector("#address");
 	if(name.value == ""){
 		alert("Name must be inputted!");
 		e.preventDefault();
 		return false;
 	}
 	// email
 	else if(email.value == ""){
 		alert("Email must be inputted!");
 		e.preventDefault();
 		return false;
 	}
 	else if(email.value.indexOf("@@") > -1){
 		alert("Email must be inputted in email format!\n Example : asd@asd.com (Correct)\n asd@@com (Wrong)");
 		e.preventDefault();
 		return false;
 	}
 	else if(!(email.value.charAt(0) === email.value.charAt(0).toLowerCase())){
 		alert("Email must be inputted in email format!\n Example : asd@asd.com (Correct)\n asd@@com (Wrong)");
 		e.preventDefault();
 		return false;
 	}
 	else if(!(email.value.indexOf("@")>-1)){
 		alert("Email must be inputted in email format!\n Example : asd@asd.com (Correct)\n asd@@com (Wrong)");
 		e.preventDefault();
 		return false;
 	}
 	else if(email.value.charAt(email.value.length - 1) == '@'){
 		alert("Email must be inputted in email format!\n Example : asd@asd.com (Correct)\n asd@@com (Wrong)");
 		e.preventDefault();
 		return false;
 	}
 	// Gender
 	else if(!(male.checked || female.checked)){
 		alert("Choose your gender!");
 		e.preventDefault();
 		return false;
 	}
 	// City
 	else if(city.selectedIndex == 0){
 		alert("Choose your city!");
 		e.preventDefault();
 		return false;
 	}
 	// Address
 	else if(textarea.value == ""){
 		alert('Please register your address!');
 		e.preventDefault();
 		return false;
 	}
 	else if(!(textarea.value.indexOf("Street") > -1)){
 		alert('Address must include the word "Street"');
 		e.preventDefault();
 		return false;
 	}
 })

 
