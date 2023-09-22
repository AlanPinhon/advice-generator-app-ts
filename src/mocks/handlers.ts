import { rest } from 'msw';
import mockAdviceResponse from './mock.advice.json';

export const handlers = [

  rest.get('https://api.adviceslip.com/advice', (_req,res,ctx) => {
    return res( ctx.json(mockAdviceResponse) )
  }),
];