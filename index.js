var http = require("http"),
    nconf = require("nconf"),
    register = require("mucks-register");

nconf.argv().defaults({
    path: "",
    app: "phile"
});

var LOG = message => console.log(message);

var startServer = port => {
    LOG(`listening on port ${port}`);
    http.createServer((req, res) => {
        LOG("received request");

        var body = "";
        req.on("data", (chunk) => body += chunk);
        req.on("end", () => res.end(body));
    }).listen(port);
};

register(nconf.get("path"), nconf.get("app"), startServer);
