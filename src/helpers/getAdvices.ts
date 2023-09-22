import { Advice, AdviceResponseBody } from '../types/AdviceTypes';

export const getAdvices = async (): Promise<Advice> => {
  const url = 'https://api.adviceslip.com/advice';

  const response = await fetch(url);
  const data:AdviceResponseBody = await response.json();

  if(!response.ok) throw data;

  return { ...data.slip }  
};