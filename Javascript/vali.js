const form = document.getElementById("form");
const username = document.getElementById("username");
const proffesion = document.getElementById("proffesion");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const profValue = prof.value.trim();
  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }
  if (profValue === "") {
    setError(proffesion, "Proffesion is required");
  } else {
    setSuccess(proffesion);
  }
};
