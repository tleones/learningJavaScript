# 📚 Exercícios do Dia 27/12/2023 - Introdução ao JavaScript Parte 02

Estes exercícios visam desenvolver habilidades em JavaScript, envolvendo desde a criação de jogos até a manipulação de variáveis e estruturas condicionais.

## 🎮 Jogo do Número Secreto

```javascript
// Jogo do Número Secreto
alert('Bem-vindo ao jogo do número secreto')
let chute = prompt('Escolha um número entre 1 e 10')
let numeroSecreto = 4

console.log(chute == numeroSecreto)
if (chute == numeroSecreto) {
    alert('Acertou')
} else {
    alert('O número secreto era ' + numeroSecreto)
}
```

**Pergunta:** Como modificar a mensagem do alerta para incluir o número escolhido pelo paciente, caso não acerte o número secreto?

**Resposta:** `alert('O número secreto era ' + numeroSecreto + ', mas você escolheu ' + chute);`

## 🚗 Verificação de Idade para Dirigir

```javascript
// Verificação de Idade para Dirigir
let idade = prompt("Digite sua idade:");

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

**Afirmações Verdadeiras:**

1. Se a idade for igual a 18, a mensagem exibida será: "Você é maior de idade."
2. Se a idade for menor que 18, a mensagem exibida será: "Você é menor de idade."

## 🛫 Correção de Bug - Desconto em Pacotes de Viagem

```javascript
// Correção de Bug - Desconto em Pacotes de Viagem
let porcentagemDesconto = 0;

if(quantidadeMilhas > 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    if(quantidadeMilhas > 5000){
        porcentagemDesconto = porcentagemDesconto + 10;
    }
}
```

**Resolução:** Utilizar um bloco `if` dentro do bloco `else` garante que o desconto seja aplicado corretamente.

## 📅 Mensagem de Dia da Semana

```javascript
let diaSemana = prompt('Qual é o dia da semana?');
if(diaSemana === 'Sábado' || diaSemana === 'Domingo') {
    alert('Bom fim de semana!')
} else {
    alert('Boa semana!');
}
```

## 🔢 Verificação de Número Positivo/Negativo/Zero

```javascript
let numeroDigitado = prompt('Digite um número para verificar se é positivo ou negativo');

if (numeroDigitado > 0) {
    alert('O número é positivo.');
} else if (numeroDigitado == 0) {
    alert('O número equivale a 0. Não é positivo nem negativo.');
} else {
    alert('O número é negativo.');
}
```

## 🏆 Sistema de Pontuação para Jogo

```javascript
let pontuacao = prompt('Digite sua pontuação para verificar o resultado.');

if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}
```

## 💰 Informação de Saldo da Conta

```javascript
let saldo = 1000;
alert(`O seu saldo atual é de R$${saldo}`);
```

## 👋 Boas-vindas Personalizadas

```javascript
let nome = prompt('Digite seu nome.')
alert(`É ótimo ter você de volta, ${nome}`);
```

Estes exercícios abrangem desde jogos simples até verificações condicionais e interações com o usuário. Teste e aprimore suas habilidades em JavaScript! ✨