const user ={
    name: "",
    email: "",
    password: "",
    confirmPassword: "",

    validateName() {
        return this.name.length > 0;
    },

    validateEmail() {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },

    validatePassword() {
        return this.password.length >= 8;
    },

    validateConfirmPassword() {
        return this.confirmPassword.length > 0 &&
            this.confirmPassword === this.password;
    }
};

function validateForm() {
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value.trim();
    user.password = document.getElementById("password").value;
    user.confirmPassword = document.getElementById("confirmPassword").value;

    if (!user.validateName()) {
        alert("Please enter your name.");
        return false;
    }
    if (!user.validateEmail()) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!user.validatePassword()) {
        alert("Password must contain at least 8 characters.");
        return false;
    }
    if (!user.validateConfirmPassword()) {
        alert("Confirm password must match your password.");
        return false;
    }

    alert("Form Submitted!");
    return true;
}


