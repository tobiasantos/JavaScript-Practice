import GeraCPF from "./modules/GeraCPF";

import "./assets/css/style.css";

function recebeClique(e) {
  const elemento = e.target;
  if (elemento.value === "Gerar CPF") {
    const novoCPF = new GeraCPF();
    const divCPF = document.querySelector(".cpf-gerado");
    divCPF.value = "";
    divCPF.innerHTML = novoCPF.geraNovoCPF();
  }
}

document.addEventListener("click", recebeClique);
