const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const createUpper = () => String.fromCharCode(rand(65, 91));
const createLower = () => String.fromCharCode(rand(97, 123));
const createNumber = () => String.fromCharCode(rand(48, 58));
const symbols = ",.;~^[{]}!@#$%&*()-=+`><?/";
const createSymbol = () => symbols[rand(0, symbols.length - 1)];

export default function createPassword(qtd, upper, lower, number, symbol) {
  const passwordArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    upper && passwordArray.push(createUpper());
    lower && passwordArray.push(createLower());
    number && passwordArray.push(createNumber());
    symbol && passwordArray.push(createSymbol());
  }

  return passwordArray.sort().join("").slice(0, qtd);
  return passwordArray.join("").slice(0, qtd);
}
