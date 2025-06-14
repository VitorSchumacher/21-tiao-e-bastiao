import React from "react";
import Button from "../components/Button";
import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bem-vindo ao CodeRace</h1>
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
    </div>
  );
};

export default Home;
