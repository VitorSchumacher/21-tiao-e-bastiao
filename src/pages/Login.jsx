// src/pages/Login.jsx
import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #a8e6cf, #dcedc1);
  padding: 1rem;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  display: block;
  margin: 0 auto 1.5rem auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledCard = styled(Card)`
  padding: 3.5rem;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 850px;
  min-height: 400px;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 0.5rem;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid #ccc;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setError("");
      setLoading(true);
      timerRef.current = setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 2000);
    } else if (username === "bruno" && password === "bruno$2025") {
      setError("");
      setLoading(true);
      timerRef.current = setTimeout(() => {
        setLoading(false);
        navigate("/home");
      }, 2000);
    } else {
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <Container>
      {loading && (
        <LoadingOverlay>
          <Spinner />
        </LoadingOverlay>
      )}
      <StyledCard>
        <Logo src="/image/gato.webp" alt="Logo do Projeto" />
        <Form onSubmit={handleSubmit}>
          <Input
            label="Usuário"
            placeholder="Digite seu nome"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </StyledCard>
    </Container>
  );
};

export default Login;
