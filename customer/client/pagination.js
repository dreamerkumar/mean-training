angular.module('mtCustomer')
    .component('pagination', {
        templateUrl: '/customer-client/pagination.html',
        bindings: {
            recordLength: '@',
            firstEntry: '=',
            parentFunction: '&'
        },
        controller: function(){
            var ctrl = this;

            ctrl.next = function() {
                ctrl.firstEntry = 'Something else';
                ctrl.parentFunction();
            };

        }

    });