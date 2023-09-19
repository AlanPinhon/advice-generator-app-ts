import { getAdvices } from '../../src/helpers/getAdvices';

describe('test in getAdvices', () => { 

  test('should first', async () => { 

    const advice = await getAdvices();

    expect(advice).toEqual({
      id: expect.any(Number),
      advice: expect.any(String)
    });

  });

})