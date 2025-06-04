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

const Register = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
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

  const validate = () => {
    const newErrors = {};
    if (!nome.trim()) newErrors.nome = "Nome obrigat\u00f3rio";
    if (!email.trim()) newErrors.email = "Email obrigat\u00f3rio";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email inv\u00e1lido";
    if (senha.length < 6) newErrors.senha = "Senha deve ter 6 caracteres";
    if (senha !== confirmarSenha)
      newErrors.confirmarSenha = "As senhas n\u00e3o conferem";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;
    setLoading(true);
    try {
      const response = await fetch(
        "https://code-race-qfh4.onrender.com/usuario",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, email, senha }),
        }
      );
      if (!response.ok) {
        throw new Error("Erro ao cadastrar");
      }
      startRedirect("/");
    } catch {
      setLoading(false);
      setSubmitError("Erro ao cadastrar usu\u00e1rio");
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
        <Form onSubmit={handleSubmit} noValidate>
          <Input
            label="Nome"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            error={errors.nome}
          />
          <Input
            label="Email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            error={errors.senha}
          />
          <Input
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            error={errors.confirmarSenha}
          />
          <Button type="submit">Cadastrar</Button>
          {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
        </Form>
      </StyledCard>
    </Container>
  );
};

export default Register;
