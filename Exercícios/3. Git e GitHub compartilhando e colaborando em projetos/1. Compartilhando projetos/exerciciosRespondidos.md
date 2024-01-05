#############################################

Você está desenvolvendo um projeto para um Supermercado Online. Após desenvolver algumas funcionalidades, testar e fazer ajustes, você percebeu que precisa compartilhar o projeto com sua equipe. Para isso, você decide utilizar o GitHub. No momento, o código do projeto existe apenas no seu computador e você deseja conectá-lo a um repositório remoto criado no GitHub.
Qual comando você poderia utilizar para conectar seu projeto local do Git com o repositório remoto no GitHub?

Selecione uma alternativa

A) Utilizando o comando git remote add origin url-do-repositorio-no-github no terminal.

#############################################

Crie uma conta no GitHub
github.com/tleones

#############################################

Crie um repositório para um projeto pessoal.
github.com/tleones/learningJavaScript

#############################################

Faça a instalação do Git
$ git -v git version 2.42.0.windows.2

#############################################

Crie um repositório localmente para o seu projeto pessoal
~/learningJavaScript/Exercícios/3. Git e GitHub compartilhando e colaborando em projetos (main) $

#############################################

Adicione alguns arquivos no seu repositório local
$ ls Exercícios/ Projetos/ README.md

#############################################

Faça o commit das alterações
63c72835e16b4282cfa339a71dff551747d8abcf (last)

#############################################

Configure a identidade do autor do commit.
$ git config --global user.name Tomás Leones

$ git config --global user.email tomasleones@gmail.com

#############################################

Crie a branch Main
$ git branch

main
#############################################

Realize a conexão do seu repositório local com o remoto
$ git remote -v origin https://github.com/tleones/learningJavaScript.git (fetch) origin https://github.com/tleones/learningJavaScript.git (push)

#############################################

Envie as alterações no repositório local para o remoto
$ git log commit 63c72835e16b4282cfa339a71dff551747d8abcf (HEAD -> main, origin/main, origin/HEAD) Merge: e7eec15 ac80cc4 Author: Tomás Leones tomasleones@gmail.com Date: Thu Jan 4 00:13:55 2024 -0300

Merge branch 'main' of https://github.com/tleones/learningJavaScript
commit e7eec15939a0bd1bd20d11f8f818807194925b8b Author: Tomás Leones tomasleones@gmail.com Date: Thu Jan 4 00:13:22 2024 -0300

Adicionando recurso de acessibilidade com leitura da página
commit ac80cc4b18fb43be24c490f2f17425488c5173b2 Author: Tomás Leones 109169966+tleones@users.noreply.github.com Date: Thu Jan 4 00:06:39 2024 -0300

Update README.md
commit 030dc92431877db727acc999a7a13cc5be97de2a Author: Tomás Leones tomasleones@gmail.com Date: Thu Jan 4 00:05:17 2024 -0300 :

#############################################

Utilize o comando git status
tleones@SPW90V8JH3 MINGW64 ~/learningJavaScript/Exercícios/3. Git e GitHub compartilhando e colaborando em projetos/1. Compartilhando projetos (main) $ git status On branch main Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

#############################################