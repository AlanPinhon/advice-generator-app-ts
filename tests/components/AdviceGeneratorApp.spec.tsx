import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../src/mocks/server';
import { AdviceGeneratorApp } from '../../src/components/AdviceGeneratorApp/AdviceGeneratorApp';

describe('tests on <AdviceGeneratorApp />', () => {

  test('should show the initial state', () => {

    render(<AdviceGeneratorApp/>);
    expect(screen.getByText('Loading Advice...'))

  });

  test('Should display an error message if the network status is different to 200', async () => {

    server.use(
      rest.get('https://api.adviceslip.com/advice', (_req,res,ctx) => {
        return res(
          ctx.status(500), ctx.json({ok: false, message: 'Network request failed'})
        )
      })
    );

    render(<AdviceGeneratorApp/>);
    
    const errorMsg = await screen.findByText('Network request failed');
    expect(errorMsg).toBeTruthy();
  });
  
  test('Should display an error message if the connection to the server fails', async () => {

    server.use(
      rest.get('https://api.adviceslip.com/advice', (_req,res) => {
        return res.networkError('Network request failed')
      }) 
    );

    render(<AdviceGeneratorApp/>);
    
    const errorMsg = await screen.findByText('Network request failed');
    expect(errorMsg).toBeTruthy();
  });

  test('should show advice', async () => {

    render(<AdviceGeneratorApp/>);
    
    const adviceId = await screen.findByText('Advice #2');
    const advice = await screen.findByText("\"Smile and the world smiles with you. Frown and you're on your own.\"");

    expect(adviceId).toBeTruthy();
    expect(advice).toBeTruthy();

  });

});