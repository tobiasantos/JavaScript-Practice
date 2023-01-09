import createPassword from "./geradores";

const newPassword = document.querySelector(".new-password");
const lenPassword = document.querySelector(".lenPassword");
const checkUpper = document.querySelector(".check-upper");
const checkLower = document.querySelector(".check-lower");
const checkNumber = document.querySelector(".check-num");
const checkSymbols = document.querySelector(".check-symbol");
const buttom = document.querySelector(".create-password");

export default () => {
  buttom.addEventListener("click", () => {
    newPassword.innerHTML = create();
  });
};

function create() {
  const password = createPassword(
    lenPassword.value,
    checkUpper.checked,
    checkLower.checked,
    checkNumber.checked,
    checkSymbols.checked
  );

  return password || "Nada selecionado";
}
