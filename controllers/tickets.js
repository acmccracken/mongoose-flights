const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    createTicket,
}

function newTicket(req, res) {
    res.render('tickets/new', {plane:req.params.id});
}

function createTicket(req, res) {
    console.log(req.params.id)
    req.body.flight=req.params.id;
    Ticket.create(req.body, function(err, tickets) {
        console.log(req.body)
        res.redirect(`/flights/${req.params.id}`)
    })

    // ticket.save((err) => {
    // if(err){
    //     console.log(err);
    //     return res.redirect(`/tickets/${req.params.id}/new`);
    // } 
    // console.log(ticket);
    // res.redirect(`/flights/${req.params.id}`);
    // });
    
}