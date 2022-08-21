import GameSavingLoaderAsync from '../src/js/GameSavingLoaderAsync';
import read from '../src/js/reader';
import json from '../src/js/parser';

describe('GameSavingLoader', () => {
  test('should return a object', async () => {
    const caseObj = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };
    expect(GameSavingLoaderAsync.load()).resolves.toEqual(caseObj);
  });
});

describe('json function: ', () => {
  const jsonCase = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  test('should return json from arrayBufer', async () => {
    const buffer = await read();
    const jsonTest = await json(buffer);
    await expect(jsonTest).toBe(jsonCase);
  });
});
