export async function evaluateStudent(resultData) {
  const apiKey = process.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OpenAI API key not provided");
  }

  const messages = [
    {
      role: "system",
      content:
        'Você é um avaliador educacional. Responda apenas em JSON no formato {"pontuacao": <numero>, "feedback": "texto"}. Não inclua texto fora desse JSON.',
    },
    {
      role: "user",
      content: `Você é um avaliador educacional. Responda apenas em JSON no formato {"pontuacao": <numero>, "feedback": "texto"}. Não inclua texto fora desse JSON. Resultados do aluno: ${JSON.stringify(
        resultData
      )}, a nota final é de 0 a 1000. Avalie o desempenho do aluno e forneça feedback construtivo. retorne apenas em JSON {nota: uma nota de 0 a 1000, feedback: um texto de até 500 caracteres explicando o desempenho do aluno e sugerindo melhorias, de sugestões válidas de oq estudar mais baseado nas questões.}`,
    },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4-turbo",
      messages,
    }),
  });
  console.log(
    "🚀 ~ evaluateStudent ~ response:",
    response.choices?.[0]?.message?.content
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Erro da OpenAI:", errorText);
    throw new Error("Erro ao consultar ChatGPT");
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || "";

  // Tenta extrair um JSON válido de dentro do texto da IA
  const match = content.match(/{[\s\S]*}/);

  if (match) {
    try {
      return JSON.parse(match[0]);
    } catch (error) {
      console.error("Erro ao fazer parse do JSON retornado:", error);
      return { feedback: content };
    }
  } else {
    return { feedback: content };
  }
}

export async function teacherAdvice(studentData) {
  const apiKey = process.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OpenAI API key not provided");
  }

  const messages = [
    {
      role: "system",
      content:
        "Você é um pedagogo. Responda em português em até 3 frases de como o professor pode ajudar o aluno a melhorar.",
    },
    {
      role: "user",
      content: `Dados do aluno: ${JSON.stringify(
        studentData
      )}. Gere um breve resumo sobre como o professor pode auxiliar o aluno a evoluir.`,
    },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4-turbo",
      messages,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Erro da OpenAI:", errorText);
    throw new Error("Erro ao consultar ChatGPT");
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "";
}
