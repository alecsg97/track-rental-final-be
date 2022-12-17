const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const serviceSchema = new Schema({
    // image: {
    //     type: String
    // },
    make: {
        type: String
    },
    model: {
        type: String
    },
    typeOfDriving: {
        type: String
    },
    power: { 
        type: Number,
    },   
}, {
    timestamps: true
})

const Service = model('Service', serviceSchema);
module.exports = Service;