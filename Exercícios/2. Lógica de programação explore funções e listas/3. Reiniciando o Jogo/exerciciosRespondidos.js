// -------------------------

// 53. Você foi contratado (a) para desenvolver uma calculadora de média e verificar a situação de aprovação de um aluno com base em suas quatro notas. A média para aprovação é 5. Sua tarefa é implementar duas funções em JavaScript:

// calcularMedia(nota1, nota2, nota3, nota4)=> Esta função recebe as quatro notas do aluno como parâmetros e retorna a média calculada com base nessas notas.
// verificarAprovacao(media) => Esta função recebe a média do aluno como parâmetro e retorna "Aprovado" se a média for maior ou igual a 5, caso contrário, retorna "Reprovado".
// Utilize essas valores para as notas:

// let nota1 = 7;
// let nota2 = 6;
// let nota3 = 3;
// let nota4 = 5;
// Posto disso, analise cada afirmação abaixo e marque apenas aquelas que mostram partes de código que seguem as regras de negócio citadas acima.

// Selecione 2 alternativas

'MINHA RESPOSTA ANTES DE VERIFICAR AS ALTERNATIVAS:'

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

'ALTERNATIVAS:'

'B)'
function verificarAprovacao(media) {
    return media >= 5 ? "Aprovado" : "Reprovado";
}

Isso aí! A função verifica se a média passada como parâmetro é maior ou igual a 5 e retorna um valor em formato de texto informando se foi aprovado ou reprovado.

'C)'
Alternativa correta
function calcularMedia(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  return media;
}

Isso aí! Essa função verifica se a média é maior ou igual a 5 e retorna true se o aluno foi aprovado ou false caso tenha sido reprovado.

// -------------------------

// 54. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularImc(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
    
}


// -------------------------

// 55. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
    if (numero < 0)
        return -1;
    else if (numero == 0)
        return 1;
    else {
        return (numero * calcularFatorial(numero -1));
    }
    
}


// -------------------------

// 56. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterEmDolar(valor) {
    let convertido = parseFloat(valor) * 4.80;
    return convertido;
    
}

// -------------------------

// 57. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

let base = parseFloat(prompt('Digite a base do retângulo.'));
let altura = parseFloat(prompt('Digita a altura do retângulo.'));

function calcularAreaPerimetro(base, altura) {
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    return {
        area: area,
        perimetro: perimetro
    };
}

let resultado = calcularAreaPerimetro(base, altura);
console.log("Área: " + resultado.area);
console.log("Perímetro: " + resultado.perimetro);

// -------------------------

// 58. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

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

// -------------------------

// 59. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.


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

// -------------------------