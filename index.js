
module.exports = function (config) {

    return function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', config.allowed_origins);
        res.setHeader('Access-Control-Allow-Methods', config.allowed_methods);
        res.setHeader('Access-Control-Allow-Headers', config.allowed_headers);

        if (req.method === 'OPTIONS') {
            return res.status(200)
                    .send();
        }

        next();
    };

};
