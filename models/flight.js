const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema  = new Schema({
    airline: {
        type: String,
        enum: ["American", "Frontier", "United"]
    },
    flightNum: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().getFullYear() + 1;
        }
    }
});