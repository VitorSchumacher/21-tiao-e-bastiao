import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import LogoutButton from "../components/LogoutButton";
import DoubleDiagonalBanner from "../components/DoubleDiagonalBanner";
import FormIcon from "../components/FormIcon";
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
              fontSize: "1.7rem",
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
      <div style={{ marginTop: "5rem" }}>
        <DoubleDiagonalBanner>
          <Title>Formulários</Title>
        </DoubleDiagonalBanner>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginBottom: "1rem" }}>
        <li style={{ marginBottom: "0.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              border: "1px solid #4f46e5cc",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <div style={{ flex: 1, minWidth: "300px" }}>
              <FormIcon size={40} style={{ color: "#4f46e5", marginBottom: "0.5rem" }} />
              <p>
                Este formulário foi desenvolvido para avaliar o raciocínio
                lógico do aluno, abordando questões que envolvem:
              </p>
              <ul style={{ margin: "0.5rem 2rem" }}>
                <li>Padrões e sequências numéricas</li>
                <li>Análise de proposições verdadeiras e falsas</li>
                <li>Resolução de problemas com lógica dedutiva</li>
                <li>Interpretação de situações-problema</li>
              </ul>
              <p>
                Ao final da atividade, o aluno receberá um relatório
                personalizado com seu desempenho, indicando os pontos fortes e
                as habilidades lógicas que precisam ser reforçadas. As respostas
                também serão encaminhadas ao professor responsável para
                acompanhamento individual.
              </p>
            </div>
            <div style={{ marginLeft: "1rem", width: "200px" }}>
              <Button onClick={() => navigate("/forms/logic")}>
                Ir para o formulário de Lógica
              </Button>
            </div>
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
