// -------------------------

// 39. Você está lidando com a interação entre o HTML e o JavaScript para tornar a interface de usuário mais dinâmica e interativa. 
// No entanto, você gostaria de mudar o título do seu aplicativo de forma dinâmica com o JavaScript.

// Qual código JavaScript você usaria para alterar o texto exibido no cabeçalho da sua página (elemento h1) para Bem-vindo ao mundo dev?

let titulo = document.querySelector('h1')
titulo.innerHTML = 'Bem-vindo ao mundo dev'

Esta é a maneira correta de selecionar um elemento h1 e alterar seu conteúdo usando JavaScript.

// -------------------------

// 40. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// -------------------------

// 41. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

'index.html:'
<button onclick="verificarChute()" class="container__botao">Chutar</button>


'app.js:'
function verificarChute() {
    console.log('O botão foi clicado.');
}

// -------------------------

// 42. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

'index.html:'
<button onclick="amarJS()" class="container__botao">Alerta</button>

'app.js:'
function amarJS() {
    alert('Eu amo JS');
}

// -------------------------

// 43. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

'index.html:'
<button onclick="digitarCidade()" class="container__botao">prompt</button>

'app.js:'
function digitarCidade() {
    let cidade = prompt('Diga o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

// -------------------------

// 44. Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

'index.html:'
<button onclick="somar()" class="container__botao">soma</button>

'app.js:'
function somar() {
    let numero1 = prompt('Digite o primeiro número para a ser somado');
    let numero2 = prompt('Digite o segundo número a ser somado');
    let soma = parseInt(numero1) + parseInt(numero2);
    alert(`A soma de ${numero1} e ${numero2} equivale a ${soma} `)
}

// -------------------------