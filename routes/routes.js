var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.render('pages/uhome');
});


router.get('/login', (req,res)=>{
    res.render('pages/login');
});

router.post('/login', (req,res)=>{
    res.status(200).json({body:req.body})
});


router.get('/uhome', (req,res)=>{
    res.render('pages/uhome');
});


router.get('/ahome', (req,res)=>{
    res.render('pages/ahome');
});


router.get('/rhome', (req,res)=>{
    res.render('pages/rhome');
});

router.get('/ualbums', (req,res)=>{
    res.render('pages/ualbums');
});
router.get('/aalbums', (req,res)=>{
    res.render('pages/aalbums');
});

router.get('/uabout', (req,res)=>{
    res.render('pages/uabout');
});

router.get('/uproducta', (req,res)=>{
    res.render('pages//uproducta');
});

router.get('/uproductb', (req,res)=>{
    res.render('pages//uproductb');
});
router.get('/uproductc', (req,res)=>{
    res.render('pages//uproductc');
});
router.get('/rplaylist', (req,res)=>{
    res.render('pages//rplaylist');
});
router.get('/aplaylist', (req,res)=>{
    res.render('pages//aplaylist');
});

router.get('/rprofile', (req,res)=>{
    res.render('pages//rprofile');
});
router.get('/aprofile', (req,res)=>{
    res.render('pages//aprofile');
});
router.get('/productform', (req,res)=>{
    res.render('pages//productform');
});
module.exports = router;