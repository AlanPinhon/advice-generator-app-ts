import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { AdviceErrorMsg } from '../../src/components/AdviceErrorMsg/AdviceErrorMsg';

describe('tests in <AdviceErrorMsg />', () => {

  test('should show the initial state', () => {
    const getTipsMock = vi.fn();
    render(<AdviceErrorMsg getTips={getTipsMock}/>);
    
    expect(screen.getByText('Network request failed')).toBeTruthy();
  });
  
  test('should call the function getTips if a connection to the server cannot be established', () => {
    const getTipsMock = vi.fn();

    render(<AdviceErrorMsg getTips={getTipsMock}/>);
    
    const retryBtn = screen.getByRole('button');
    fireEvent.click(retryBtn);
    
    expect(getTipsMock).toHaveBeenCalledTimes(1);
  });

});