import validator from "validator";

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;
    const errorsList = [];

    if (!validator.isEmail(emailInput.value)) {
      emailInput.classList.add("border-danger");
      errorsList.push("E-mail inválido");
      error = true;
    } else {
      emailInput.classList.remove("border-danger");
    }

    if (passwordInput.value.length < 6 || passwordInput.value.length > 12) {
      passwordInput.classList.add("border-danger");
      errorsList.push("Senha precisa ter entre 6 a 12 caracteres");
      error = true;
    } else {
      passwordInput.classList.remove("border-danger");
    }

    if (!error) {
      el.submit();
    } else {
      this.createErrorMessage(errorsList);
    }
  }

  createErrorMessage(messageList) {
    const div = document.createElement("div");
    const messageContainer = document.createElement("div");
    const messageDiv = document.createElement("div");

    if (document.querySelector("#error-container")) {
      document.querySelector("#error-container").remove();
    }

    if (document.querySelector("#success-message")) {
      document.querySelector("#success-message").remove();
    }

    if (document.querySelector("#error-message")) {
      document.querySelector("#error-message").remove();
    }

    div.setAttribute("id", "error-container");

    messageContainer.appendChild(messageDiv);
    div.appendChild(messageContainer);

    div.classList.add("row");
    messageContainer.classList.add("col");
    messageContainer.classList.add("my-3");
    messageDiv.classList.add("alert");
    messageDiv.classList.add("alert-danger");

    let messageHTML = "";

    messageList.forEach((message) => {
      messageHTML = messageHTML.concat(message, " <br>");
    });

    messageDiv.innerHTML = messageHTML;

    document.getElementById("errorMessages").appendChild(div);
  }
}
