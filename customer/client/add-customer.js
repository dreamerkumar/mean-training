angular.module('mtCustomer')
    .component('addCustomer', {
        templateUrl: '/customer-client/add-customer.html',
        controller: function($http, $state) {
            var ctrl = this;

            ctrl.addCustomer = function() {
                $http.post('/customer', {
                    firstName: ctrl.firstName,
                    lastName: ctrl.lastName,
                }).then(function(status){
                    console.log(status);
                    $state.go('customerList');
                }).catch(function(error){
                    console.error(error);
                });
            }
        }
    });