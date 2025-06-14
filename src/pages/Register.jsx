import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import FormLayout, { Form, Logo } from "../components/FormLayout";
import { useNavigate } from "react-router-dom";

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

const HeaderTitle = styled.h1`
  color: #4f46e5;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-family: "Edu TAS Beginner", cursive;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  // 0 representa Aluno e 1 representa Professor
  const [tipoUsuario, setTipoUsuario] = useState(0);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  const startRedirect = (path, state) => {
    const id = setTimeout(() => {
      setLoading(false);
      navigate(path, { state });
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
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Email inv\u00e1lido";
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
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, email, senha, tipoUsuario }),
        }
      );
      if (!response.ok) {
        throw new Error("Erro ao cadastrar");
      }
      startRedirect("/", { registrationSuccess: true });
    } catch {
      setLoading(false);
      setSubmitError("Erro ao cadastrar usu\u00e1rio");
    }
  };

  return (
    <FormLayout>
      {loading && (
        <LoadingOverlay>
          <Spinner />
        </LoadingOverlay>
      )}
      <Logo src="/image/gato.webp" alt="Logo do Projeto" />
        <HeaderTitle>Cadastro</HeaderTitle>
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
          <Select
            label="Tipo de usuário"
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(parseInt(e.target.value, 10))}
          >
            <option value={1}>Professor</option>
            <option value={0}>Aluno</option>
          </Select>
          <Button type="submit">Cadastrar</Button>
          {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
        </Form>
    </FormLayout>
  );
};

export default Register;
