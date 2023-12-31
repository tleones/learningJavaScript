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
