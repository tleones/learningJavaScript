102. Você está colaborando em um projeto de código aberto chamado "TechLearn", uma plataforma de aprendizado online. Você foi designado para adicionar um README ao repositório do projeto. No entanto, algumas pessoas do seu time estão questionando a importância de ter um README.  
Escolha a alternativa que destaca os benefícios de incluir um README em um repositório:  
Selecione uma alternativa  

Um README permite que você descreva o propósito do projeto, além de outros detalhes relevantes.  

103. Criar um README.md para documentação de seu projeto  
echo "# Meu Projeto" >> README.md  
git add README.md  
git commit -m "Adiciona README.md"  

104. Crie um arquivo .txt com os logs de commits no seu projeto  

git log > logs.txt   # Cria um arquivo logs.txt com os logs de commits  

105. Ignore o arquivo de logs durante a sincronização do repositório local para o remoto  

echo "logs.txt" >> .gitignore  
git add .gitignore  
git commit -m "Ignora logs.txt durante sincronização"  

106. Crie um README.md para o seu perfil do github  
git init  
echo "# Meu Perfil" >> README.md  
git add README.md  
git commit -m "Adiciona README.md ao perfil"  
git remote add origin https://github.com/tleones/tleones.git  
git push -u origin main  
