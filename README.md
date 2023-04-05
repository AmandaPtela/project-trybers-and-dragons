  <strong> Trybers and Dragons </strong><br />

Projeto de `backend` que consiste em aplicar os princípios da arquitetura S.O.L.I.D e os princípios de POO (Programação Orientada a Objetos) em uma estrutura de jogos de interpretação de papéis, mais conhecidos como RPG (Role Playing Game)

Foi desenvolvido utilizando _Docker_ e _Typescript_.

  <summary><strong>Rodando o projeto localmente‼️ </strong></summary><br />
  
  1. Clone o repositório
   - `git clone git@github.com:AmandaPtela/project-trybers-and-dragons.git`
    
  2. Instale as dependências e inicialize o projeto
  - Instale as dependências:
    - `npm install`
  - Inicialize o projeto:
    - `npm run dev` 
  
  <summary><strong>Rodando o projeto no Docker‼️ </strong></summary><br />
  
  1. Clone o repositório
   - `git clone git@github.com:AmandaPtela/project-trybers-and-dragons.git`
  
  2. Acesse a raíz do projeto e inicialize/suba o container do projeto - usando o arquivo docker-compose.yml -
   - `docker-compose up -d`
     
  3. Acesse o bash do container
   - `docker exec -it trybers_and_dragons bash`
  4. Instale as dependências através do terminal do container:
   - `npm install`
  5. Inicialize o projeto:
   - `npm run dev`
  
*As Pastas `Battle` e `fighter`(arquivos **_Fighter.ts_** e **_index.ts_**) e o arquivo `docker-compose` são de autoria da **Trybe***