describe('A summing function', function(){

    function addFunction(first, second) {
        return first + second;
    }
    
    it('should add two numbers and return the result', function(){

        expect(addFunction(2,3)).toBe(5);
    });

});