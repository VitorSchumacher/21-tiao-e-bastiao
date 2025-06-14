import React from "react";
import Button from "../components/Button";
import LogoutButton from "../components/LogoutButton";

const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bem-vindo ao CodeRace</h1>
      <p>
        Nesta página você encontrará informações sobre o projeto e poderá
        acessar os formulários disponíveis para preenchimento.
      </p>
      <ul>
        <li>Formulário de exemplo 1</li>
        <li>Formulário de exemplo 2</li>
      </ul>
      <Button>Acessar Formulários</Button>
      <div style={{ marginTop: "1rem" }}>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Home;
