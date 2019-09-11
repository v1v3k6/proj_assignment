function SayHello(name)
{
	alert("Hello "+name+"!");
	window.open("https://www.skava.com");
	return true;
}
function LoginValidation()
{
	var uname=document.form1.uname.value;
	var pword=document.form1.pword.value;
	if(uname=="abcd" || pword=="login")
		SayHello(uname);
	else
		alert("Invalid credential");
}