const express = require('express');
const router = express.Router();
const UsuariosDAO = require('../modules/dao/UsersDAO');
var daoUsuarios = new UsuariosDAO();
const path = require('path');

router.get('/getAll', function (req, res) {
    daoUsuarios.getUsuarios((err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/get', function (req, res) {
    var id_user = req.body.id_user;
    daoUsuarios.get('id_user=?', [id_user], (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});


router.post('/getName', function (req, res) {
    var id_user = req.body.id_user;
    daoUsuarios.getNameUser(id_user, (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});


router.post('/getEmail', function (req, res) {
    var Usuario = req.body.Usuario;
    daoUsuarios.getEmail(Usuario, (err, row, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(row);
        }
    });
});

router.post('/insert', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;

    daoUsuarios.insert({
        'name': name,
        'email': email,

    }, (err, result, fields) => {

        console.log(result, err)
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});


router.post('/update', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;

    //Se agrega los campos a actualizar, la condicion sql de actualizacion y los valores para la condicion.
    daoUsuarios.update(
        {
            'name': name,
        'email': email,
        },
        'id_user=?', [id_user], (err, result, fields) => {
            console.log(result, err)
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        })
});

router.post('/delete', function (req, res) {
    var id_user = req.body.id_user;

    //Se agrega la condicion sql de borrado y los valores para la condicion.
    daoUsuarios.delete('id_user=?', [id_user], (err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

router.post('/cont', function (req, res) {
    daoUsuarios.stats((err, result, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        };
    });
});

module.exports = router;