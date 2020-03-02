const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, plane){
        res.render('flights/show', {plane})
    })
}


function index(req, res) {
    Flight.find({}, (err, flights) => {
        if(err) return next(err);
        res.render('flights/index', {flights});
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    console.log('create function?')
    const flight = new Flight(req.body);
    flight.save((err) => {
    if(err){
        console.log(err);
        return res.redirect('flights/new');
    } 
    res.redirect('/flights');
    });
}