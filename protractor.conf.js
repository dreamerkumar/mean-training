exports.config = {
    multipleCapabilities: [{
        name: 'Testing in Chrome',
        browserName: 'chrome'
    }],
    specs: [
        './test/e2e/**/*.spec.js'
    ],
    baseUrl: 'http://localhost:3000/app',

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub'
};