/**
 * Model for Options
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OptionSchema = new Schema({
    type: {type: String},
    parts: [{
        name: {type: String},
        image: {type: String}
    }]
});

mongoose.model('Option', OptionSchema);