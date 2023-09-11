/* Get the modal, login button, close button and submit button elements */
let modal = document.getElementById("loginModal");
let btn = document.getElementById("loginButton");
let span = document.getElementsByClassName("close-button")[0];
let submitBtn = document.getElementById("submitBtn");

/* When the user clicks the login button, open the modal */
btn.onclick = function() {
    modal.style.display = "block";
}

/* When the user clicks the close button (x), close the modal */
span.onclick = function() {
    modal.style.display = "none";
}

/* When the user clicks the submit button, validate the inputs and simulate login */
submitBtn.onclick = function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    /* If username and password are entered, simulate a successful login */
    if (username && password) {
        alert("Logged in successfully");
        modal.style.display = "none";
    } else {
        /* If not, show an error message */
        alert("Please enter username and password");
    }
}

/* When the user clicks outside the modal, close it */
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
