//var $inputs = $('');
function modifyCSSIfIsEmpty(input, elementTip)
{
	if(input.value == "")
	{
		console.log(input.style);
		input.style.backgroundColor = "rgba(30,0,0,0.1)";
		input.style.borderStyle = "solid";
		input.style.borderColor = "red";
		input.style.color = "gray";
		//input.classList.add("error");

		elementTip.style.display = "block";

	}else{

	}
}

function validateUser()
{
	console.log("validateUser function");

	if (this.value == "" ) 
	{
		this.style.backgroundColor = "rgba(30,0,0,0.1)";
		this.style.borderStyle = "solid";
		this.style.borderColor = "red";
		this.style.color = "gray";

		userTip.style.display = "block";
	}else{
		this.style = oldStyleInput;
		userTip.style.display = "none";
	}
}
function validateOriginalPassword()
{
	console.log("validateOriginalPassword function");

	if (this.value == "" ) 
	{
		this.style.backgroundColor = "rgba(30,0,0,0.1)";
		this.style.borderStyle = "solid";
		this.style.borderColor = "red";
		this.style.color = "gray";

		originalPasswordTip.style.display = "block";
	}else{
		this.style = oldStyleInput;
		originalPasswordTip.style.display = "none";
	}
}
function validateVerifyPassword()
{
	console.log('validateVerifyPassword function');
	
	if(/*this.value == "" ||*/ this.value != originalPasswordInput.value)
	{
		
		this.style.backgroundColor = "rgba(30,0,0,0.1)";
		this.style.borderStyle = "solid";
		this.style.borderColor = "red";
		this.style.color = "gray";

		verifyPasswordTip.style.display = "block";
	}else{
		this.style = oldStyleInput;
		verifyPasswordTip.style.display = "none";
	}
}
function validateEmail()
{
	console.log('validateEmail function');

	if (this.value == "" ) 
	{
		this.style.backgroundColor = "rgba(30,0,0,0.1)";
		this.style.borderStyle = "solid";
		this.style.borderColor = "red";
		this.style.color = "gray";

		emailTip.style.display = "block";
	}else{
		this.style = oldStyleInput;
		emailTip.style.display = "none";
	}
}

//---------------------------------------------------------------------------------------------------
window.onload = function()
{
	console.log('Iniciando función asociada a la carga de la página...');

	console.log("Creando variables de los elementos de los form...");
	var logInForm = document.getElementById('log-in-form');
	var signUpForm = document.getElementById('sign-up-form');
	userInput = signUpForm.user;
	originalPasswordInput = signUpForm.pass;
	verifyPasswordInput = document.getElementById('verify-pass');
	emailInput = signUpForm.email;

	oldStyleInput = userInput.style;
	console.log("Estilo original de los inputs: "+oldStyleInput);

	userTip = document.getElementById('user-tip');
	originalPasswordTip = document.getElementById('pass-tip');
	verifyPasswordTip = document.getElementById('verify-pass-tip');
	emailTip = document.getElementById('email-tip');

	console.log('Asignando eventos a los inputs...');
	userInput.onblur = validateUser;
	userInput.onchange = validateUser;
	originalPasswordInput.onblur = validateOriginalPassword;
	originalPasswordInput.onchange = validateOriginalPassword;
	verifyPasswordInput.onblur = validateVerifyPassword;
	verifyPasswordInput.onchange = validateVerifyPassword;
	emailInput.onblur = validateEmail;
	emailInput.onchange = validateEmail;

	console.log('Ocultando mensajes span...');

	userTip.style.display = "none";
	originalPasswordTip.style.display = "none";
	verifyPasswordTip.style.display = "none";
	emailTip.style.display = "none";

	console.log('Mensajes span ocultos');

	console.log('Terminando función asociada a la carga de la página');
}