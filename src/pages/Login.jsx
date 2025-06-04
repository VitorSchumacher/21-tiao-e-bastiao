/* eslint-disable no-unused-vars */
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
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  padding: 1rem;
  font-family: "Roboto", sans-serif;
  transition: background 0.5s ease;
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
  padding: 4rem;
  border-radius: 20px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 1000px;
  min-height: 500px;
  background-color: #ffffffee;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);
  const isMounted = useRef(true);

  const startRedirect = (path) => {
    setLoading(false);
    navigate(path);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("https://code-race-qfh4.onrender.com/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("🚀 ~ handleSubmit ~ data:", data);
      localStorage.setItem("userData", JSON.stringify(data));
      startRedirect("/home");
    } catch (err) {
      setLoading(false);
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
            label="Email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
