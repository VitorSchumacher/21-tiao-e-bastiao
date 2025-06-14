import { teacherAdvice } from '../services/gpt';

describe('teacherAdvice', () => {
  beforeEach(() => {
    globalThis.fetch = jest.fn();
    process.env.VITE_OPENAI_API_KEY = 'k';
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('returns advice text from OpenAI', async () => {
    const responseBody = {
      choices: [
        { message: { content: 'ajude o aluno com matemática' } },
      ],
    };
    globalThis.fetch.mockResolvedValue({ ok: true, json: async () => responseBody });

    const result = await teacherAdvice({ nome: 'Bob' });

    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://api.openai.com/v1/chat/completions',
      expect.objectContaining({ method: 'POST' })
    );
    expect(result).toBe('ajude o aluno com matemática');
  });
});
