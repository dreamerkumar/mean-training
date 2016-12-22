angular.module('mtCustomer')
    .component('customerList', {
        templateUrl: '/customer-client/customer-list.html',
        controller: function(CustomerService){
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

        }
    });