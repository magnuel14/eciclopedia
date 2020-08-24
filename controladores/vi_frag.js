'use strict';

class vi_frag {

    verLogin(req, res) {
        res.render('index', {
            title: 'Bienvenido de nuevo!',
            fragmentos: "cuenta/login"

        });
    }
    verRegister(req, res) {
        res.render('index', {
            title: 'Resgistre su cuenta',
            fragmentos: "cuenta/register"

        });
    }
    verForgotPassword(req, res) {
        res.render('index', {
            title: 'Problemas con su contraseña',
            fragmentos: "cuenta/forget"

        });
    }


}
module.exports = vi_frag;