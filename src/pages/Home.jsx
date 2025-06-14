import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import UserMenu from "../components/UserMenu";
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
  display: flex;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  margin: -2rem -2rem 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Edu TAS Beginner", cursive;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 0 9rem;
  flex-wrap: wrap;
`;

const IntroText = styled.div`
  width: 60%;
`;

const IntroHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Edu TAS Beginner", cursive;
  background: linear-gradient(135deg, #4f46e5, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IntroImage = styled.img`
  width: 35%;
  height: 250px;
  border-radius: 10px;
`;

const Home = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const name = userData.nome || "Aluno";
  console.log("🚀 ~ Home ~ userData:", userData);

  return (
    <Container>
      <Banner>
        <UserMenu name={name} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            width: "100%",
            flex: 1,
            justifyContent: "center",
            margin: "0 1rem",
            textAlign: "center",
            marginLeft: "-3rem",
          }}
        >
          <img
            src="/image/logo.png"
            alt="Logo Orienta"
            style={{ height: "100px", marginRight: "-2rem" }}
          />
          <Title style={{ flex: "unset" }}>Orienta</Title>
        </div>
      </Banner>
      <Intro>
        <IntroText>
          <IntroHeading>Bem-vindo ao Orienta</IntroHeading>
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
        </IntroText>
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
              margin: "3rem 0",
            }}
          >
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: "1rem",
                margin: "1rem 0",
              }}
            >
              <FormIcon
                size={40}
                style={{ color: "#4f46e5", marginBottom: "0.5rem" }}
              />
              <h3 style={{ margin: "0.5rem", display: "inline" }}>
                Formulário de Lógica
              </h3>
            </div>
            <div style={{ flex: 1, minWidth: "300px" }}>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              border: "1px solid #4f46e5cc",
              padding: "1rem",
              borderRadius: "8px",
              margin: "3rem 0",
            }}
          >
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: "1rem",
                margin: "1rem 0",
              }}
            >
              <FormIcon
                size={40}
                style={{ color: "#4f46e5", marginBottom: "0.5rem" }}
              />
              <h3 style={{ margin: "0.5rem", display: "inline" }}>
                Formulário de Matemática
              </h3>
            </div>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <p>
                Este formulário aborda tópicos básicos de matemática para
                reforçar o aprendizado do aluno.
              </p>
              <ul style={{ margin: "0.5rem 2rem" }}>
                <li>Operações aritméticas</li>
                <li>Problemas de geometria simples</li>
                <li>Interpretação de gráficos</li>
                <li>Raciocínio numérico</li>
              </ul>
            </div>
            <div style={{ marginLeft: "1rem", width: "200px" }}>
              <Button onClick={() => navigate("/forms/math")}>
                Ir para o formulário de Matemática
              </Button>
            </div>
          </div>
        </li>
        <li>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              border: "1px solid #4f46e5cc",
              padding: "1rem",
              borderRadius: "8px",
              margin: "3rem 0",
            }}
          >
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: "1rem",
                margin: "1rem 0",
              }}
            >
              <FormIcon
                size={40}
                style={{ color: "#4f46e5", marginBottom: "0.5rem" }}
              />
              <h3 style={{ margin: "0.5rem", display: "inline" }}>
                Formulário de Português
              </h3>
            </div>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <p>
                Questões focadas em interpretação de texto e gramática para
                avaliar o domínio da língua.
              </p>
              <ul style={{ margin: "0.5rem 2rem" }}>
                <li>Compreensão de leitura</li>
                <li>Ortografia e acentuação</li>
                <li>Classes gramaticais</li>
                <li>Análise sintática básica</li>
              </ul>
            </div>
            <div style={{ marginLeft: "1rem", width: "200px" }}>
              <Button onClick={() => navigate("/forms/portuguese")}>
                Ir para o formulário de Português
              </Button>
            </div>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
