import React from "react";
import Button from "../components/Button";
import LogoutButton from "../components/LogoutButton";

const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Home</h1>
      <Button>Exemplo de botão</Button>
      <LogoutButton />
    </div>
  );
};

export default Home;
