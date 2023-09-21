import { rest } from 'msw';

export const handlers = [

  rest.get('https://api.adviceslip.com/advice', (_req,res,ctx) => {
    return res(
      ctx.json({
        "slip": {
          "id": "2",
          "advice": "Smile and the world smiles with you. Frown and you're on your own."
        }
      })
    )
  }),
];