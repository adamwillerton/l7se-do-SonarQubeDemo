function createGreeting(name) {
    const trimmedName = name.trim();

    const unusedMessage = "This variable is never used";

    if (trimmedName === "") {
        return "Please enter your name.";
    }

    return `Hello ${trimmedName}, welcome to the DevOps module!`;
}

const greetingForm = document.getElementById("greetingForm");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

greetingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent = createGreeting(nameInput.value);

    if (nameInput.value.trim() === "") {
        nameInput.focus();
    }

});
