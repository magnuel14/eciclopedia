var express = require('express');
var router = express.Router();
//vizualizar paginas de cuenta
var visucontrol = require('../controladores/vi_frag');
var visu = new visucontrol();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Tu enciclopedia web',
        fragmentos: 'Principal/principal'
    });
});
//cuenta
//ver login
router.get('/login', visu.verLogin);
//ver register
router.get('/register', visu.verRegister);
//ver contraseña olvidada
router.get('/forgtP', visu.verForgotPassword);



module.exports = router;