module.exports = function() {
    this.firstNameInput = element(by.model('$ctrl.firstName'));
    this.lastNameInput = element(by.model('$ctrl.lastName'));
    this.addCustomerButton = element(by.tagName('button'));

    this.enterFirstName = function(value) {
        this.firstNameInput.sendKeys(value);
    };

    this.enterLastName = function(value) {
        this.lastNameInput.sendKeys(value);
    };

    this.clickOnAddCustomerButton = function() {
        this.addCustomerButton.click();
    };

};