const form = document.getElementById("signup");

form.addEventListener("submit", (event) => {
    if(checkName()){
        Submit();
    } else {
        event.preventDefault();
    }
});

//check if name fields are empty display alert
function checkName(){
    var firstName = document.forms["signup"]["fname"];
    var lastName = document.forms["signup"]["lname"];
    var email = document.forms["signup"]["email"];
    var alertString = "";

    if(firstName.value == ""){
        alertString += "Please enter your first name.\n";
        firstName.style.borderColor = "red";
    } else {
        firstName.style.borderColor = "black";        
    }

    if(lastName.value == ""){
        alertString += "Please enter your last name.\n";
        lastName.style.borderColor = "red";
    } else {
        lastName.style.borderColor = "black";
    }

    if(email.value == ""){
        alertString += "Please enter your email.\n";
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "black";
    }

    if(alertString != ""){
        alert(alertString);
        return false;
    } else{    
        return true;
    }
}

function welcome(){
    alert("Welcome to the Kings Music Store - Newsletter Signup");
}
