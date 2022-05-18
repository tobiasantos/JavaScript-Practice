const horarioTag = document.querySelector('#horario');
const data = new Date();
horarioTag.innerHTML = `${dataText(data)}`;

function zeroEsq(n) {
    return n >= 10 ? n : `0${n}`;
}

function dataText(data) {
    const dia = zeroEsq(data.getDate());
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const ano = zeroEsq(data.getFullYear());
    const hora = zeroEsq(data.getHours());
    const minuto = zeroEsq(data.getMinutes());

    return `Hoje é ${getWeekDay(diaSemana)}! ${dia} de ${getMonthText(mes)} de ${ano} às ${hora}:${minuto}`
}

function getWeekDay(weekDayNum) {
    const semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    return semana[weekDayNum]
}

function getMonthText(mesNum) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[mesNum];
}