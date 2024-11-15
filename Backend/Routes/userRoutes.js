const express = require('express');
const router = express.Router();
const UsuarioController = require('../Controllers/usuarioController');
const usuarioController = new UsuarioController();

router.post('/Frontend/login', usuarioController.crearUsuario);
//todas las rutas de la api usuario
module.exports = router;
