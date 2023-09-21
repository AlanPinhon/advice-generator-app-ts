import { getAdvices } from '../../src/helpers/getAdvices';

describe('test in getAdvices', () => { 

  test('should get the advice data', async () => {
    
    const split = {
      "id": "2",
      "advice": "Smile and the world smiles with you. Frown and you're on your own."
    }

    const advice = await getAdvices();
    expect(advice).toEqual(split);  

  });

});