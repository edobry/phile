var http = require("http"),
    nconf = require("nconf"),
    register = require("mucks-register"),
    static = require("node-static");


var LOG = message => console.log(message);

var startServer = file => port => {
    LOG(`listening on port ${port}`);
    http.createServer((req, res) => {
        LOG(`serving ${req.url}`);

        req.on("end", () => file.serve(req, res)).resume();
    }).listen(port);
};

module.exports = (dir, route, app) => {
    var file = new static.Server(dir);

    //TODO: make registering optional
    register(route, app, startServer(file));
};
