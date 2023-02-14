function FormValidation() {
    if (document.myform.fname.value == "") {
        document.getElementById("fmessage").innerHTML = "first name is required";

        if(document.getElementById("fmessage").value)
        {
            document.getElementById("fmessage").style.display='none';
        }
        
        return false;
    }
    
    if (document.myform.lname.value == "") {
        document.getElementById("lmessage").innerHTML = "last name is required";
        
        return false;
    }
    if (isNaN(document.myform.number.value)) {
      document.getElementById("numbermessage").innerHTML = "only number is required";
    
      return false;
    }
    if(document.myform.number.value.length!=10){
        document.getElementById("numbermessage").innerHTML = "phone length should not be more than 10";
        
        return false;
        
    }

    if (document.myform.number.value == "") {
        document.getElementById("numbermessage").innerHTML = "phone is required";
        
        return false;
        
    }
    
    if (document.myform.password.value.length<8 ) {
      document.getElementById("passwordmessage").innerHTML = "password length too short";
  
      return false;
    }
  

  if (document.myform.password.value == "") {
    document.getElementById("passwordmessage").innerHTML = "password is required";

    return false;
    
  }


  
  if (document.myform.cpassword.value == "") {
    document.getElementById("cpasswordmessage").innerHTML = "conform password is required";
    
    return false;
}

    if(document.myform.password.value != document.myform.cpassword.value){
        
        
        document.getElementById("cpasswordmessage").innerHTML = "confirm password did not match";
        return false;
      }





  return true;
}
