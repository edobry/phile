var nconf = require("nconf"),

    register = require("./register");

nconf.argv();

register(nconf.get("path"));
