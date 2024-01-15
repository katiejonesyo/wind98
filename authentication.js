document.addEventListener("DOMContentLoaded", function () {
    function checkPassword() {
        var enteredPassword = document.getElementById("password").value;
        var correctPassword = "pip"; // Replace with your desired password

        if (enteredPassword === correctPassword) {
            document.getElementById("password-form").style.display = "none";
            document.getElementById("authenticated-content").style.display = "block";
        } else {
            alert("Incorrect password. Please try again.");
        }
    }

    document.getElementById("submitBtn").addEventListener("click", checkPassword);
});
