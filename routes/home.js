const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/', ( req, res, next ) => 
{
    const viewpath = path.join(__dirname,"../views")
    res.render(viewpath+'/home/login')
})

router.get('/login', ( req, res, next ) => 
{
    const viewpath = path.join(__dirname,"../views")
    res.render(viewpath+'/layouts/layoutdefault')
})

module.exports = router;