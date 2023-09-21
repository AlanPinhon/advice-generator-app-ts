import React from 'react';
import {render, screen} from '@testing-library/react';
import { server } from '../../src/mocks/server';
import { rest } from 'msw';
import { AdviceGeneratorApp } from '../../src/components/AdviceGeneratorApp/AdviceGeneratorApp';


describe('tests on <AdviceGeneratorApp />', () => {

  test('should show the initial state', () => {

    render(<AdviceGeneratorApp/>);
    expect(screen.getByText('Loading Advice...'))

  });

  test('Should display an error message if the connection to the server fails', async () => {

    server.use(
      rest.get('https://api.adviceslip.com/advice', (_req,res) => {
        return res.networkError('Network request failed')
      })
    )

    render(<AdviceGeneratorApp/>);
    await screen.findByText('Network request failed');

    const errorMsg = screen.getByText('Network request failed');
    expect(errorMsg).toBeTruthy();
  });

});