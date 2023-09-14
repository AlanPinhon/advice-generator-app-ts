export const getAdvices = async () => {
  const url = 'https://api.adviceslip.com/advice';

  const response = await fetch(url);
  const data = await response.json();

  const {id, advice} = data.slip;

  console.log(`id: ${id}, advice: ${advice}`)
  
};