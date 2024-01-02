# 📚 Exercícios do capítulo Loops e tentativas

Aqui estão uma série de exercícios de JavaScript para consolidar seus conhecimentos e habilidades. Prepare-se para mergulhar em loops, condicionais e contadores!

## 🔄 Exercício 19: Loop `while`

```javascript
let contador = 1;

while (contador < 4) {
  console.log('Executando a iteração ' + contador);
  contador = contador + 1;
}
```

**Explicação:** O loop `while` inicia quando `contador < 4`. Ele continuará repetindo o código dentro das chaves enquanto esta condição for verdadeira. No final, serão impressas as mensagens "Executando a iteração 1", "Executando a iteração 2" e "Executando a iteração 3" no console.

## 🚫 Exercício 20: Correção de Loop Infinito

Este é um caso em que o loop se torna infinito. Precisamos corrigir isso!

**Problema:** O loop é infinito porque o valor de `contador` não é alterado dentro do loop, resultando em uma condição perpetuamente verdadeira. 

**Solução:** Adicione `contador--` dentro do loop para decrementar o valor de `contador` a cada iteração, fazendo com que eventualmente ele seja menor ou igual a zero e pare a execução do loop.

## 🔢 Exercício 21: Contagem Progressiva

```javascript
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}
```

## ⬇️ Exercício 22: Contagem Regressiva

```javascript
let numero = 10;
while (numero >= 0) {
    console.log(numero);
    numero--;
}
```

## ⏳ Exercício 23: Contagem Regressiva Personalizada

```javascript
let numero = prompt('Digite um número para a contagem regressiva.');
while (numero >= 0) {
    console.log(numero);
    numero--;
}
```

## ⏱️ Exercício 24: Contagem Progressiva Personalizada

```javascript
let contador = 0;
let numero = prompt('Digite um número para a contagem progressiva.');
while (contador <= numero) {
    console.log(contador);
    contador++;
}
```

Estes exercícios proporcionam um mergulho profundo em loops e contadores, criando sequências ascendentes e descendentes. Teste suas habilidades e divirta-se! 🚀
```
