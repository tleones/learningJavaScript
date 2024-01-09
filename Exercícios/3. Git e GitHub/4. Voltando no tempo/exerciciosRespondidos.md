95. Você está trabalhando em um projeto de desenvolvimento de software chamado "TechCode". 
    Observou-se que o histórico de commits do repositório possui um commit indesejado que precisa ser removido.
    Qual o comando correto para realizar essa tarefa?  
    Selecione uma alternativa  
    
    git reset --hard <id_do_commit_anterior>  

96. Acesse todos os commits realizados.  

    tleones@DESKTOP-05QTKO8 MINGW64 ~/learningJavaScript/Exercícios/3. Git e GitHub compartilhando e colaborando em projetos/4. Voltando no tempo (main)
    $ git log
    commit cc311397b31abf070b9a01ab994dd1ea083b7efc (HEAD -> main, origin/main, origin/HEAD)
    Author: Tomás Leones <tomasleones@gmail.com>
    Date:   Fri Jan 5 21:23:37 2024 -0300
    
        Correção de exercícios GIT Capítulo 3
    
    commit 8691f61bac6ffb7187353286b383d224d2b7d488
    Author: Tomás Leones <tomasleones@gmail.com>
    Date:   Fri Jan 5 21:20:35 2024 -0300
    
        Adição dos exercícios respondidos
    
    commit 2938984bc629740946c9aa73774a030c0c7867a9
    Author: Tomás Leones <tomasleones@gmail.com>
    Date:   Fri Jan 5 21:16:15 2024 -0300
    
        Readme explicativo do capítulo
    
    commit b32c3fd5dcf307e118ebf8ae137f6fda6e948718
    Author: Tomás Leones <tomasleones@gmail.com>
    Date:   Fri Jan 5 17:50:40 2024 -0300
    
    :

97. Modifique o último commit  

     Correção de exercícios GIT Capítulo 3
    
     Please enter the commit message for your changes. Lines starting
     with '#' will be ignored, and an empty message aborts the commit.
    
     Date:      Fri Jan 5 21:23:37 2024 -0300
    
     On branch main
     Your branch is up to date with 'origin/main'.
    
     Changes to be committed:
           modified:   ../3. Utilizando Git na IDE/exerciciosNaoRespondidos.md
           modified:   ../3. Utilizando Git na IDE/exerciciosRespondidos.md
           renamed:    exerciciosNaoRespondidos.js -> exerciciosNaoRespondidos.md
           renamed:    exerciciosRespondidos.js -> exerciciosRespondidos.md
    
    ~
    ~
    ~
    ~
    ~
    ~
    .git/COMMIT_EDITMSG [unix] (21:38 05/01/2024)                            1,1 All
    "~/learningJavaScript/.git/COMMIT_EDITMSG" [unix] 16L, 598B


98. Reverta mudanças no repositório local  

    git reset HEAD~1

99. Apague um ou mais commits  

    git rebase -i HEAD~N

100. Sincronize as modificações com o repositório remoto  

    git push origin main

101. Analise as mensagens de commits realizados e faça as alterações de acordo com as boas práticas  

    git log --oneline
    
    git rebase -i HEAD~N
