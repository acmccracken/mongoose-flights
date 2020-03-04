const express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get("/:id/new", ticketsCtrl.new);

router.post("/:id/tickets", ticketsCtrl.createTicket);




module.exports = router;