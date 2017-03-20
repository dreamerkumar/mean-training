var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var handleToExpressApp = require('../../index');

chai.use(chaiHttp);

describe('GET customers api', function(){

    it('should give me a list of customers', function(done){

        chai.request(handleToExpressApp)
            .get('/customer')
            .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.above(10); //temporary fix till a test environment is created
                done();
            });
    });

});