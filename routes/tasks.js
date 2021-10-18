const express = require('express');
const router= express.Router();

//import controllers here

router.route('/').get((req, res) => {
    res.send('all items')
})


module.exports = router;