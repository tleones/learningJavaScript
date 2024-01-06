# 📋 Exercícios do capítulo Voltando no tempo
## 🗑️ 95. Remover um Commit Indesejado  
Como Fazer:  
Para remover um commit indesejado do histórico do repositório, o comando correto é:  

bash
Copy code
git reset --hard <id_do_commit_anterior>
Explicação:
O comando git reset --hard reverte o repositório para o estado do commit especificado pelo <id_do_commit_anterior>, removendo todos os commits posteriores.

## 🔍 96. Acessar Todos os Commits  
Para visualizar todos os commits do repositório, utilize o comando:  

bash
Copy code
git log
Explicação:
git log exibe o histórico de commits, mostrando detalhes como hash do commit, autor, data e mensagem associada a cada commit.

## ✏️ 97. Modificar o Último Commit  
Para modificar o último commit, você pode usar:  

bash
Copy code
 Após realizar as modificações, adicione-as ao commit
git commit --amend
Explicação:
git commit --amend permite adicionar mudanças ao último commit. Abre o editor para editar a mensagem do commit, se necessário.

## ⏪ 98. Reverter Mudanças no Repositório Local  
Para reverter o último commit localmente, use:  

bash
Copy code
git reset HEAD~1
Explicação:
git reset HEAD~1 desfaz o último commit mantendo as alterações nos arquivos, mas retirando-as da área de staging.

## 🔥 99. Apagar um ou Mais Commits  
Para apagar um ou mais commits, utilize:  

bash
Copy code
git rebase -i HEAD~N
Explicação:
git rebase -i HEAD~N permite interativamente revisar commits e realizar ações como remover, editar ou mesclar commits.

## 🔄 100. Sincronizar Modificações com o Repositório Remoto  
Para enviar modificações para o repositório remoto, use:  

bash
Copy code
git push origin main
Explicação
git push origin main envia as modificações da branch local main para a branch main do repositório remoto origin.

## 📝 101. Analisar Mensagens de Commits e Fazer Alterações  
Para ver mensagens de commits e realizar alterações de acordo com as boas práticas, use:  

bash
Copy code
git log --oneline
git rebase -i HEAD~N
Explicação:
git log --oneline exibe mensagens de commits em uma linha. git rebase -i HEAD~N permite revisar commits interativamente para reorganizar, editar ou remover commits.
