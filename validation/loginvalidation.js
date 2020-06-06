function removename_error()
{
	document.getElementById('email-error').innerHTML="";
}
function removepass_error()
{
	document.getElementById('pass-error').innerHTML="";
}
function validate(letters)
{
	var email_regex=/^([A-Za-z]+)([\_\.\-{1}])?([a-z0-9]+)\@([a-z0-9]+)([\.])([a-z]+)$/;
	var Password_regex=/^.{8,}$/;
	 //check empty fields
	if (letters.email.value=="") 
	{
		document.getElementById('email-error').innerHTML="Error";
		return false;
	}
	else if(email_regex.test(letters.email.value)==false)
		{
			document.getElementById("email-error").innerHTML="  &#9995; invalid";
			return false;
		}
	else if (letters.pass.value=="") 
	{
		document.getElementById('pass-error').innerHTML="Error";
		return false;
	}
	else if(Password_regex.test(letters.pass.value)==false)
		{
			document.getElementById("pass-error").innerHTML="  &#9995; Must Be 8 Character's Or More";
			
			return false;
		}
}
