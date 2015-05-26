'use strict';

module.exports = function (config) {
    config = config || {};

    return function (req, res, next) {

        if (config.allowed_origins || config.allowed_origins_list) {
            if (config.allowed_origins_list) {
                for (var i=0; i<config.allowed_origins_list.length; i++) {
                    if (req.headers.origin && req.headers.origin.match(config.allowed_origins_list[i])) {
                        res.setHeader('Access-Control-Allow-Credentials', config.allow_credentials);
                        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
                        break;
                    }
                }

                if (i==config.allowed_origins_list.length || !req.headers.origin) {
                    res.setHeader('Access-Control-Allow-Origin', config.allowed_origins);
                }
            } else {
                res.setHeader('Access-Control-Allow-Origin', config.allowed_origins);
            }
        }

        if (config.allowed_methods) {
            res.setHeader('Access-Control-Allow-Methods', config.allowed_methods);
        }

        if (config.allowed_headers) {
            res.setHeader('Access-Control-Allow-Headers', config.allowed_headers);
        }

        if (req.method === 'OPTIONS') {
            return res.status(200)
                    .send();
        }

        next();
    };

};
