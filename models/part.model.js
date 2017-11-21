/**
 * Model for Parts
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PartSchema = new Schema({
    type: {type: String, lowercase: true},
    items: [{
        _id: Schema.Types.ObjectId,
        name: {type: String, lowercase: true},
        image: {type: String}
    }]
});

mongoose.model('Part', PartSchema);
