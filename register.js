var request = require("request");

var LOG = message => console.log(message);

module.exports = (path, cb) => {
    LOG("registering...");
    request.post({
        url: `http://localhost:1999/${path}`,
        body: "static"
    }, (err, res, body) => {
        if(err)
            throw new Error(err);

        cb(body);
    });
};
