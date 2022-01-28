function validation() {
  var user = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobNum = document.getElementById("phNumber").value;
  var password = document.getElementById("password").value;
  var confPassword = document.getElementById("confirmPassword").value;

  if (user == "") {
    document.getElementById("userName").innerHTML = "Please fill in this field";
    return false;
  }

  if (user.length < 3 || user.length > 20) {
    document.getElementById("userName").innerHTML =
      "Name should be minimum 3 and maximum 20 character in length";
    return false;
  }

  if(!isNaN(user)){
    document.getElementById("userName").innerHTML = "Numbers not allowed";
    return false;
  }

  if (email == "") {
    document.getElementById("emailId").innerHTML = "Please fill in this field";
    return false;
  }

  if(email.indexOf('@') < 0){
    document.getElementById("emailId").innerHTML = "@ invalid position";
    return false;
  }

  if((email.charAt(email.length-4)!='.')&&(email.charAt(email.length-3)!='.')){
    document.getElementById("emailId").innerHTML = " . invalid position";
    return false;
  }

  if (mobNum == "") {
    document.getElementById("phoneNum").innerHTML = "Please fill in this field";
    return false;
  }

  if(mobNum.length<10||mobNum.length>15){
    document.getElementById("phoneNum").innerHTML = "minimum 10 and maximum 15 numbers are allowed";
    return false;
  }
  if(isNaN(mobNum)){
    document.getElementById("phoneNum").innerHTML = "only digits are allowed";
    return false;
  }

  if (password == "") {
    document.getElementById("pass").innerHTML = "Please fill in this field";
    return false;
  }

  if (password.length < 6 || password.length > 20) {
    document.getElementById("pass").innerHTML =
      "Password should be minimum 6 character in length";
    return false;
  }

  if(password != confPassword){
    document.getElementById("confPass").innerHTML =
    "Passwords are not matching";
  return false;
  }

  if (confPassword == "") {
    document.getElementById("confPass").innerHTML = "Please fill in this field";
    return false;
  }
}
