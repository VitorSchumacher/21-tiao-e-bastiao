// src/pages/Login.jsx
import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import FormLayout, { Form, Logo } from "../components/FormLayout";
import Toast from "../components/Toast";
import { useNavigate, Link, useLocation } from "react-router-dom";

const API_BASE_URL = process.env.VITE_API_BASE_URL || "/api";

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

const RegisterLink = styled(Link)`
  color: #4f46e5;
  text-align: center;
  margin-top: 0.5%;
  text-decoration: underline;
  font-size: 1rem;
`;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(
    location.state?.registrationSuccess || false
  );
  const timeoutRef = useRef(null);

  const startRedirect = (path) => {
    const id = setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 2000);
    timeoutRef.current = id;
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (location.state?.registrationSuccess) {
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("userData", JSON.stringify(data));
      const redirectPath = data.tipoUsuario === 1 ? "/dashboard" : "/home";
      startRedirect(redirectPath);
    } catch {
      setLoading(false);
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <FormLayout>
      {showSuccess && (
        <Toast message="Cadastro realizado com sucesso!" type="success" />
      )}
      {loading && (
        <LoadingOverlay>
          <Spinner />
        </LoadingOverlay>
      )}
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
          <RegisterLink to="/register">Cadastre-se</RegisterLink>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
    </FormLayout>
  );
};

export default Login;
