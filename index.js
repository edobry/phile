const http = require("http"),

    nconf = require("nconf"),
    static = require("node-static"),

    register = require("mucks-register");

const LOG = message => console.log(message);

const startServer = file => port => {
    LOG(`listening on port ${port}`);

    http.createServer((req, res) => {
        LOG(`serving ${req.url}`);

        req.on("end", () =>
            file.serve(req, res)
        ).resume();
    }).listen(port);
};

module.exports = (dir, route, appName) => {
    const file = new static.Server(dir);

    //TODO: make registering optional
    return register(route, appName)
        .then(startServer(file));
};
