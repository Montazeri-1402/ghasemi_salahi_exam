const expres = require('expres');
const router = expres.Router(); 
const nb = require('../data/notebooks');

router.get('/', function (req, res, next) {
    res.send(nb);  
});
router.get('/deleteById', function (req, res, next) {
    const id = req.query.id;

    for (let i = 0; i < nb.length; i++) {
        if (nb[i].id === id) {
            nb.splice(i, 1);
        }
    }

    res.json(nb);
});
router.get('/deleteByIndex', function(req, res, next) {
    const index = req.query.index;

    nb.splice(index, 1);

    res.json(nb);
});
router.get('/editNote', function (req, res, next) {
    const id = req.query.id;
    const key = req.query.key;
    const value = req.query.value;
    
    for (let i = 0; i < nb.length; i++) {
        if(nb[i].id === id){
            nb[i].bookName = value;
        }
    }

    res.json(nb);
});
router.get('/reNote', function(req, res, next) {
    const body = req.body;
    const id = req.query.id;

    for (let i = 0; i < nb.length; i++) {
        if(nb[i].id === id){
            nb[i] = body;
        } 
    }

    res.json(nb);
});
module.exports = router;