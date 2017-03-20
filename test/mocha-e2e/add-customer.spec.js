var addCustomer = require('./add-customer-page-object');
var takeScreenshot = require('./take-screenshot');

var expect = require('./chai-expect');

var addCustomerPageObject = new addCustomer();

describe('Add Page', function(){

    beforeEach(function(){
        browser.get('#!/add-customer');
    });

    it('should be able to save a new customer', function(){
        
        addCustomerPageObject.enterFirstName('Ravindra');
        addCustomerPageObject.enterLastName('Jadeja');
        addCustomerPageObject.clickOnAddCustomerButton();

        expect(browser.getCurrentUrl()).to.eventually.match(/app\/\#\!\/customer-list/);

        var customerListRepeater = by.repeater('customer in $ctrl.customerList | remove:1');

        expect(element(customerListRepeater
        .row(8)
        .column('customer.firstName'))
        .getText()).to.eventually.equal('Ravindra');

        expect(element(customerListRepeater
        .row(8)
        .column('customer.lastName'))
        .getText()).to.eventually.equal('Jadeja');
    });

    afterEach(function(){
        takeScreenshot();
    });

});