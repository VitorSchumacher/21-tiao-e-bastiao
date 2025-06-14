import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import LogoutButton from "../components/LogoutButton";
import UserMenu from "../components/UserMenu";
import ScoreGauge from "../components/ScoreGauge";
import EyeIcon from "../components/EyeIcon";

const API_BASE_URL = process.env.VITE_API_BASE_URL || "/api";

const Container = styled.div`
  padding: 2rem;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background: "#fff";
  color: #000;
`;

const Banner = styled.div`
  background: linear-gradient(135deg, #4f46e5, #6b5ce7, #8b5cf6);
  color: #fff;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  margin: -2rem -2rem 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Edu TAS Beginner", cursive;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

const Th = styled.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #d1d5db;
`;

const Td = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #d1d5db;
`;

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({});
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const name = userData.nome || "Professor";
  const token = userData.token || "";

  const toggleRow = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    fetch(`${API_BASE_URL}/professor`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("erro");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data.alunos))
          setStudents([
            ...data.alunos,

            { nome: "Alice", pontuacaoTotal: 300 },
            { nome: "Bruno", pontuacaoTotal: 450 },
            { nome: "Carla", pontuacaoTotal: 700 },
          ]);
        else setStudents([]);
      })
      .catch(() => {
        // Dados de exemplo caso a API não esteja disponível
        setStudents([
          { nome: "Alice", pontuacaoTotal: 300 },
          { nome: "Bruno", pontuacaoTotal: 450 },
          { nome: "Carla", pontuacaoTotal: 700 },
        ]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      <Banner>
        <UserMenu name={name} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <img
            src="/image/logo.png"
            alt="Logo Orienta"
            style={{ height: "100px", marginRight: "-2rem" }}
          />
          <Title style={{ flex: "unset" }}>Orienta</Title>
        </div>
      </Banner>
      {loading && (
        <div style={{ textAlign: "center", width: "100%" }}>
          <Loader />
        </div>
      )}
      {!loading && (
        <>
          <h2 style={{ marginBottom: "1rem" }}>Desempenho dos alunos</h2>
          <Table>
            <thead>
              <tr>
                <Th>Aluno</Th>
                <Th>Pontuação Média</Th>
                <Th></Th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, idx) => (
                <React.Fragment key={s.nome}>
                  <tr>
                    <Td>{s.nome}</Td>
                    <Td>
                      <ScoreGauge score={s.pontuacaoTotal} />
                    </Td>
                    <Td>
                      <button
                        onClick={() => toggleRow(idx)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                        aria-label="Ver detalhes"
                      >
                        <EyeIcon />
                      </button>
                    </Td>
                  </tr>
                  {expanded[idx] && (
                    <tr>
                      <Td colSpan="3">
                        {Array.isArray(s.questionarios) && s.questionarios.length > 0 ? (
                          <ul style={{ margin: '0.5rem 1rem' }}>
                            {s.questionarios.map((q, qIdx) => (
                              <li key={qIdx} style={{ marginBottom: '0.25rem' }}>
                                <strong>{q.descricao}:</strong> {q.score || q.pontuacao}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <em>Nenhum resultado</em>
                        )}
                      </Td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
