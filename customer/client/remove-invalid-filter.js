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