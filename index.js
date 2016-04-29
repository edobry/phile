var http = require("http"),
    nconf = require("nconf"),
    register = require("mucks-register"),
    static = require("node-static");

nconf.argv().defaults({
    route: "",
    dir: "",
    app: "phile"
});

var file = new static.Server(nconf.get("dir"));

var LOG = message => console.log(message);

var startServer = port => {
    LOG(`listening on port ${port}`);
    http.createServer((req, res) => {
        LOG(`serving ${req.url}`);

        req.on("end", () => file.serve(req, res)).resume();
    }).listen(port);
};

//TODO: make registering optional
register(nconf.get("route"), nconf.get("app"), startServer);
