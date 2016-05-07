var nconf = require("nconf"),
    phile = require("./index");

nconf.argv().defaults({
    route: "",
    dir: "",
    app: "phile"
});

phile(
    nconf.get("dir"),
    nconf.get("route"),
    nconf.get("app")
);
