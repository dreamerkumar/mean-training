angular.module('mtCustomer')
    .service('CustomerService', function($http){
        var service = this;

        service.getCustomerList = function() {
            return $http.get('/customer');
        };

        service.addCustomer = function(firstName, lastName) {
            return $http.post('/customer', {
                firstName: firstName,
                lastName: lastName,
            });
        };
    });