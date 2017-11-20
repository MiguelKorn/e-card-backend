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
        posX: {type: Number},
        posY: {type: Number}
    }]
});

mongoose.model('Card', CardSchema);