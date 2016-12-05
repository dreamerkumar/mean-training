angular.module('mtCustomer', [])
    .component('customerList', {
        templateUrl: '/customer-client/customer-list.html',
        controller: function($http){
            var ctrl = this;
            
            $http.get('/customer').then(function(result){
                ctrl.customerList = result.data;
            })
            .catch(function(err){
                console.error('An error occured', err);
            });

        }
    });