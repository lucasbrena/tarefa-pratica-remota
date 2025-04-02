# My Node.js Project

This is a basic Node.js project that demonstrates how to set up a simple server using Express.js.

## Project Structure

```
my-nodejs-project
├── src
│   └── index.js        # Entry point of the application
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**

   ```
   cd my-nodejs-project
   ```

3. **Install dependencies:**

   ```
   npm install
   ```

4. **Run the application:**

   ```
   npm start
   ```

## Usage

Once the server is running, you can access it at `http://localhost:3000`.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for this project.

## License

This project is licensed under the MIT License.

## Boas Práticas do “Programador Pragmático” 

1. DRY (Don't Repeat Yourself)
Aplicação: A função genérica apiRequest centraliza as chamadas HTTP (GET, POST, etc.), evitando duplicação de código para requisições com Axios.

2. Validação de Dados
Aplicação: A função validarTarefa encapsula a lógica de validação de tarefas, separando-a da lógica de envio de dados.

3. Aplicação: O uso de métodos como carregarTarefas e adicionarTarefa demonstra uma separação clara de responsabilidades, o que é um sinal de refatoração contínua para manter o código organizado.
async carregarTarefas() {
  this.tarefas = await this.apiRequest("get", "http://localhost:3000/tarefas");
}

4. Pequenos Commits
Evidência Indireta: Embora não seja possível verificar diretamente pelos arquivos, o código está modularizado e organizado, o que sugere que o desenvolvimento pode ter sido feito em pequenos passos, com commits frequentes para cada funcionalidade.

5. Uso de Frameworks e Bibliotecas
Aplicação: O uso de Vue.js, Vuetify e Axios demonstra a adoção de ferramentas modernas para evitar reinventar a roda, o que é um conselho do livro The Pragmatic Programmer. Benefício: Acelera o desenvolvimento e reduz a complexidade de implementar funcionalidades do zero.

6. Separação de Preocupações
Aplicação: A lógica de apresentação (HTML e Vuetify) está separada da lógica de negócios (métodos Vue.js), seguindo o princípio de Separation of Concerns. Benefício: Facilita a manutenção e a escalabilidade do código.