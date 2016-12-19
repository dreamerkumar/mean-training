describe('customerList', function(){
    var customerListComponent,
    CUSTOMER_LIST = ['a', 'b', 'c'],
    CustomerServiceMock = {
        getCustomerList: function() {
            return {
                then: function(callback) {
                    callback({data: CUSTOMER_LIST});
                    return this;
                },
                catch: function() {

                }
            };
        }
    };

    beforeEach(function(){
        module('mtCustomer');
        spyOn(CustomerServiceMock, 'getCustomerList').and.callThrough();
    });

    beforeEach(function(){
        inject(function($componentController){
            customerListComponent = $componentController('customerList', {
                CustomerService: CustomerServiceMock
            });
        });
    });

    describe('onInit', function(){
        it('should initialize the customer list ', function(){
            customerListComponent.$onInit();
            expect(customerListComponent.customerList).toBeDefined();
            expect(customerListComponent.customerList.length).toEqual(3);
            expect(CustomerServiceMock.getCustomerList).toHaveBeenCalled();
        });
    });

    describe('getCustomerList', function() {

        it('should return the customer list', function(){
            customerListComponent.customerList = CUSTOMER_LIST;
            var result = customerListComponent.getCustomerList();
            expect(result).toBeDefined();
            expect(result.length).toEqual(3);
        });
    });

    afterEach(function(){

    });

});