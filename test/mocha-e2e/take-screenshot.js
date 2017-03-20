var fs = require('fs');

module.exports = function() {
    browser.takeScreenshot().then(function(png){
        var stream = fs.createWriteStream('screenshots/a.png');
        stream.write(new Buffer(png, 'base64'));
        stream.end();
    });
};

