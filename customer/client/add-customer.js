angular.module('mtCustomer')
    .component('addCustomer', {
        templateUrl: '/customer-client/add-customer.html',
        controller: function($http, $state, CustomerService) {
            var ctrl = this;

            ctrl.addCustomer = function() {
                CustomerService.addCustomer(ctrl.firstName, ctrl.lastName).then(function(status){
                    console.log(status);
                    $state.go('customerList');
                }).catch(function(error){
                    console.error(error);
                });
            }
        }
    });