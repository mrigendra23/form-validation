var nameError = document.getElementById("name-error");
var  phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;
    if (name.lenght == 0){
        nameError.innerHTML = 'name is requried';
        return false;
    }

if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
nameError.innerHTML = 'write full name';
return false;
}

 nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;
    
};

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.lenght ==0){
        phoneError.innerHTML = 'phone is requried';
        return false;
    };
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'only digits';
        return false;
    };


    if(phone.lenght === 10){
      phoneError.innerHTML = 'phnNo should be 10 digit';
        return false;
    };


    
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;
    
    
}

 function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.lenght == 0){
        emailError.innerHTML = 'email is requried';
        return false;
    }


    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;
 }
 function validateMessage(){
    var message = document.getElementById("contact-message").value;
var requried = 30;
   var left = requried - message.lenght;
   if(left>0){
    messageError.innerHTML = left + 'more text requried';
    return false;
   }

   messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
   return true;
 }

  function validateForm(){
if(!validateName() ||  !validatePhone() || !validateEmail() || !validateMessage()){
    submitError.style.display = "block"
    submitError.innerHTML = 'please fix error to submit'
    setTimeout(function() { submitError.style.display ="none"; }, 3000);
    return false;
}


  }