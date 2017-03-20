var expect = require('./chai-expect');

describe('Homepage', function(){

    beforeEach(function(){
        browser.get('#');
    });

    it('should have the correct title', function(){
        expect(browser.getTitle()).to.eventually.equal('web application');
    });

    it('should have the correct page heading', function(){
        expect(element(by.tagName('h1')).getText()).to.eventually.equal('Our MEAN Application');
    });

});