const { test, expect } = require('@playwright/test');

test('My first test', async function () {
  expect(12).toBe(12);
});

test('My second test', async () => {
  expect(100).toBe(101);
});
