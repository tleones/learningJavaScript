//  11. Você é uma pessoa desenvolvedora de software em uma clínica médica chamada Médica Voll. A empresa deseja que você crie um pequeno jogo de adivinhação para seus pacientes enquanto eles estão na sala de espera. Então, você decide criar um jogo do número secreto usando JavaScript, conforme a seguir:

 alert('Bem-vindo ao jogo do número secreto')
 let chute = prompt('Escolha um número entre 1 e 10')

 let numeroSecreto = 4

 console.log(chute == numeroSecreto)
 if (chute == numeroSecreto) {
     alert('Acertou')
 } else {
     alert('O número secreto era ' + numeroSecreto)
 }

// Dada essa estrutura básica de código que você criou, como você modificaria a mensagem do alerta para incluir o número que o paciente escolheu, caso não acertasse o número secreto? Escolha a alternativa correta:

// Obs: Note que o "+" usado serve como uma alternativa ao `-> template de strings já apresentado para realizarmos concatenação de strings/caracteres/valores de varíaveis no JavaScript. 

// Resposta: alert('O número secreto era ' + numeroSecreto + ', mas você escolheu ' + chute); 

// -------------------------

// 12. Você é uma pessoa desenvolvedora de software que desenvolve aplicações para o Detran, que é o órgão responsável pela fiscalização e regulamentação do trânsito, habilitação de condutores, registro e licenciamento de veículos no Brasil.

// A idade mínima para dirigir no Brasil é 18 anos. Sabendo disso, uma equipe criou o seguinte programa:

 let idade = prompt("Digite sua idade:");

 if (idade >= 18) {
   console.log("Você é maior de idade.");
 } else {
   console.log("Você é menor de idade.");
 }

// Com essa base, analise as afirmações abaixo e marque apenas as verdadeiras.

// Resposta 1: Caso a idade seja igual a 18, a mensagem do console que será exibida será: Você é maior de idade.
// Esta afirmação está correta. Se a idade digitada for igual a 18, a condição no if será verdadeira (idade >= 18 é verdadeiro), e a mensagem "Você é maior de idade" será exibida, pois o operador >= inclui o valor 18. O bloco de código dentro do else será ignorado.

// Resposta 2: Caso a idade seja menor que 18, a mensagem do console que será exibida será: Você é menor de idade.
// Esta afirmação está correta. Se a idade digitada for menor que 18, a condição no if será falsa (idade >= 18 é falso), e o fluxo de execução seguirá para o bloco do else, exibindo a mensagem "Você é menor de idade".

// -------------------------

// 13. Como primeira tarefa, sua liderança pediu para que você corrigisse um bug que tem acontecido quando uma pessoa cliente do site tenta utilizar suas milhas do cartão de crédito para obter desconto nos pacotes de viagem. Para isso, foi apresentado o seguinte código:


let porcentagemDesconto = 0;

if(quantidadeMilhas > 5000){
   porcentagemDesconto = porcentagemDesconto + 10;
}

if(quantidadeMilhas > 30000){
     porcentagemDesconto = porcentagemDesconto + 20;
 } else {
     porcentagemDesconto = 0;
 }

// Para te ajudar a compreender a origem do bug, sua liderança explicou a regra de negócio utilizada para compras de pacotes de viagens com milhas:

// Pessoas com uma quantidade de milhas inferior a 5.000 não recebem desconto.
// Pessoas com uma quantidade de milhas superior a 30.000 recebem 20% de desconto.
// Pessoas com uma quantidade de milhas superior a 5.000, mas inferior a 30.000, recebem 10% de desconto.
// Mas, segundo relatos de clientes, ao tentar utilizar o desconto referente a 5.000 milhas, não ocorre nenhum desconto. Já clientes com mais de 30.000 milhas estão recebendo desconto excedente ao que deveriam receber.

// Como você poderia modificar o código para que ele funcione corretamente?

// Resposta: Fazendo a utilização de um bloco if dentro do bloco else, como:


 let porcentagemDesconto = 0;

 if(quantidadeMilhas > 30000){
     porcentagemDesconto = porcentagemDesconto + 20;
 } else {
     if(quantidadeMilhas > 5000){
     porcentagemDesconto = porcentagemDesconto + 10;
 }

 }

// A utilização do bloco if dentro do bloco else garante que, caso a quantidade de milhas for superior a 30000, o desconto será de 20%, e caso não for superior a este valor, mas for superior a 5000, o desconto será de 10%. Para o caso da quantidade de milhas ser inferior a 5000, o desconto permanecerá zerado, pois não existe a quantidade mínima para ganhar desconto.

// -------------------------

// 14. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaSemana = prompt('Qual é o dia da semana?');
if(diaSemana === 'Sábado' || diaSemana === 'Domingo') {
    alert('Bom dim de semana!')
} else {
    alert('Boa semana!');
}

// -------------------------

// 15. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroDigitado = prompt('Digite um número para verificar se é positivo ou negativo');

if (numeroDigitado > 0) {
    alert('O número é positivo.');
} else if (numeroDigitado == 0) {
    alert('O número equivale a 0. Não é positivo nem negativo.');
} else {
    alert('O número é negativo.');
}

// -------------------------

// 16. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt('Digite sua pontuação para verificar o resultado.');

if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

// -------------------------

// 17. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 1000;

alert(`O seu saldo atual é de R$${saldo}`);

// -------------------------

// 18. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Digite seu nome.')
alert(`É ótimo ter você de volta, ${nome}`);

// -------------------------