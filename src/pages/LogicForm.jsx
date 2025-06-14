import React from "react";
import LogoutButton from "../components/LogoutButton";
import FormLayout, { Form, Logo } from "../components/FormLayout";
import Button from "../components/Button";

const LogicForm = () => {
  return (
    <FormLayout>
      <Logo src="/image/gato.webp" alt="Logo do Projeto" />
      <h1 style={{ fontFamily: "'Edu TAS Beginner', cursive" }}>
        Formulário de Lógica
      </h1>
      <Form>
        <p>Este formulário virá de uma rota do backend.</p>
        <Button disabled>Enviar</Button>
        <LogoutButton />
      </Form>
    </FormLayout>
  );
};

export default LogicForm;
