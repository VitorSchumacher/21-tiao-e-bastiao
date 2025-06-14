import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 2rem;
  min-height: 100vh;
  font-family: 'Edu TAS Beginner', cursive;
  background: linear-gradient(180deg, #4f46e5, #6366f1, #8b5cf6);
  color: #fff;
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
  margin: 0;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Banner>
        <Title>Orienta</Title>
      </Banner>
      <h2>Bem-vindo ao Orienta</h2>
      <p>
        Nesta página você encontrará informações sobre o projeto e poderá
        acessar os formulários disponíveis para preenchimento.
      </p>
      <ul style={{ listStyle: "none", padding: 0, marginBottom: "1rem" }}>
        <li style={{ marginBottom: "0.5rem" }}>
          <Button onClick={() => navigate("/forms/logic")}>
            Formulário de Lógica
          </Button>
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
