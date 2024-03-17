//getting all attribute

const form = document.querySelector("form"),
eInput = form.querySelector(".input"),
text = form.querySelector(".text");

form.addEventListener("submit", (e)=>{
    e.preventDefault();  //preventing form from submitting
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  //Regex pattern to validate email
    form.classList.add("error");
    form.classList.remove("valid");
    if(eInput.value == "") {
        text.innerText = "Email can't be blank.";
    } else if (!eInput.value.match(pattern)) {
        text.innerText = "Please enter a valid email.";
    } else {
        form.classList.replace("error" , "valid"); //replacing error class with valid class
        text.innerText = "Your email address is sent!";
    }
}) ;