const Router = require('express');
const router = Router();

const index = (req, res) => {
    res.render("homePage");
}


router.get('/', index);


module.exports = router;