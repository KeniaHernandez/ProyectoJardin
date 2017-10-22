//var $inputs = $('');
function isEmpty(input)
{
	if(input.value == "")
	{
		//input.style.backgroundColor = "red";
		//input.style.borderStyle = "solid";
		//input.style.borderColor = "red";
		input.addClass("error");

	}else{

	}
}
function isEmptyUser()
{
	console.log('isEmptyUser function');
	isEmpty(this);
}
function isEmptyPassword()
{
	console.log('isEmptyPassword function');
	isEmpty(this);
}
function verifyPassword()
{
	console.log('verifyPassword function');
	var originalPasswordInput = document.getElementById('pass');
	if(this.value == "" || this.value != originalPasswordInput.value)
	{
		this.style.backgroundColor = "red";
	}
}
function isEmptyEmail()
{
	console.log('isEmptyEmail function');
	isEmpty(this);
}

//---------------------------------------------------------------------------------------------------
window.onload = function()
{
	console.log('Iniciando función asociada a la carga de la página...');

	console.log("Creando variables de los elementos de los form...");
	var logInForm = document.getElementById('log-in-form');
	var signUpForm = document.getElementById('sign-up-form');
	var userInput = signUpForm.user;
	var originalPasswordInput = signUpForm.pass;
	var verifyPasswordInput = document.getElementById('verify-pass');
	var emailInput = signUpForm.email;

	var userTip = document.getElementById('user-tip');
	var originalPasswordTip = document.getElementById('pass-tip');
	var verifyPasswordTip = document.getElementById('verify-pass-tip');
	var emailTip = document.getElementById('email-tip');

	console.log('Asignando eventos a los inputs...');
	userInput.onblur = isEmptyUser;
	originalPasswordInput.onblur = isEmptyPassword;
	verifyPasswordInput.onblur = verifyPassword;
	emailInput.onblur = isEmptyEmail;

	console.log('Ocultando mensajes span...');

	userTip.style.display = "none";
	originalPasswordTip.style.display = "none";
	verifyPasswordTip.style.display = "none";
	emailTip.style.display = "none";

	console.log('Mensajes span ocultos');

	console.log('Terminando función asociada a la carga de la página');
}