import { WordsLimiterPipe } from './words-limiter.pipe';

describe('WordsLimiterPipe', () => {
  it('create an instance', () => {
    const pipe = new WordsLimiterPipe();
    expect(pipe).toBeTruthy();
  });
});
