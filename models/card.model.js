/**
 * Model for Cards
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const CardSchema = new Schema({
    name: {type: String},
    parts: [{
        type: {type: String, lowercase: true},
        name: {type: String, lowercase: true},
        image: {type: String},
        x: {type: Number},
        y: {type: Number}
    }]
});

mongoose.model('Card', CardSchema);