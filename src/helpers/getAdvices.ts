import { Advice, AdviceData } from '../types/index.ts';

export const getAdvices = async (): Promise<Advice> => {
  const url = 'https://api.adviceslip.com/advice';

  const response = await fetch(url);
  const data:AdviceData = await response.json();

  const {id, advice} = data.slip;

  return{
    id,
    advice
  }
  
};