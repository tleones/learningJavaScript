// 25. A função Math.random em JavaScript gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo) de forma pseudo aleatória. Isso significa que os números gerados podem estar em qualquer lugar entre 0 (inclusive) e quase 1 (exclusivo), com uma precisão de até 16 casas decimais. A função Math.random usa um valor interno inicial que é geralmente baseado no horário atual do sistema, gerando números pseudo aleatórios.

// Confira abaixo alguns exemplos:

// 0.5248738910328501
// 0.08458620904957355
// 0.9347284927568912
// COPIAR CÓDIGO
// Sabendo disso, analise as alternativas abaixo e marque apenas a verdadeira:

A) Para gerar um número entre 1 e 3, podemos usar o código: let numeroAleatorio1a3 = parseInt(Math.random() * 3) + 1;.

Isso aí! O código acima gera um número aleatório inteiro entre 1 e 3, ambos inclusivos. Portanto, os números possíveis que podem ser gerados por esse código são: 1, 2 e 3.

// -------------------------

// 26. Aline está dando seus primeiros passos na programação utilizando o JavaScript e recentemente descobriu uma funcionalidade que achou fascinante: o operador ternário.

// Ela achou muito interessante a possibilidade que o operador traz para diminuir a quantidade de código escrito em algumas ocasiões e decidiu aplicar na prática, em um de seus projetos pessoais. No entanto, ao tentar fazer essa refatoração, acabou se esquecendo da sintaxe do operador ternário.

// Sabendo que você estudou sobre o operador recentemente, ela pediu sua ajuda e mostrou o código que pretende refatorar:


// let palavraPessoa = "";

// if(quantidadePessoas == 1){
//     palavraPessoa = "pessoa";
// }else{
//     palavraPessoa = "pessoas"
// }

// Como você poderia mostrar à Aline um exemplo de como transformar esse trecho de código em outro que tenha o mesmo comportamento, mas utilizando o operador ternário?

D) let palavraPessoa = quantidadePessoas == 1 ? "pessoa" : "pessoas";
Com a utilização desse código com operador ternário, Aline conseguirá substituir diversas linhas de código com apenas uma!

// -------------------------


// 27. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Seja bem-vinda(o)');

// -------------------------

// 28. Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = prompt('Digite o seu nome');
console.log(`Olá, ${nome}!`);

// -------------------------

// 29. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome = prompt('Digite o seu nome');
alert(`Olá, ${nome}!`);

// -------------------------

// 30. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
// Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let preferencia = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(preferencia);

// -------------------------

// 31. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = parseInt(Math.random() * 3 + 1);
let valor2 = parseInt(Math.random() * 3 + 1);
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// -------------------------

// 32. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = parseInt(Math.random() * 12 + 1);
let valor2 = parseInt(Math.random() * 17 + 1);
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// -------------------------

// 33. Peça ao usuário para inserir sua idade com prompt. 
// Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = parseInt(prompt('Insira sua idade.'));
if (idade >= 18) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

// -------------------------

// 34. Crie uma variável "numero" e peça um valor com prompt que verifique se é positivo, negativo ou zero. 
// Use if-else para imprimir a respectiva mensagem.

let numero = parseInt(prompt('Digite um número para verificar se é negativo, zero ou positivo.'));
if (numero < 0 ) {
    console.log('O número é negativo.');
} else if (numero == 0) {
    console.log('O número é zero.');
} else {
    console.log('O número é positivo.');
}

// -------------------------

// 35. Use um loop while para imprimir os números de 1 a 10 no console.
let contagem = 1;
while (contagem <= 10) {
    console.log(contagem);
    contagem++;
}

// -------------------------

// 36. Crie uma variável "nota" e atribua um valor numérico a ela. 
// Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = parseInt(Math.random() * 11);
if (nota < 7) {
    console.log(`Você tirou ${nota} e por isso está reprovado.`)
} else {
    console.log(`Você tirou ${nota} e por isso está aprovado.`);
}

// -------------------------

// 37. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numero = Math.random();
console.log(numero);

// -------------------------

// 38. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numero = parseInt(Math.random() * 11);
console.log(numero);

// -------------------------

// 39. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numero = Math.floor(Math.random() * 1000) + 1;
console.log(numero);

// -------------------------