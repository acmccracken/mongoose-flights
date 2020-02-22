const Flight = require('../models/flight');

module.exports = {

};

function index(req, res) {
    Flight.find({}, (err, flights) => {
        if(err) return next(err);
        res.render('flights/index', {flights});
    });
}