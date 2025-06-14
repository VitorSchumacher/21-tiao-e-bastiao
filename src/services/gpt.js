export async function evaluateStudent(resultData) {
  const apiKey = process.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OpenAI API key not provided');
  }

  const messages = [
    {
      role: 'system',
      content:
        'Você é um avaliador educacional. Responda apenas em JSON no formato {"pontuacao": <numero>, "feedback": "texto"}.',
    },
    {
      role: 'user',
      content: `Resultados do aluno: ${JSON.stringify(resultData)}`,
    },
  ];

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model: 'gpt-3.5-turbo', messages }),
  });

  if (!response.ok) {
    throw new Error('Erro ao consultar ChatGPT');
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || '';
  try {
    return JSON.parse(content);
  } catch {
    return { feedback: content };
  }
}

