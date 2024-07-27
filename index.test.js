const totalRemainder = require('./index.js');

describe('Kalanlar toplamı testleri', () => {
  test('[1,5,11,145,51,2] için 8 kalanı dönüyor mu?', () => {
    expect(totalRemainder([1, 5, 11, 145, 51, 2])).toBe(8);
  });

  test('[2,9,13,14] için 5 kalanı dönüyor mu?', () => {
    expect(totalRemainder([2, 9, 13, 14])).toBe(5);
  });

  test('Boş array için doğru sonucu dönüyor mu?', () => {
    expect(totalRemainder([])).toBe(0);
  });

  test('Fonksiyonun dönüş değeri number mı?', () => {
    const result = totalRemainder([2, 9, 13, 14]);
    expect(typeof result).toBe('number');
  });
});