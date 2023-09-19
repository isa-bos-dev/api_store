const express = require('express');
const router = express.Router();

// Supongamos que tenemos una lista de productos ficticios
const productosFicticios = [
  { id: 1, nombre: 'Camiseta', precio: 20 },
  { id: 2, nombre: 'Pantalones', precio: 40 },
  { id: 3, nombre: 'Sombrero', precio: 10 },
];

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
  res.json(productosFicticios);
});

module.exports = router;