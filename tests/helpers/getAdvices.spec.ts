import { getAdvices } from '../../src/helpers/getAdvices';
import { server } from '../../src/mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close())

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