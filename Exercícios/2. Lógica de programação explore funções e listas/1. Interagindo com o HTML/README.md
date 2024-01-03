# 📋 Exercícios do capítulo Interagindo com o HTML

## Questão 39

Para mudar dinamicamente o título do aplicativo usando JavaScript, utilize o código:

```javascript
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Bem-vindo ao mundo dev';
```

## Questão 40

Para alterar o conteúdo de `<h1>` com `document.querySelector` e definir o texto como "Hora do Desafio":

```javascript
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
```

## Questão 41

Criando uma função que exibe no console a mensagem "O botão foi clicado" quando o botão "Chutar" é pressionado:

```html
<button onclick="verificarChute()" class="container__botao">Chutar</button>
```

```javascript
function verificarChute() {
    console.log('O botão foi clicado.');
}
```

## Questão 42

Ao pressionar o botão "Alerta", uma função exibe um alerta com a mensagem "Eu amo JS":

```html
<button onclick="amarJS()" class="container__botao">Alerta</button>
```

```javascript
function amarJS() {
    alert('Eu amo JS');
}
```

## Questão 43

A função `digitarCidade()` é executada quando o botão "prompt" é clicado. Ela pergunta o nome de uma cidade do Brasil e exibe um alerta com a mensagem:

```javascript
function digitarCidade() {
    let cidade = prompt('Diga o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}
```

## Questão 44

Ao clicar no botão "soma", a função `somar()` solicita dois números e exibe o resultado da soma em um alerta:

```html
<button onclick="somar()" class="container__botao">soma</button>
```

```javascript
function somar() {
    let numero1 = prompt('Digite o primeiro número a ser somado');
    let numero2 = prompt('Digite o segundo número a ser somado');
    let soma = parseInt(numero1) + parseInt(numero2);
    alert(`A soma de ${numero1} e ${numero2} equivale a ${soma} `);
}
