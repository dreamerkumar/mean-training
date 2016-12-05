angular.module('mtCustomer')
    .component('customerList', {
        templateUrl: '/customer-client/customer-list.html',
        controller: function($http, CustomerService){
            var ctrl = this;
            
            CustomerService.getCustomerList().then(function(result){
                ctrl.customerList = result.data;
            })
            .catch(function(err){
                console.error('An error occured', err);
            });

        }
    });