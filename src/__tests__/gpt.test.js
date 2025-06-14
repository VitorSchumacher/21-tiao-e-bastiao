import { evaluateStudent } from '../services/gpt';

describe('evaluateStudent', () => {
  beforeEach(() => {
    globalThis.fetch = jest.fn();
    process.env.VITE_OPENAI_API_KEY = 'k';
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('sends data to OpenAI and parses response', async () => {
    const responseBody = {
      choices: [
        { message: { content: '{"pontuacao":800,"feedback":"bom"}' } },
      ],
    };
    globalThis.fetch.mockResolvedValue({ ok: true, json: async () => responseBody });

    const result = await evaluateStudent({ correto: 10, total: 12 });

    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://api.openai.com/v1/chat/completions',
      expect.objectContaining({ method: 'POST' })
    );
    expect(result).toEqual({ pontuacao: 800, feedback: 'bom' });
  });
});

