const Sequence = require('../models/Sequence')
        User = require('../models/User.js');


// GET ALL
exports.index = (req, res) => {
    Sequence.find({}, (err, Sequences) => {
        if (err) res.json({ success:false, payload: err })
        res.json('index', {success: true, payload: Sequences})
    })

}

// CREATE
// exports.create = (req, res) => {
//     Sequence.create(req.body, (err, newSequence) => {
//         if (err) res.json({ success:false, payload: err })
//         res.json('new', {success: true, payload: newSequence})
//     })

// }

    exports.create = (req, res) => {
        User.findById(req.user.id, (err, user)=> {
            if (err) res.json({ success: false, err})
            user.recordings.push(req.body)
            user.save((err, user) => {
                if (err) res.json({ success: false, payload: err})
                res.json({ success: true, payload: user})
            })
        })
    }



// GET INDIVIDUAL
// exports.show = (req, res) => {
//     let { id } = req.params;
//     Sequence.findById(id, (err, Sequence) => {
//         if (err) res.json({ success:false, payload: err })
//         res.render('show', {success: true, payload: Sequence})
//     })

// }



// DELETE A RECORDING
exports.delete = (req, res) => {
    let { id } = req.user;
    User.findById(id, (err, user) => {
        if (err) res.json({ success:false, err })
        let recording = user.recordings.id(req.params.id); 
        console.log("Recording", recording)
        if(recording) {
            recording.remove();
            user.save ((err, user) => {
                if(err) res.json({ success: false, err});
                res.json({ success: true, payload: user})
            })
        }
       
    })

}