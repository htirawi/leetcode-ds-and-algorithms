const boatsToSavePeople = require('./boats-to-save-people');

test('find the minimum number of boats to carry every given person', () => {
  const people1 = [1, 2];
  const limit1 = 3;
  expect(boatsToSavePeople(people1, limit1)).toBe(1);

  const people2 = [3, 2, 2, 1];
  const limit2 = 3;
  expect(boatsToSavePeople(people2, limit2)).toBe(3);

  const people3 = [3, 5, 3, 4];
  const limit3 = 5;
  expect(boatsToSavePeople(people3, limit3)).toBe(4);
});
