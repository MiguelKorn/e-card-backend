const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({

});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;