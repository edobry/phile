#!/usr/local/node
const nconf = require("nconf"),

    phile = require("./index");

nconf.argv().defaults({
    dir: "",
    route: "",
    app: "phile"
});

phile(
    nconf.get("dir"),
    nconf.get("route"),
    nconf.get("app")
);
