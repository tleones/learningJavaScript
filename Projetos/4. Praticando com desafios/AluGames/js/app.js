function alterarStatus(event) {
    const botaoClicado = event.target;

    // Alternar entre os textos "Alugar" e "Devolver"
    if (botaoClicado.textContent === 'Alugar') {
        botaoClicado.textContent = 'Devolver';
    } else {
        botaoClicado.textContent = 'Alugar';
    }

    // Alternar entre as classes de estilo
    botaoClicado.classList.toggle('dashboard__item__button');
    botaoClicado.classList.toggle('dashboard__item__button--return');
}

// Seleciona todos os botões com a classe 'dashboard__item__button'
const botoesAlugar = document.querySelectorAll('.dashboard__item__button');

// Adiciona o evento de clique para cada botão
botoesAlugar.forEach(botao => {
    botao.addEventListener('click', alterarStatus);
});
