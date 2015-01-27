
module.exports = function (allowed_origins, allowed_headers) {

    return function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', allowed_origins);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', allowed_headers);

        if (req.method === 'OPTIONS') {
            return res.status(200)
                    .send();
        }

        next();
    };

};
