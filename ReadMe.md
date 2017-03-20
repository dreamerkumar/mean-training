To run mocha api tests
Kill the running node application
mocha test/mocha-api-tests

To run the mocha unit tests
mocha test/mocha-unit-tests

To run the protractor tests with mocha
Start mongo service using mongod --dbpath [folder]
Start application -> node index
webdriver-manager start
protractor protrator-with-mocha.conf.js

To run unit tests with karma
karma start

To run e2e tests with only protractor (without mocha)
Start mongo service using mongod --dbpath [folder]
Start application -> node index
webdriver-manager start
protractor