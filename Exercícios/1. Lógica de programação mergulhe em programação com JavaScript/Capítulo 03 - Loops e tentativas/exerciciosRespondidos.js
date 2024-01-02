// 19. Abaixo, temos um código de exemplo:

// let contador = 1;

// while (contador < 4) {
//   console.log('Executando a iteração ' + contador);
//   contador = contador + 1;
// }

// Ao executar código, podemos afirmar que:

while (contador < 4){ } começa o loop while. Ele continuará repetindo o bloco de código entre as chaves { } enquanto a condição contador < 4 for verdadeira.


Isso aí! Essa condição significa que o loop continuará enquanto o valor da variável contador for menor que 4.

Alternativa correta
O resultado final será a impressão das mensagens "Executando a iteração 1", "Executando a iteração 2" e "Executando a iteração 3" no console.


Isso aí! O loop foi executado três vezes, e o valor final da variável contador é 4. Na quarta iteração, o valor de contador é 4. Neste momento, a condição contador < 4 se torna falsa, pois 4 não é menor que 4. O loop não executa mais o código dentro das chaves e termina.

// -------------------------

// 20. Sabendo que você também está estudando lógica de programação, Willian pediu sua ajuda para localizar onde está o erro em seu código:


// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0;
// let contador = qtdNumeros;

// while(contador > 0){
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
// }

// let media = soma / qtdNumeros;

// console.log(media);

// Qual alteração você poderia sugerir a Willian para que o código tenha o resultado esperado?

Quando utilizamos loops com contadores, precisamos garantir que um dia eles cheguem até a condição de parada do loop. No código acima, o contador não tem seu valor alterado e para resolver o loop infinito basta decrementá-lo a cada iteração, adicionando a linha contador-- dentro do loop.


Ao decrementar o valor da variável contadora a cada iteração, eventualmente ela vai ser menor ou igual a 0, o que vai parar a execução do loop.

// -------------------------

// 21. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

// -------------------------

// 22. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let numero = 10;
while (numero >= 0) {
    console.log(numero);
    numero--;
}

// -------------------------

// 23. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = prompt('Digite um número para que eu inicie a contagem regressiva.');
while (numero >= 0 ) {
    console.log(numero);
    numero--;
}

// -------------------------

// 24. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contador = 0;
let numero = prompt('Digite um número para que eu inicie a contagem.');
while (contador <= numero ) {
    console.log(contador);
    contador++;
}

// -------------------------