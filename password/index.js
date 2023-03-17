function validateForm() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

   
    var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

   
    var phoneCheck = /^\d{10}$/;
    if (!phoneCheck.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    
    var passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$/;
    if (!passwordCheck.test(password)) {
        alert("Password must contain  min 8chars, 1lowercase,1uppercase, 1special char");
        return false;
    }

    alert("Congratulations ! Form submitted successfully!");
    return true;
}