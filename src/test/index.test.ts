// teste libary
const sum = (a: number, b: number): number => a + b

test('sum', () => {
  expect(sum(1, 2)).toBe(3)
})
