# CodeRace 2025 Frontend

Este projeto é uma aplicação React construída com Vite. Ele contém um formulário de login simples e algumas páginas utilizadas no evento CodeRace 2025. O formulário de login se autentica no backend disponível em `https://code-race-qfh4.onrender.com`.

Para facilitar o desenvolvimento sem problemas de CORS, todas as requisições para a API são feitas através do caminho `/api`. O Vite realiza o proxy dessas rotas para o backend real durante o desenvolvimento e o arquivo `vercel.json` faz a reescrita em produção. O endereço do backend pode ser configurado pela variável `VITE_API_BASE_URL`.

## Exemplo de credenciais de login

Qualquer usuário válido registrado no backend pode ser utilizado. Quando a autenticação é bem-sucedida, o `slug`, `nome`, `token` e `tipoUsuario` retornados são salvos no `localStorage` na chave `userData`. Se o usuário for professor (`tipoUsuario` igual a `1`), ele é redirecionado para o dashboard; caso contrário, é levado para a página inicial com informações sobre os formulários disponíveis.

## Rodando localmente

O projeto usa **npm** como gerenciador de pacotes. Para iniciar um servidor de desenvolvimento:

```bash
npm install
npm run dev
```

O Vite iniciará em `http://localhost:5173` por padrão.

## Rodando os testes

O Jest está configurado para testes de unidade. Após instalar as dependências, execute:

```bash
npm test
```

O comando executa todos os testes dentro de `src/__tests__`.

# 💻 Code Race 2025 - Tião e Bastião

## 👥 Integrantes
| Nome Completo | Função no Projeto |
|---------------|-------------------|
|Bruno Siqueira| Desenvolvedor Backend|
|Vitor Schumacher| Desenvolvedor Frontend |

---

## 🎯 Tema / Área do Problema
> *(Preencha após a divulgação oficial do tema)*  
Exemplo: Educação Inclusiva / Cidadania Digital

---

## ❓ Problema a Ser Resolvido
> Descreva o problema identificado, seus impactos e por que ele precisa ser resolvido. Use dados reais se possível.

---

## 💡 Descrição da Solução Proposta
Nossa aplicação é um sistema monolítico desenvolvido em .NET que oferece uma API REST para [explicação do que ela faz], com base em dados estruturados no PostgreSQL e não estruturados no MongoDB. A aplicação visa [descrever a funcionalidade principal com ênfase no impacto e inovação].

---

## 🧱 Estrutura da Solução
```
Raiz do Projeto/
├── Api/               # Controllers e Endpoints
├── Application/       # Regras de negócio, serviços, DTOs
├── Crosscutting/      # Injeção de dependências e configurações
├── Data/              # Conexões e mapeamento para PostgreSQL e MongoDB
├── Infra/             # Repositórios e consultas em ambos os bancos
```
---

## 🛠 Tecnologias Utilizadas

- **.NET 8 (C#)** – Framework principal
- **PostgreSQL** – Armazenamento de dados relacionais
- **MongoDB** – Armazenamento de documentos flexíveis
- **Entity Framework Core** – ORM para PostgreSQL
- **MongoDB.Driver** – Driver oficial para C#
- **Swagger (Swashbuckle)** – Documentação da API
- **Docker** – Contêineres para banco e app
- **AutoMapper** – Mapeamento de DTOs e entidades
- **FluentValidation** – Validação de modelos

---

## ▶️ Instruções de Instalação e Execução

### 1. Pré-requisitos

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [Docker](https://www.docker.com/) (opcional para banco)
- PostgreSQL rodando (porta 5432)
- MongoDB rodando (porta 27017)

### 2. Configuração

Edite o arquivo `.env` com suas credenciais:

```json
MONGO_DB_CONNECTION=mongodb://mongodb:mongodb@localhost:27017/?retryWrites=true&connectTimeoutMS=10000&authMechanism=SCRAM-SHA-256
MONGO_DB_DATABASE=code_race

DB_APP_USERNAME=admin
DB_APP_PASSWORD=admin
DB_APP_HOST=localhost
DB_APP_PORT=5432
DB_APP_DATABASE=apps
```

### 3. Execução

```bash
dotnet restore
dotnet build
dotnet run --project Api
```

A API estará disponível em: [http://localhost:5001/swagger](http://localhost:5001/swagger)

---

## 🧪 Exemplos de Endpoints

- `GET /api/exemplo` – Lista dados da entidade X
- `POST /api/exemplo` – Cria novo registro
- `GET /api/exemplo/busca?termo=` – Busca combinada em Mongo e PostgreSQL

---

## 📦 Documentação Técnica

- Swagger UI: [http://localhost:5001/swagger](http://localhost:5001/swagger)
- README com explicação de arquitetura, instalação e uso
- Diagrama de arquitetura (opcional)

---

## 📈 Modelo de Negócio

> (Descreva como o sistema pode ser utilizado no mundo real, público-alvo, impacto social ou comercial, e possíveis fontes de receita se houver.)

---

## 📣 Pitch

> *Apresentação em até 3 minutos (preparar em Google Slides, Canva ou Figma)*  
Destaque o problema, solução, público, impacto e diferencial técnico.

---

## ✅ Status da Aplicação

- [x] Backend funcional com conexão dupla (Mongo + Postgre)
- [x] Swagger documentado
- [x] Repositório estruturado
- [x] Aplicação testada localmente

---

## 🏁 Observações Finais

> Este projeto foi desenvolvido em 10 horas durante o Code Race 2025. Todo o código e ideias aqui apresentados são originais da equipe.

