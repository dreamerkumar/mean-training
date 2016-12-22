describe('Homepage', function(){

    beforeEach(function(){
        browser.get('#');
    });

    it('should have the correct title', function(){
        expect(browser.getTitle()).toBe('web application');
    });

    it('should have the correct page heading', function(){
        expect(element(by.tagName('h1')).getText()).toBe('Our MEAN Application');
    });

});