var assert = require('assert');
var should = require('should');

describe('A given array', function(){
    it('should return the index of an array', function(){
        var array = [11,22,33];
        var result = array.indexOf(11);
        assert.equal(0, result)
    });

    it('this test should pass when implemented');
});