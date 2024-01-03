## 📋 **Exercícios do capítulo Funções**

**Questão 45** 🤔

Para marcar as opções corretas sobre funções em JavaScript, verifique o seguinte:

A) As funções podem ter um nome.
B) Palavra-chave 'function': Declara uma função em JavaScript.
C) Os colchetes são usados para definir os parâmetros da função.
D) Parênteses (): Após o nome da função (se houver), os parênteses são usados para definir os parâmetros da função.

**Explicação:**
A opção A é verdadeira, pois as funções podem ter um nome. A opção B também é verdadeira, pois a palavra-chave 'function' declara uma função em JavaScript. A opção D também está correta, pois os parênteses são usados para definir os parâmetros da função. A opção C está incorreta, pois os parâmetros de função são definidos entre parênteses, não colchetes.

---

**Questão 46** 💡

Para criar uma função que verifica se um número é positivo, negativo ou zero:

```javascript
function verificarNumero(numero) {
    if (numero > 0) {
        console.log('O número é positivo.');
    } else if (numero < 0) {
        console.log('O número é negativo.');
    } else {
        console.log('O número é zero.')
    }
}
```

**Lógica:**
A função `verificarNumero` recebe um número como parâmetro e usa a estrutura de controle `if-else` para verificar se o número é positivo (> 0), negativo (< 0) ou zero.

---

**Questão 47** 👋

Criar uma função que exibe "Olá, mundo!" no console:

```javascript
function cumprimentar() {
    console.log('Olá, mundo!');
}
```

**Lógica:**
A função `cumprimentar` é simples e apenas imprime no console a mensagem "Olá, mundo!" quando é chamada.

---

**Questão 48** 🖐️

Para criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console:

```javascript
function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}
```

**Lógica:**
A função `exibirNome` recebe um nome como parâmetro e o utiliza para imprimir no console uma mensagem personalizada.

---

**Questão 49** 🧮

Para criar uma função que recebe um número como parâmetro e retorna o dobro desse número:

```javascript
function dobrarNumero(numero) {
    return numero * 2;
}
```

**Lógica:**
A função `dobrarNumero` recebe um número como argumento e retorna o resultado da multiplicação desse número por 2.

---

**Questão 50** 📊

Para criar uma função que recebe três números como parâmetros e retorna a média deles:

```javascript
function gerarMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}
```

**Lógica:**
A função `gerarMedia` recebe três números como argumentos e retorna a média desses números, dividindo a soma deles por 3.

---

**Questão 51** ⬆️⬇️

Para criar uma função que recebe dois números como parâmetros e retorna o maior deles:

```javascript
function definirMaior(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}
```

**Lógica:**
A função `definirMaior` recebe dois números como argumentos e utiliza uma estrutura de controle `if-else` para compará-los e retornar o maior.

---

**Questão 52** ✖️✖️

Para criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo:

```javascript
function multiplicador(numero) {
    return numero * numero;
}
```

**Lógica:**
A função `multiplicador` recebe um número como argumento e retorna o resultado da multiplicação desse número por ele mesmo.

---
