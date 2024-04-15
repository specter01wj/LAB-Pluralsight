describe('My first unit test', function () {
    var sut;
    beforeEach(function () {
        sut = {};
    });
    it('should be true', function () {
        // expect(sut.a).toBeTruthy();
        sut.a = false;
        sut.a = true;
        expect(sut.a).toBe(true);
    });
});
