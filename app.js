const PasswordVisibility = document.getElementById("PasswordVisibility");
const UsernameInp = document.getElementById("username");
const PasswordInp = document.getElementById("password");


PasswordVisibility.addEventListener("click", function () {
    if (PasswordVisibility.classList.contains("fa-eye")) {
        PasswordInp.setAttribute("type", "text");
        PasswordVisibility.classList.add("fa-eye-slash");
        PasswordVisibility.classList.remove("fa-eye");
    } else if (PasswordVisibility.classList.contains("fa-eye-slash")) {
        PasswordInp.setAttribute("type", "password");
        PasswordVisibility.classList.add("fa-eye");
        PasswordVisibility.classList.remove("fa-eye-slash");
    }
});

const submitBtn = document.querySelector(".signin-btn");
submitBtn.addEventListener("click", validation);
function validation(event) {
    event.preventDefault();
    const usernameValue = UsernameInp.value;
    const passwordValue = PasswordInp.value;
    // Regex:
    const userRegex = /^([a-zA-Z0-9.]+@\w{2,6}\.[a-z]{2,3})|(09\d{9})$/;
    const passRegex = /^(\w{4,})$/;

    const UernameErrorDisplay = document.querySelector(".UserError-display");
    UernameErrorDisplay.innerText = null;
    const PasswordErrorDisplay = document.querySelector(".PassError-display");
    PasswordErrorDisplay.innerText = null;

    if (usernameValue.match(userRegex)) {
        UsernameInp.style.border = "none";
        UsernameInp.classList.remove("ErrorUsername-input");
    } else {
        UsernameInp.style.border = "1px solid var(--Crimson)";
        UsernameInp.classList.add("ErrorUsername-input");
        UernameErrorDisplay.innerText = "Invalid username! Enter email or phone"
    }
    if (passwordValue.match(passRegex)) {
        PasswordInp.style.border = "none";
        PasswordInp.classList.remove("ErrorPassword-input");
    } else {
        PasswordInp.style.border = "1px solid var(--Crimson)";
        PasswordInp.classList.add("ErrorPassword-input");
        PasswordErrorDisplay.innerText = "Invalid password! Enter at least 4 characters"
    }
};