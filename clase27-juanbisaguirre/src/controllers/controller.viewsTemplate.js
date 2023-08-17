const {Router} = require('express')
const publicAccess = require('../middlewares/publicAccess.middleware')
const privateAccess = require('../middlewares/privateAccess.middleware')

const router = Router();

router.get('/api/signup', publicAccess, (req,res)=>{
    res.render('signup.handlebars')
})

router.get('/api/login', publicAccess, (req,res)=>{
    res.render('login.handlebars')
})

router.get('/', privateAccess, (req,res)=>{
    res.redirect('/api/products')
})

module.exports = router