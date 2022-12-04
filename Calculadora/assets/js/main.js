function Calculadora() {
  const pressionaBackSpace = () => {
    this.display.addEventListener("keydown", (e) => {
      if (e.keyCode === 8) {
        e.preventDefault();
        clearDisplay();
      }
    });
  };

  const pressionaEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        realizaConta();
      }
    });
  };

  const realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("Conta inválida!");
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert("Conta inválida!");
      return;
    }
  };

  const clearDisplay = () => {
    this.display.value = "";
  };

  const apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  const cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        btnParaDisplay(el.innerText);
      }

      if (el.classList.contains("btn-clear")) {
        clearDisplay();
      }

      if (el.classList.contains("btn-del")) {
        apagaUm();
      }

      if (el.classList.contains("btn-eq")) {
        realizaConta();
      }

      this.display.focus();
    });
  };

  const btnParaDisplay = (valor) => {
    this.display.value += valor;
  };

  this.display = document.querySelector(".display");

  this.inicia = () => {
    cliqueBotoes();
    pressionaBackSpace();
    pressionaEnter();
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
