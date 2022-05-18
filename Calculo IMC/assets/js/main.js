const form = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')

function calculaIMC (peso, altura) {
    return (peso/(altura*altura)).toFixed(2)
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = document.createElement('p');

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

function recebeEventoForm(evento) {
    evento.preventDefault();
    const niveis = [ 'Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    const inputPeso = form.querySelector('#peso');
    const inputAltura = form.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false)
        return;
    }
    
    if (!altura) {
        setResultado('Altura inválida', false)
        return;
    }
    
    if (calculaIMC(peso, altura) < 18.5) {
        setResultado(`Seu IMC é igual à ${calculaIMC(peso, altura)} (${niveis[0]})`, true);
    } else if (calculaIMC(peso, altura) <= 24.9) {
        setResultado(`Seu IMC é igual à ${calculaIMC(peso, altura)} (${niveis[1]})`, true);
    } else if (calculaIMC(peso, altura) <= 29.9) {
        setResultado(`Seu IMC é igual à ${calculaIMC(peso, altura)} (${niveis[2]})`, true);
    } else if (calculaIMC(peso, altura) <= 34.9) {
        setResultado(`Seu IMC é igual à ${calculaIMC(peso, altura)} (${niveis[3]})`, true);
    } else if (calculaIMC(peso, altura) <= 39.9) {
        setResultado(`Seu IMC é igual à ${calculaIMC(peso, altura)} (${niveis[4]})`, true);
    } else if (calculaIMC(peso, altura) > 40) {
        setResultado(`Seu IMC é igual à ${calculaIMC(peso, altura)} (${niveis[5]})`, true);
    }
    
    
}


form.addEventListener('submit', recebeEventoForm);




