var expect = require('./chai-expect');

describe('Customer List', function(){

    beforeEach(function(){
        browser.get('#!/customer-list');
    });

    it('should have the correct page heading', function(){
        expect(element(by.binding('$ctrl.pageHeading')).getText()).to.eventually.equal('This is the customer list');
    });

});