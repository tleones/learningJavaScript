87. Você está trabalhando em um projeto de desenvolvimento de software em equipe chamado "TechPro". Todas as pessoas do time estão usando o Git para controle de versão. Durante uma colaboração, ocorreu um conflito em um arquivo chamado main.js.  
Escolha a alternativa que indica a maneira de resolver tal conflito:  
Selecione uma alternativa  

Editar o arquivo e realizar um novo commit.  

88. Crie um novo repositório local  
tleones@DESKTOP-05QTKO8 MINGW64 ~
$ mkdir novo-repositorio

tleones@DESKTOP-05QTKO8 MINGW64 ~
$ cd novo-repositorio

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio
$ git init
Initialized empty Git repository in C:/Users/tleones/novo-repositorio/.git/

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$

89. Adicione o repositório remoto criado nos exercícios anteriores ao seu repositório local.  

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$ git remote add origin https://github.com/tleones/King-Pong  

90. Faça uma alteração no repositório local e envie para o remoto.  

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$ git add .

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$ git commit -m "Commit para exercício"
[master (root-commit) 3f46c2c] Commit para exercício
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 teste.txt

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$ git push origin main
]error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/tleones/King-Pong'

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$ git push origin master
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 229 bytes | 229.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/tleones/King-Pong/pull/new/master
remote:
To https://github.com/tleones/King-Pong
 * [new branch]      master -> master

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$

91. Resolva os conflitos manualmente, escolhendo quais alterações serão mantidas  

Alterações manuais e commit.

92. Realize um commit para registrar a resolução do conflito.  

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$ git add .

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$ git commit -m "Resolvido conflito manualmente"

93. Verifique quais arquivos foram adicionados  

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$ git status
On branch master

94. Sincronize o repositório local com o repositório remoto no GitHub.  

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$ git pull origin master
From https://github.com/tleones/King-Pong
 * branch            master     -> FETCH_HEAD
Already up to date.

tleones@DESKTOP-05QTKO8 MINGW64 ~/novo-repositorio (master)
$ git push origin master
Everything up-to-date
