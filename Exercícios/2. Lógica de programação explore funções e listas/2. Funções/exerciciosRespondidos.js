// -------------------------

// 45. Marque apenas as opções verdadeiras sobre funções.

A) As funções em JavaScript podem ter um nome.

B) Palavra-chave function: É usada para declarar uma função em JavaScript.

D) Parênteses (): Após o nome da função (se houver), os parênteses são usados para definir os parâmetros da função.

// -------------------------

// 46. Você é uma pessoa desenvolvedora de software que trabalha com JavaScript e precisa criar uma função que verifique se um número é positivo, negativo ou zero. 
// Sua tarefa é implementar uma função que recebe como parâmetro um número inteiro e exibe uma mensagem no console conforme as seguintes regras:

// Se o número for maior que zero, a mensagem deve ser: "O número é positivo."
// Se o número for menor que zero, a mensagem deve ser: "O número é negativo."
// Se o número for igual a zero, a mensagem deve ser: "O número é zero."
// Você pode utilizar a estrutura de controle if-else para verificar as condições e exibir a mensagem correspondente no console. 
// Sabendo disso, analise as alternativas abaixo e marque aquela que possui o código que atende todas as regras citadas acima.

function verificarNumero(numero) {
    if (numero > 0) {
        console.log('O número é positivo.');
    } else if (numero < 0) {
        console.log('O número é negativo.');
    } else {
        console.log('O número é zero.')
    }
    
}

// -------------------------

// 47.Criar uma função que exibe "Olá, mundo!" no console.

function cumprimentar() {
    console.log('Olá, mundo!');
}

// -------------------------

// 48. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}

let nome = prompt('Digite seu nome');
exibirNome(nome);

// -------------------------

// 49. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobrarNumero(numero) {
    return numero * 2;
    
}

// -------------------------

// 50. Criar uma função que recebe três números como parâmetros e retorna a média deles.

function gerarMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

// -------------------------

// 51. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function definirMaior(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
    
}

// -------------------------

// 52. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function multiplicador(numero) {
    return numero * numero;
    
}

// -------------------------