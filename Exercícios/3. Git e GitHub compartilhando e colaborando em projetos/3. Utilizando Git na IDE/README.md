# 🚀 Exercícios do capítulo Utilizando Git na IDE
## 87. 🏋️ Resolução de Conflitos no Git  
  Você está trabalhando em um projeto de desenvolvimento de software em equipe chamado "TechPro". Durante uma colaboração, ocorreu um conflito em um arquivo chamado main.js.
  Escolha a alternativa que indica a maneira de resolver tal conflito:
   Executar o comando git conflict main.js para resolver o conflito.
   Apagar o arquivo main.js e criá-lo novamente.
   Executar o comando git pull para resolver o conflito.
   Editar o arquivo e realizar um novo commit.
  Explicação:
  Para resolver um conflito no Git, é necessário editar manualmente o arquivo em conflito (no caso, main.js). Remova as marcações de conflito (<<<<<<<, =======, >>>>>>>) e decida qual parte do código manter. Em seguida, adicione o arquivo modificado com git add e faça um novo commit para registrar a resolução.

## 88. 💡 Criar um Novo Repositório Local  
  Passo a Passo
  Abra o Git Bash.
  Navegue até o diretório onde deseja criar o repositório local.
  Execute o comando mkdir nome-do-repositorio para criar um novo diretório.
  Use cd nome-do-repositorio para entrar no diretório.
  Inicialize o Git com git init.

## 89. 👌 Adicionar o Repositório Remoto ao Local  
  Passo a Passo
  Copie a URL do repositório remoto.
  No Git Bash, dentro do repositório local, utilize git remote add origin URL_DO_REPOSITORIO_REMOTO.

## 90. ❇️ Fazer uma Alteração Local e Enviar para o Remoto  
  Passo a Passo
  Faça as alterações necessárias nos arquivos do repositório.
  Adicione as alterações com git add ..
  Realize um commit com git commit -m "Mensagem do Commit".
  Envie as alterações para o repositório remoto usando git push origin NOME_DA_BRANCH.

## 91. 🫱 Resolução Manual de Conflitos  
  (Explicação similar à questão 87)

## 92. 📏 Realizar um Commit para Registrar a Resolução do Conflito  
  Passo a Passo
  Após resolver manualmente os conflitos, adicione os arquivos resolvidos com git add ..
  Realize um novo commit para registrar a resolução do conflito: git commit -m "Resolvido conflito manualmente".

## 93. 📗 Verificar Arquivos Adicionados  
  Passo a Passo
  Use git status para visualizar os arquivos modificados e adicionados.

## 94. ↗️↙️ Sincronizar Repositório Local com o Remoto  
  Passo a Passo
  Use git pull origin NOME_DA_BRANCH para atualizar o repositório local com o remoto.