const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('routing');
    next();
});
router.get('/', (req, res) => {
    res.render('pages/index');
});
router.get('/guestbook', (req,res) => {
    res.render('pages/guestbook');
});

module.exports = router;