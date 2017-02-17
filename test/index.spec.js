var osLib = require(path.join(__dirname, '..', 'src', 'index'));

describe( 'osLibTpl', function() {
    it( 'say testing', function() {
        expect(osLib.say()).to.be.a('string');
    });
    it( 'go testing', function() {
        expect(osLib.go()).to.be.a('string');
    });
    it( 'beta testing', function() {
        expect(osLib.beta()).to.be.a('string');
    });
});