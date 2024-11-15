const express = require('express');
const router = express.Router();
const path = require('path');


// Ruta para servir los archivos estáticos de CSS desde la carpeta 'frontend/css'
router.use('/css', express.static(path.join(__dirname, '../../Frontend/css')));

// Ruta para servir los archivos estáticos de imágenes desde la carpeta 'frontend/imagenes'
router.use('/imagenes', express.static(path.join(__dirname, '../../Frontend/imagenes')));


// Ruta para servir el archivo home.html desde 'frontend/view'
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/home.html'));
});

// Ruta para servir el archivo login.html desde 'frontend/login'
router.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Frontend/html/login.html'));
});

// Ruta para servir el archivo lugares.html desde 'frontend/lugares'
router.get('/lugares.html', (req, res) => {
   res.sendFile(path.join(__dirname, '../../Frontend/html/lugares.html'));
});
  

// Ruta para servir el archivo registro.html desde 'frontend/registro'
router.get('/registro.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Frontend/html/registro.html'));
});


module.exports = router;
