import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import UserMenu from "../components/UserMenu";
import Loader from "../components/Loader";
import { evaluateStudent } from "../services/gpt";

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
  justify-content: space-between;
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

const QuestionWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Questionario = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const name = userData.nome || "Aluno";
  const token = userData.token || "";

  useEffect(() => {
    fetch(`${API_BASE_URL}/questionario`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar question\u00e1rio");
        return res.json();
      })
      .then((data) => {
        const qs =
          data.perguntas || data.questoes || data.questions || data || [];
        setQuestions(Array.isArray(qs) ? qs : []);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao carregar question\u00e1rio");
        setLoading(false);
      });
  }, []);

  const handleChange = (qIndex, value) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const respostas = questions
        .map((q, index) => ({
          slug: q.slug || q.id || index,
          letraEscolhida: answers[index],
        }))
        .filter((r) => r.letraEscolhida !== undefined);
      const payload = { respostas };
      const response = await fetch(`${API_BASE_URL}/questionario/responder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Erro ao enviar respostas");
      }
      const resultData = await response.json();
      console.log("Respostas enviadas com sucesso");
      try {
        const evalData = await evaluateStudent(resultData);
        const score = evalData.pontuacao ?? "-";
        setFeedback(`Pontuação: ${score} - ${evalData.feedback}`);
        console.log("🚀 ~ handleSubmit ~ feedback:", feedback);
      } catch (gptErr) {
        console.error(gptErr);
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar respostas");
    }
    setSubmitting(false);
  };

  return (
    <Container>
      <Banner>
        <UserMenu name={name} />
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            src="/image/logo.png"
            alt="Logo Orienta"
            style={{ height: "100px", marginRight: "-2rem" }}
          />
          <Title style={{ flex: "unset" }}>Orienta</Title>
        </div>
      </Banner>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Questionário de Lógica
          </h1>
          {submitting && <Loader />}
          {!submitting && !feedback && (
            <form
              onSubmit={handleSubmit}
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              {questions.map((q, index) => (
                <QuestionWrapper key={q.id || index}>
                  <p>{q.enunciado || q.pergunta || q.titulo}</p>
                  <Options>
                    {(q.opcoes || q.alternativas || []).map((opt, idx) => {
                      const value = opt.letra ?? idx;
                      const label = opt.texto || opt;
                      return (
                        <label
                          key={value}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                          }}
                        >
                          <input
                            type="radio"
                            name={`q-${index}`}
                            value={value}
                            checked={answers[index] === value}
                            onChange={() => handleChange(index, value)}
                          />
                          {label}
                        </label>
                      );
                    })}
                  </Options>
                </QuestionWrapper>
              ))}
              {questions.length > 0 && (
                <Button type="submit" style={{ marginTop: "1rem" }}>
                  Enviar
                </Button>
              )}
            </form>
          )}
          {!submitting && feedback && (
            <p style={{ marginTop: "2rem", whiteSpace: "pre-line" }}>
              {feedback}
            </p>
          )}
        </div>
      )}
    </Container>
  );
};

export default Questionario;
