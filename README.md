# ReactGram

ReactGram é uma aplicação web inspirada no Instagram, desenvolvida com o objetivo de aprimorar habilidades em desenvolvimento web utilizando React, Node.js e MongoDB.

## Funcionalidades

- **Cadastro e Login de Usuários**: Permite que novos usuários se cadastrem e façam login na plataforma.
- **Upload de Fotos**: Usuários podem fazer upload de imagens para compartilhar com outros.
- **Curtidas e Comentários**: Interaja com as fotos de outros usuários através de curtidas e comentários.
- **Perfis de Usuário**: Cada usuário possui um perfil onde suas fotos e informações são exibidas.

## Tecnologias Utilizadas

- **Frontend**: React.js, CSS, HTML
- **Backend**: Node.js, Express.js
- **Banco de Dados**: MongoDB
- **Autenticação**: JSON Web Tokens (JWT)

## Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/JoaoVASSoares/ReactGram.git
   ```

2. **Navegue até o diretório do projeto**:
   ```bash
   cd ReactGram
   ```

3. **Instale as dependências do backend**:
   ```bash
   cd Backend
   npm install
   ```

4. **Configure as variáveis de ambiente**:
   - Crie um arquivo `.env` na pasta `Backend` com as seguintes variáveis:
     ```
     MONGO_URI=sua_string_de_conexao_mongodb
     JWT_SECRET=sua_chave_secreta_jwt
     ```

5. **Inicie o servidor backend**:
   ```bash
   npm start
   ```

6. **Instale as dependências do frontend**:
   ```bash
   cd ../frontend
   npm install
   ```

7. **Inicie o servidor frontend**:
   ```bash
   npm start
   ```

A aplicação estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato com João Vitor A S Soares através do [GitHub](https://github.com/JoaoVASSoares). 
