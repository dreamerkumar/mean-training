describe('Customer List', function(){

    beforeEach(function(){
        browser.get('#!/customer-list');
    });

    it('should have the correct page heading', function(){
        expect(element(by.binding('$ctrl.pageHeading')).getText()).toBe('This is the customer list');
    });

});