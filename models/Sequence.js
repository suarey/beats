const mongoose = require('mongoose');


const SequenceSchema = mongoose.Schema({
    beats: [String]
});

const Sequence = mongoose.model('Sequence', SequenceSchema);

module.exports = Sequence;