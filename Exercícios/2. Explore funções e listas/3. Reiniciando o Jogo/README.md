## Exercícios do capítulo Reiniciando o Jogo

# 👌 **Questão 52**

Para criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo:

function multiplicador(numero) {
    return numero * numero;
}
Lógica: A função multiplicador recebe um número como argumento e retorna o resultado da multiplicação desse número por ele mesmo.

# 🤔 **Questão 53**

Implementação de uma calculadora de média e verificação de aprovação de um aluno.

function calcularMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;   
    return media; 
}

let media = calcularMedia(7, 6, 3, 5);

function verificarAprovacao(media) {
    if (media >= 5) {
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}

# 💡 **Questão 54**

Calculadora de Índice de Massa Corporal (IMC).

function calcularImc(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

# 🧮 **Questão 55**

Função para calcular o fatorial de um número.

function calcularFatorial(numero) {
    if (numero < 0)
        return -1;
    else if (numero == 0)
        return 1;
    else {
        return (numero * calcularFatorial(numero -1));
    }
}

# ✖️ **Questão 56**

Função para converter um valor em dólar para o equivalente em reais.

function converterEmDolar(valor) {
    let convertido = parseFloat(valor) * 4.80;
    return convertido;
}

# 🖐️ **Questão 57**

Função para calcular a área e o perímetro de um retângulo.

# 🖍️ **Questão 58**

Função para calcular a área e o perímetro de uma sala circular, utilizando seu raio fornecido como parâmetro. Considere Pi = 3,14.

let raio = parseFloat(prompt('Digite o raio.'));
let pi = 3.14;

function calcularAreaPerimetroCirculo(raio, pi) {
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;
    return {
        area: area,
        perimetro: perimetro
    };   
}

let resultado = calcularAreaPerimetroCirculo(raio, pi);
console.log(`Área: ${resultado.area}`);
console.log(`Perímetro: ${resultado.perimetro}`);

# 📚 **Questão 59**

Função para exibir a tabuada de um número dado como parâmetro.

let numero = parseInt(prompt('Digite um número para visualizar sua tabuada.'));

function gerarTabuada(numero) {
    let result = '';
    for (let i = 1; i < 11; i++) {
        result += `${numero} x ${i} = ${numero * i}\n`;
    }
    return result;
}

let tabuada = gerarTabuada(numero);
console.log(tabuada);
