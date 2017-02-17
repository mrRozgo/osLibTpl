import { pubGet, pubSet } from './../src/index';

describe( 'osLibTpl', () => {
    it( 'pubGet testing', () => expect(pubGet()).to.be.a('null'));
    it( 'pubSet testing', () => expect(pubSet(10)).to.equal(10) );
});