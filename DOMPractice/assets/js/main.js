const elementos = [
    {tag: 'p', texto: 'Frase1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'}
]

const section = document.querySelector('.container');

function criaDiv () {
    const div = document.createElement('div');
    return div
}

function criaElemento(tag, value) {
    const elemento = document.createElement(tag);
    elemento.innerText = value;
    return elemento
}

function insereElemento () {
    const div = criaDiv();
    section.appendChild(div);
    for (let i = 0; i < elementos.length; i++) {
        div.appendChild(criaElemento(elementos[i].tag, elementos[i].texto));
    }
}

insereElemento()