import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
  it('should display weak if strength is 5', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  });
  it('should display strong if strength is 15', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(15)).toEqual('15 (strong)');
  });
  it('should display unbelievable if strength is 25', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(25)).toEqual('25 (unbelievable)');
  });
})