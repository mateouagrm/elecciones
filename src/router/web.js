const express = require('express');
const router = express.Router();

/*=========================================
CONTROLLER
==========================================*/
const estudianteController = require('../controller/estudianteController');


/*========================================
RUTAS
==========================================*/
router.post('/insertUsersCliente', estudianteController.registrar);
module.exports = router;