let express = require('express')

let router = express.Router()

router.get('/', function (req,res,next) {
    res.json({
        message:"Hello! This was a string sent by a custom API!"
    })
})

module.exports = router