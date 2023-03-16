

describe('My first unit test', () => {
  let sut;

  beforeEach(() => {
    sut = {};
  });

  it('should be true', () => {
    // expect(sut.a).toBeTruthy();
    sut.a = false;
    sut.a = true;
    expect(sut.a).toBe(true);
  });
});
