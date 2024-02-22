function saveData() {
    var first_name = document.getElementById("first_name").value
    var last_name  = document.getElementById("last_name").value
    var email = document.getElementById("email").value
    var phone_number = document.getElementById("phone_number").value

    if (first_name == "") {
        document.getElementById("first_name").placeholder = "Please enter your first name"
        document.getElementById("first_name").classList.add("input-error")
    } else {
        document.getElementById("first_name").classList.remove("input-error")
    }

    if (last_name == "") {
        document.getElementById("last_name").placeholder = "Please enter your last name"
        document.getElementById("last_name").classList.add("input-error")
    }else {
        document.getElementById("last_name").classList.remove("input-error")
    }

    if (email == "") {
        document.getElementById("email").placeholder = "Please enter your email"
        document.getElementById("email").classList.add("input-error")
    } else {
        document.getElementById("email").classList.remove("input-error")
    }

    if (phone_number == "") {
        document.getElementById("phone_number").placeholder = "Please enter your Phone Number"
        document.getElementById("phone_number").classList.add("input-error")
    } else {
        document.getElementById("phone_number").classList.remove("input-error")
    }

    // to move cursor to the empty input field
    var inputErrors = document.getElementById("myform").querySelectorAll(".input-error")
    if (inputErrors.length > 0) {
        inputErrors[0].focus()
    }

    if (first_name != "" && last_name != "" && email != "" && phone_number != "") {
        localStorage.setItem("firstNameKey", first_name)
        localStorage.setItem("lastNameKey", last_name)
        localStorage.setItem("emailKey", email)
        localStorage.setItem("phoneNumberKey", phone_number)
        document.getElementById("myform").reset();
        document.getElementById("first_name").placeholder = "e.g. John"
        document.getElementById("last_name").placeholder = "e.g. Doe"
        document.getElementById("email").placeholder = "e.g name@example.com"
        document.getElementById("phone_number").placeholder = "e.g 36620300"
        document.getElementById('register-message').innerHTML = 'You have registered successfully!'
        
        setTimeout(function() {
            document.getElementById('register-message').innerHTML = '';
        }, 8000);

        getData();
    }

    
}

function getData() {
    var firstName = localStorage.getItem("firstNameKey")
    var lastName = localStorage.getItem("lastNameKey")
    var message = "<a id='register-now' onclick='deleteData()'>UnRegister</a> <br>" + firstName + " " + lastName
    var defaultMessage = "<a id='register-now' href='home.html#register'>Register</a>"
    if (firstName != null && lastName != null){
        document.getElementById("user-info").innerHTML = message
    } else{
        document.getElementById("user-info").innerHTML = defaultMessage
    }
    
}

function deleteData(){
    localStorage.removeItem("firstNameKey")
    localStorage.removeItem("lastNameKey")
    localStorage.removeItem("emailKey")
    localStorage.removeItem("phoneNumberKey")
    getData()
}
