import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { rest } from 'msw';
import { server } from '../../src/mocks/server';
import { AdviceErrorMsg } from '../../src/components/AdviceErrorMsg/AdviceErrorMsg';

const getTipsMock = vi.fn();

describe('tests in <AdviceErrorMsg />', () => {

  test('should show the initial state', () => {
    render(<AdviceErrorMsg getTips={getTipsMock}/>);
    
    expect(screen.getByText('Network request failed')).toBeTruthy();
  });
  
  test('should call the function getTips if a connection to the server cannot be established', () => {

    const getTipsMock = vi.fn();

    server.use(
      rest.get('https://api.adviceslip.com/advice', (_req,res,ctx) => {
        return res(
          ctx.status(500), ctx.json({ok: false, message: 'Network request failed'})
        )
      })
    );

    render(<AdviceErrorMsg getTips={getTipsMock}/>);
    
    const retryBtn = screen.getByRole('button');
    fireEvent.click(retryBtn);
    
    expect(getTipsMock).toHaveBeenCalledTimes(1);

  });

  test('should call the function getTips if the network status is ok',  () => {

    const getTipsMock = vi.fn();

    render(<AdviceErrorMsg getTips={getTipsMock}/>);

    const retryBtn = screen.getByRole('button');
    fireEvent.click(retryBtn);
    
    expect(getTipsMock).toHaveBeenCalledTimes(1);
    
  });

});