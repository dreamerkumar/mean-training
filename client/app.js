angular.module('mtApp', ['ui.router', 'mtCustomer'])
    .config(function($stateProvider){
        $stateProvider
            .state('customerList',{
                url: '/customer-list',
                template: '<customer-list></customer-list>'
            })
            .state('addCustomer',{
                url: '/add-customer',
                template: '<add-customer></add-customer>'
            });

    });