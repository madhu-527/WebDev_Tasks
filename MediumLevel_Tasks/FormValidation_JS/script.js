const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(input, errorId, message) {
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = message;
  input.classList.add("error");
}

function clearError(input, errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = "";
  input.classList.remove("error");
}

function validateForm() {
  let isValid = true;

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "") {
    setError(nameInput, "nameError", "Name is required.");
    isValid = false;
  } else {
    clearError(nameInput, "nameError");
  }

  if (emailValue === "") {
    setError(emailInput, "emailError", "Email is required.");
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    setError(emailInput, "emailError", "Please enter a valid email address.");
    isValid = false;
  } else {
    clearError(emailInput, "emailError");
  }

  if (messageValue === "") {
    setError(messageInput, "messageError", "Message is required.");
    isValid = false;
  } else {
    clearError(messageInput, "messageError");
  }

  return isValid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.textContent = "";

  if (validateForm()) {
    alert("Your form has been submitted successfully!");
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
});
