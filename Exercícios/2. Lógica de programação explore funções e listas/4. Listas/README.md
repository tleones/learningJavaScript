## 📋 Exercícios do capítulo Listas

### 👜 Questão 60
Você foi encarregado(a) de criar um pequeno programa para gerenciar uma lista de compras. O programa deve permitir que o usuário adicione itens à lista e, em seguida, exiba o conteúdo da lista na tela. Além disso, a pessoa usuária deve ser capaz de ver um item específico da lista, digitando o índice do item desejado.

```javascript
let listaCompras = [];

listaCompras.push("Maçã");
listaCompras.push("Arroz");
listaCompras.push("Leite");
listaCompras.push("Pão");
listaCompras.push("Carne");
```

Sabendo disso, analise as alternativas abaixo e marque apenas as sentenças verdadeiras:

Selecione 2 alternativas

A) `listaCompras.length` exibe a quantidade de elementos de uma lista.

B) O código `listaCompras[3]` vai exibir o item Pão.

### 📋 Questão 61
Crie uma lista vazia, com o nome `listaGenerica`.

```javascript
let listaGenerica = [];
```

### 💻 Questão 62
Crie uma lista de linguagens de programação chamada `linguagensDeProgramacao` com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

```javascript
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
```

### 🚀 Questão 63
Adicione à lista `linguagensDeProgramacao` os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

```javascript
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
linguagensDeProgramacao.push('Java','Ruby','GoLang');
```

### 🏷️ Questão 64
Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

```javascript
let listaNomes = ['Joao','Maria','Jesus'];
console.log(listaNomes[0]);
```

### 🏷️ Questão 65
Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

```javascript
let listaNomes = ['Joao','Maria','Jesus'];
console.log(listaNomes[1]);
```

### 🏷️ Questão 66
Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

```javascript
let listaNomes = ['Joao','Maria','Jesus'];
console.log(listaNomes[2]); // OU: console.log(listaNomes[listaNomes.length - 1]);
```
