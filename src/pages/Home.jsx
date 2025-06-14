import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 2rem;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background: "#fff";
  color: #000;
`;

const Banner = styled.div`
  background: linear-gradient(135deg, #4f46e5, #6b5ce7, #8b5cf6);
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  margin: -2rem -2rem 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Edu TAS Beginner", cursive;
  margin: 0;
`;

const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const IntroImage = styled.img`
  width: 35%;
  height: 250px;
  border-radius: 10px;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Banner>
        <Title>Orienta</Title>
      </Banner>
      <Intro>
        <div style={{ width: "60%", maxWidth: "600px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Bem-vindo ao Orienta
          </h2>
          <p>
            Orienta é uma plataforma educacional inteligente focada na avaliação
            individual do aluno e na geração de sugestões personalizadas de
            melhoria. Aqui, o aluno responde quizzes organizados por áreas do
            conhecimento — como Matemática, Português e Lógica — e, ao final,
            recebe um relatório com:
            <ul style={{ margin: "0.5rem 2rem" }}>
              <li>Questões certas e erradas</li>
              <li>Áreas que precisam de reforço</li>
              <li>Dicas para melhorar o desempenho</li>
            </ul>
            Esses relatórios são automaticamente enviados ao professor, que pode
            acompanhar de forma clara o progresso de cada aluno e identificar os
            pontos que exigem mais atenção. Orienta transforma dados em
            orientação personalizada — para aprender de forma mais eficiente e
            com foco no que realmente importa.
          </p>
        </div>
        <IntroImage src="/image/imagem_home.jpg" alt="Imagem inicial" />
      </Intro>
      <ul style={{ listStyle: "none", padding: 0, marginBottom: "1rem" }}>
        <li style={{ marginBottom: "0.5rem" }}>
          <div>
            <p>aqui vai oque o formulario traz</p>
            <p> icone bonito sobre logica</p>
            <Button onClick={() => navigate("/forms/logic")}>
              Formulário de Lógica
            </Button>
          </div>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Button disabled>Formulário de Matemática</Button>
        </li>
        <li>
          <Button disabled>Formulário de Português</Button>
        </li>
      </ul>
      <div style={{ marginTop: "1rem" }}>
        <LogoutButton />
      </div>
    </Container>
  );
};

export default Home;
