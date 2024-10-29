// var submit = document.getElementById("submit");
// submit.disabled = true;
let submitBtn = document.getElementById("submitBtn");
submitBtn.disabled = true;






function valid() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("emailError")
    var passwordError = document.getElementById("passwordError")
    if (email.indexOf("@") == -1 || email.length <= 0) {
        emailError.innerHTML = "Invalid email address";
        submitBtn.disabled = true;
 
    
    } else if (email.indexOf("@") > -1 && email.length > 0) {
        emailError.innerHTML = "";
        
    }

    if (password.length < 4 || password.length > 30) {
        passwordError.innerHTML = "Password Enter a valid password";
        submitBtn.disabled = true;
        
    } else if (password.length > 4 || password.length < 30) {
        passwordError.innerHTML = "";
        submitBtn.disabled = true;
    }


    if (email.indexOf("@") > -1 && email.length > 0 && password.length > 4 || password.length < 30) {
        submitBtn.disabled = false;
        
    }
       
    
   
}

