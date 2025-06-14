### Backend (C# .NET - desenvolvido por Bruno)

- API REST
- Banco de dados relacional (PostgreSQL) e não-relacional (MongoDB)
- Documentado com Swagger
- Implementação de autenticação e controle de acesso

---

## ⚙️ Tecnologias Utilizadas

- React.js + Vite
- TailwindCSS
- Axios
- React Router DOM
- OpenAI GPT (Avaliação automatizada)
- .NET 8 + PostgreSQL + MongoDB (backend)
- Swagger
- Docker

---

## ▶️ Instruções para Rodar Localmente

### Frontend

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

Backend (via Docker ou localmente)
bash
Copiar
Editar
dotnet build
dotnet run --project Api
Acesse: http://localhost:5001/swagger

🧪 Exemplo de Funcionalidade
Aluno faz login e escolhe um quiz (ex: Lógica)

Ao finalizar, recebe:

Pontuação

Feedback gerado por IA

O relatório é enviado automaticamente ao painel do professor

📈 Modelo de Negócio
Proposta:
Oferecer uma plataforma inteligente para escolas e professores avaliarem o desempenho individual dos alunos com base em quizzes e IA.

Público-Alvo:

Escolas públicas e privadas

Professores de ensino fundamental e médio

Plataformas EAD

Monetização:

Plano gratuito com funcionalidades básicas

Planos pagos por aluno, escola ou rede de ensino

Relatórios premium e integração com outros sistemas

📣 Pitch
O Orienta resolve um problema real da educação: a dificuldade de avaliar cada aluno com precisão. A IA analisa quizzes, identifica lacunas e gera recomendações personalizadas. Professores usam dados, não achismos, para tomar decisões pedagógicas. Uma solução acessível, escalável e centrada no aprendizado.

✅ Status do Projeto
Tela de login funcional

Painel do aluno com quizzes

Relatórios gerados por IA (OpenAI)

Painel do professor com histórico de alunos

Integração backend completa

Responsividade e UX refinada

🏁 Observações Finais
Este projeto foi desenvolvido em 10 horas durante o Code Race 2025. Toda a implementação foi feita do zero por Vitor (frontend) e Bruno (backend), utilizando tecnologias modernas e integrando inteligência artificial de forma prática e aplicada.
