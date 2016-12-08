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
