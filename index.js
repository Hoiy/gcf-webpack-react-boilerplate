var path = require('path');
var fs = require('fs');

exports.index = function index(req, res) {
    switch(req.url) {
        case '':  // for production
        case '/': // for local dev emulation
            var index = path.join(path.dirname(fs.realpathSync(__filename)), './index.html');
            res.sendFile(index);
            break;

        case '/js/app.js':
            var js = path.join(path.dirname(fs.realpathSync(__filename)), './js/app.js');
            res.sendFile(js);
            break;

        default:
            res.send(400);
            return;
    }
};
