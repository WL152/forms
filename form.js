function validation(thisForm){
	if(!thisForm.fname.value.length) //if there is no input to fName
	{
		document.getElementById('fname-error').style.display="inline-block";
		return false;
	}
  if(!thisForm.lname.value.length)//if there is no input to lname
{
	document.getElementById('lname-error').style.display="inline-block";
	return false;
}
if(!thisForm.gender.value.length)//if one of the radio button is not selected
{
	document.getElementById('gender-error').style.display="inline-block";
	return false;
}
if(!thisForm.address.value.length) //if there is no input to address
{
	document.getElementById('address-error').innerHTML="Please enter your address!";
	document.getElementById('address-error').style.display="inline-block";
	return false;
}
var patt=/[^0-9A-Za-z\s/-]+/g;
var addr=thisForm.address.value;
if(patt.test(addr)==true) //checks if the value entered is listed in the pattern. if it is then returns true, if its not then return the error-message
{
  document.getElementById('address-error').innerHTML="Address accepts numbers, letter,space, slash and hyphen only";
  document.getElementById('address-error').style.display="inline-block";
  return false;
}
if(!thisForm.city.value.length)//if there is no input to city
{
	document.getElementById('city-error').innerHTML="City is required!";
	document.getElementById('city-error').style.display="inline-block";
	return false;
}
var patt=/[^0-9A-Za-z\s/-]+/g;
  var city=thisForm.city.value;
  if(patt.test(city)==true)//checks if the value entered is listed in the pattern. if it is then returns true, if its not then return the error-message
  {
    document.getElementById('city-error').innerHTML="City accepts numbers, letter,space, slash and hyphen only";
    document.getElementById('city-error').style.display="inline-block";
    return false;
  }
  if(!thisForm.state.value.length)//if nothing is selectec from the drop down list
  {
    document.getElementById('state-error').innerHTML="State is required!";
    document.getElementById('state-error').style.display="inline-block";
    return false;
  }
  if(!thisForm.pc.value.length)//if there is not input to postcode
  {
    document.getElementById('pc-error').innerHTML="Postcode is required!";
    document.getElementById('pc-error').style.display="inline-block";
    return false;
}
var patt=/^[0-9]{4}$/;
var pc=thisForm.pc.value;
if(!patt.test(pc)==true)//if the value entered is more than or less than 4 digits, returns error-message
{
  document.getElementById('pc-error').innerHTML="Please enter a 4-digit postcode!";
  document.getElementById('pc-error').style.display="inline-block";
  return false;
}
if(!thisForm.dob.value.length)//if there is not input to Date of Birth
{
  document.getElementById('dob-error').innerHTML="Please enter your date of birth!";
  document.getElementById('dob-error').style.display="inline-block";
  return false;
}
var patt=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/; //checks if the value is entered according to the format of dd/mm/yyyy
var dob=thisForm.dob.value;
if(!patt.test(dob)==true)
{
	document.getElementById('dob-error').innerHTML="Please use dd/mm/yyyy format!";
  document.getElementById('dob-error').style.display="inline-block";
  return false;
}
var patt=/^[0-9]{8,10}$/; //checks if the value is entered at least 8 to 10 digits. If it is less or more than that, returns error message
var teleNo=thisForm.teli.value;
if(!patt.test(teleNo)==true)
{
  document.getElementById('teli-error').innerHTML="8 to 10 digits required!";
  document.getElementById('teli-error').style.display="inline-block";
  return false;
}
var patt=/^0(4)\d{8}$/; //checks if the value entered begins with number 04 and has to be in 10 digits
var mobile=thisForm.mobile.value;
if(!patt.test(mobile)==true)
{
  document.getElementById('mobile-error').innerHTML="Please start with 04!";
  document.getElementById('mobile-error').style.display="inline-block";
  return false;
}
if(!thisForm.email.value.length) //if there is no input to email
{
  document.getElementById('email-error').innerHTML="Please enter your email!";
  document.getElementById('email-error').style.display="inline-block";
  return false;
}
var patt=/\S+@\S+\.\S+/; //checks if the value(email) entered is valid
var email=thisForm.email.value;
if(!patt.test(email)==true)
{
	document.getElementById('email-error').innerHTML="Invalid email entered!";
	document.getElementById('email-error').style.display="inline-block";
	return false;
}
if(!thisForm.option.value.length)//if none of the radio buttons are selected
{
	document.getElementById('this-error').innerHTML="Please select at least one option!";
	document.getElementById('this-error').style.display="inline-block";
	return false;
}
if(document.getElementById("other").checked == true){ //checks if "other" option is selected and the input text is empty, returns error-message
	if(document.getElementById("other_reason").value == ""){
    document.getElementById("this-error").innerHTML="Please state your reason!";
		document.getElementById("this-error").style.display="inline-block";
return false;
}
if(!thisForm.option2.value.length)//if none of the radio buttons are selected
{
  document.getElementById('plan-error').innerHTML="Please select at least one option!";
  document.getElementById('plan-error').style.display="inline-block";
  return false;
}
if(document.getElementById("other2").checked == true){//checks if "other" option is selected and the input text is empty, returns error-message
	if(document.getElementById("other_reason2").value == ""){
    document.getElementById("plan-error").innerHTML="Please state your reason!";
		document.getElementById("plan-error").style.display="inline-block";
return false;
}
return true;
}
}
}
