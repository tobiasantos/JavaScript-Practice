function Cpf(cpf) {
  this.value = cpf.replace(/\D+/g, "");
  Object.defineProperty(this, "check", {
    enumerable: true,
    configurable: true,
    writable: true,
  });
}

Cpf.prototype.removeLastDigits = function () {
  this.check = this.value.slice(0, -2);
};

Cpf.prototype.createDigit = function (array) {
  let aux = array.length + 1;
  sum = array.reduce(function (ac, value) {
    let auxValue = Number(value);
    ac += auxValue * aux;
    aux--;
    return ac;
  }, 0);

  let digit = 11 - (sum % 11);
  if (digit > 9) {
    return 0;
  } else {
    return digit;
  }
};

Cpf.prototype.checkRep = function () {
  return this.value.charAt(0).repeat(11) === this.value;
};

Cpf.prototype.checkCPF = function () {
  if (this.checkRep()) {
    return false;
  }
  this.removeLastDigits();
  const numbers1 = this.check.split("");
  let firstDig = this.createDigit(numbers1);

  this.check += firstDig;

  const numbers2 = this.check.split("");
  let secondDig = this.createDigit(numbers2);

  this.check += secondDig;

  return this.check === this.value;
};

const form = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = document.createElement("p");

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

function recebeEventoForm(evento) {
  evento.preventDefault();
  const results = ["CPF válido :D", "CPF inválido :("];
  const inputCPF = form.querySelector("#CPF");

  const cpf = new Cpf(inputCPF.value);
  const cpfValue = Number(cpf.value);

  if (!cpfValue) {
    setResultado(
      "É necessário inserir números no formato XXX.XXX.XXX-XX",
      false
    );
    return;
  }

  if (cpf.checkCPF()) {
    setResultado(`${results[0]}`, true);
  } else {
    setResultado(`${results[1]}`, false);
  }
}

form.addEventListener("submit", recebeEventoForm);
