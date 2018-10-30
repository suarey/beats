const 
    express = require('express'),
    sequencesRoutes = express.Router(),
    Sequence = require('../controllers/sequences');
    verifyToken = require('../serverAuth').verifyToken;


    // ROUTES 
    sequencesRoutes.use(verifyToken); //PROTECTED
    sequencesRoutes.get('/', Sequence.index)
    sequencesRoutes.post('/', Sequence.create)
    // sequencesRoutes.get('/:id', Sequence.show)
    // sequencesRoutes.patch('/:id', Sequence.patch)
    sequencesRoutes.delete('/:id', Sequence.delete)

    module.exports = sequencesRoutes;