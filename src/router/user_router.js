const express = require('express');

const router = express.Router();

router.get('/demo',(req, res)=>{
    res.json({
        message:'from router demo'
    })
})

module.exports = router;