import cipher from './cipher';

it('encrypts(example 1)', () => {
  expect(cipher.encrypt('hello nemo', 3)).toBe('khoor qhpr');
});

it('encrypts(punctuation)', () => {
  expect(cipher.encrypt('attack at dawn ! ', 1)).toBe('buubdl bu ebxo ! ');
});

it('decrypts(example 1)', () => {
  expect(cipher.encrypt('attack at dawn', 1)).toBe('buubdl bu ebxo');
});

it('decrypts(punctuation)', () => {
  expect(cipher.decrypt('eqtiku ctg cyguqog ! ', 2)).toBe('corgis are awesome ! ');
});
