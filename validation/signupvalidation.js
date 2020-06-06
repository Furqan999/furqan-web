function removename_error()
{
	document.getElementById('name-error').innerHTML="";
}
function removeemail_error()
{
	document.getElementById('email-error').innerHTML="";
}
function removeenterpass_error()
{
	document.getElementById('enterpass-error').innerHTML="";
}
function removeRetypepass_error()
{
	document.getElementById('Retypepass-error').innerHTML="";
}




function validate(letters)
{

var name_regex=/^[A-Za-z]+$/;
var email_regex=/^([A-Za-z]+)([\_\.\-{1}])?([a-z0-9]+)\@([a-z0-9]+)([\.])([a-z]+)$/;
var Password_regex=/^.{8,}$/;



/*username validation with regex */

	if (letters.name.value=="") 
	{
		document.getElementById('name-error').innerHTML="Error";
		return false;
	}

	else if(name_regex.test(letters.name.value)==false)
		{
			document.getElementById("name-error").innerHTML="  &#9995; Only Alphabets";
			
			return false;
		}

/*email validation with regex */


	else if (letters.email.value=="") 
	{
		document.getElementById('email-error').innerHTML="Error";
		return false;
	}

	else if(email_regex.test(letters.email.value)==false)
		{
			document.getElementById("email-error").innerHTML="  &#9995; invalid";
			return false;
		}

	/*Enter password validation with regex */


	else if (letters.enterpass.value=="") 
	{
		document.getElementById('enterpass-error').innerHTML="Error";
		return false;
	}

	else if(Password_regex.test(letters.enterpass.value)=="")
		{
			document.getElementById("enterpass-error").innerHTML="  &#9995; Must Be 8 Character's Or More";
			
			return false;
		}

	/*Enter password validation with regex */

	else if (letters.Retypepass.value=="") 
	{
		document.getElementById('Retypepass-error').innerHTML="Error";
		return false;
	}
	else if(Password_regex.test(letters.Retypepass.value)=="")
		{
			document.getElementById("Retypepass-error").innerHTML="  &#9995; Must Be 8 Character's Or More";
			
			return false;
		}
}	
