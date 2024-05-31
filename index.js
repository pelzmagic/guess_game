const errorImage = document.querySelector(".error_image");
const randomNumber = Math.floor((Math.random() * 100) + 1);
const result = document.querySelector(".result");
const form = document.getElementById('form');
const button = document.querySelector("button");
const inputDetails = document.querySelector(".user_message");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = inputDetails.value;
    console.log(userInput);
    // Check if the user tries to submit an empty input

    if (userInput === '') {
        inputDetails.classList.add("error");
        errorImage.classList.remove("hide");
    } else {
        inputDetails.classList.remove("error");
    }
})