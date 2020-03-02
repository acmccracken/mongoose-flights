const Flight = require('../models/flight');


module.exports={
    create
}

function create(req, res){
    Flight.findById(req.params.id, function(err, plane){
        plane.destinations.push(req.body)
        plane.save(function(err){
            console.log(plane.destinations);
            res.redirect(`/flights/${plane._id}`)
        })
    })
}