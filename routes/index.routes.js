const Router = require('express');
const router = Router();

const index = (req, res) => {
    res.render("homePage");
}


router.get('/', function(req,res) {
    res.render("index");
});


module.exports = router;