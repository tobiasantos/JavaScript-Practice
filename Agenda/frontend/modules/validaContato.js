import validator from "validator";

export default class Contato {
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
    const nomeInput = el.querySelector('input[name="nome"]');
    const telInput = el.querySelector('input[name="telefone"]');
    let error = false;
    const errorsList = [];

    if (!nomeInput.value) {
      nomeInput.classList.add("border-danger");
      errorsList.push("Nome é um campo obrigatório.");
      error = true;
    } else {
      nomeInput.classList.remove("border-danger");
    }

    if (emailInput.value) {
      if (!validator.isEmail(emailInput.value)) {
        emailInput.classList.add("border-danger");
        errorsList.push("E-mail inválido");
        error = true;
      } else {
        emailInput.classList.remove("border-danger");
      }
    } else {
      emailInput.classList.remove("border-danger");
    }

    if (!emailInput.value && !telInput.value) {
      errorsList.push(
        "Pelo menos um dos campos seguintes precisam ser enviados: e-mail ou telefone."
      );
      error = true;
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
