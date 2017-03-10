angular.module('mtApp', ['ui.router', 'mtCustomer'])
    .config(["$stateProvider", function($stateProvider){
        $stateProvider
            .state('customerList',{
                url: '/customer-list',
                template: '<customer-list></customer-list>'
            })
            .state('addCustomer',{
                url: '/add-customer',
                template: '<add-customer></add-customer>'
            });

    }]);
angular.module('mtCustomer', []);
angular.module('mtCustomer')
    .component('addCustomer', {
        templateUrl: '/customer-client/add-customer.html',
        controller: ["$http", "$state", "CustomerService", function($http, $state, CustomerService) {
            var ctrl = this;

            ctrl.addCustomer = function() {
                CustomerService.addCustomer(ctrl.firstName, ctrl.lastName).then(function(status){
                    console.log(status);
                    $state.go('customerList');
                }).catch(function(error){
                    console.error(error);
                });
            };
        }]
    });
angular.module('mtCustomer')
    .component('customerList', {
        templateUrl: '/customer-client/customer-list.html',
        controller: ["CustomerService", function(CustomerService){
            var ctrl = this;
            
            ctrl.$onInit = function() {
                ctrl.pageHeading = 'This is the customer list';
                CustomerService.getCustomerList().then(function(result){
                    ctrl.customerList = result.data;
                })
                .catch(function(err){
                    console.error('An error occured', err);
               });
            };

            //returns the value of customer list
            ctrl.getCustomerList = function(){
                return ctrl.customerList;
                //console.log('I just got called. Now I should show the next page of records.');                
            };

        }]
    });
angular.module('mtCustomer')
    .service('CustomerService', ["$http", function($http){
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
    }]);
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
angular.module('mtCustomer')
    .filter('remove', function(){
        return function(list, minimumLength) {
            if(list){
                list = list.filter(function(item){
                    return item.firstName.length >= minimumLength;
                });
            }
            return list;
        };
    });
angular.module('mtCustomer')
    .directive('sample', function(){
        return {
            template: '',
            link: function(scope, element, attr){
                console.log();
                if(attr.first !== 'Vishal'){
                   element.append('<div class="alert alert-danger" role="alert">' + attr.first + '</div>');
                }
            }
        };
    });
