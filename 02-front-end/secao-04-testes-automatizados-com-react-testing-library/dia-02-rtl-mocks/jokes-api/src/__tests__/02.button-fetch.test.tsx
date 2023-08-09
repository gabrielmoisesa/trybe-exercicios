import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { vi } from "vitest";
import App from "../App";

const MOCK_JOKES = [
  {
    id: 'xcFBQClq4wc',
    joke: 'A butcher accidentally backed into his meat grinder and got a little behind in his work that day.'
  },
  {
    id: 'LBdUvcFB5h',
    joke: 'Two peanuts were walking down the street. One was a salted'
  }
]

describe('Testando o fetch do botão "New joke"', () => {
  const MOCK_RESPONSE1 = {
    ok: true,
    status: 200,
    json: async () => MOCK_JOKES[0],
  } as Response;

  const mockFetch1 = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE1);

  it('ao renderizar a página, uma piada é renderizada', async () => {
    
    render(<App />);
    const renderedJoke = await screen.findByText(MOCK_JOKES[0].joke);
    expect(renderedJoke).toBeInTheDocument();
  })

  it('a função fetch foi chamada uma vez', async () => {
    expect(mockFetch1).toHaveBeenCalledTimes(1);
  })

  it('ao clicar no botão “New joke”, a piada é alterada e exibida na tela', async () => {
    render(<App />)
    const MOCK_RESPONSE2 = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKES[1],
    } as Response;
  
    const mockFetch2 = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE2);

    const newJokeBtn = screen.getByRole('button', { name: /new joke/i })
    await userEvent.click(newJokeBtn);

    const secondRenderedJoke = await screen.findByText(MOCK_JOKES[1].joke)
    expect(secondRenderedJoke).toBeInTheDocument();
    expect(mockFetch2).toHaveBeenCalledTimes(1);
  })
})