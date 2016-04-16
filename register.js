var http = require("http"),
    request = require("request");

var LOG = message => console.log(message);

var register = path => {
    LOG("registering...");
    request.post({
        url: `http://localhost:1999/${path}`,
        body: "static"
    }, (err, res, body) => startServer(body));
};

var startServer = port => {
    LOG(`listening on port ${port}`);
    http.createServer((req, res) => {
        LOG("received request");

        var body = "";
        req.on("data", (chunk) => body += chunk);
        req.on("end", () => res.end(body));
    }).listen(port);
};

module.exports = register;
