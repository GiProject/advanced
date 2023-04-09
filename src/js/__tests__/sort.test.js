import orderByProps from '../sort';

test('sort', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  let result = orderByProps(obj, ['name', 'defence']);
  expect(result)
    .toEqual([{
      key: 'name',
      value: 'мечник',
    }, {
      key: 'defence',
      value: 40,
    }, {
      key: 'attack',
      value: 80,
    }, {
      key: 'health',
      value: 10,
    }, {
      key: 'level',
      value: 2,
    }]);
});
