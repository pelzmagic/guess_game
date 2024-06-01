const errorImage = document.querySelector(".error_image");
const randomNumber = Math.floor((Math.random() * 100) + 1);
const result = document.querySelector(".result");
const form = document.getElementById('form');
const button = document.querySelector("button");
const inputDetails = document.querySelector(".user_message");


document.addEventListener('DOMContentLoaded', (e) => {
    // Initialize the submission count
    if (!sessionStorage.getItem('submissionCount')) {
        sessionStorage.setItem('submissionCount', 0);
    }
});

function checkSubmission() {
    // Get the current submission count
    let  submissionCount = parseInt(sessionStorage.getItem('submissionCount'));

    // Check if the count is less than 3
    if (submissionCount < 3) {
        // Increment the submission count
        submissionCount += 1;
        sessionStorage.setItem('submissionCount', submissionCount);
        return true;
    } else {
        result.innerHTML = "You have exceeded the number of tries";
        result.style.color = "black";
        sessionStorage.clear();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = inputDetails.value;
    console.log(userInput);
 
       // Validate user input to stop them from entering a string or a decimal
    if (!userInput.match(/^[0-9]*$/)) {
        result.innerHTML = "Please, enter a number, omo weyrey.";
        result.style.color = "red";
        return false;
    } else if (userInput.match(/^[0-9]*$/)) {
        result.innerHTML = "";
    }

    // Checks if the user inputs a number that is too low or close
    if (userInput <= 50) {
        result.innerHTML = "Your guess is too low! You have two more tries.";
        result.style.color = "red";
    } else if (userInput > 50 && userInput < 88) {
        result.innerHTML = "Your guess is pretty close, you're almost there!";
        result.style.color = "green";
    }
       // Check if the user tries to submit an empty input
       if (userInput === '') {
        result.innerHTML = "Please enter a number."
        result.style.color = "red";
        inputDetails.classList.add("error");
        errorImage.classList.remove("hide");
    } else {
        inputDetails.classList.remove("error");
    }

    // Checks if the user inputs the exact number or a number higher than the exact random number
    if (userInput == 88) {
        result.innerHTML = "Your head is there! That's the exact number i picked.";
        result.style.color = "green";
    } else if (userInput > 88 && userInput <= 100) {
        result.innerHTML = " Ahnahn, The number you have entered is too high, calm down.";
        result.style.color = "black";
    } else if (userInput > 100) {
        result.innerHTML = "Please, enter a number between 1 - 100, olodo!";
        result.style.color = "red";
    }
    checkSubmission();
})