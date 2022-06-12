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
    var firstName = document.forms["signup"]["fname"].value;
    var lastName = document.forms["signup"]["lname"].value;
    var email = document.forms["signup"]["email"].value;

    if(firstName == ""){
        alert("Please enter your first name");
        return false;
    }
    if(lastName == ""){
        alert("Please enter your last name");
        return false;
    }
    if(email == ""){
        alert("please enter your email address");
        return false;
    }
    
    return true;
}

function welcome(){
    alert("Welcome to the Kings Music Store - Newsletter Signup");
}
