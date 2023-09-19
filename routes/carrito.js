const express = require('express');
const router = express.Router();

// Supongamos que tenemos un carrito de compras ficticio
const carritoDeCompras = [];

// Ruta para obtener el contenido del carrito de compras ficticio
router.get('/', (req, res) => {
  res.json(carritoDeCompras);
});

// Ruta para agregar un producto al carrito de compras ficticio
router.post('/', (req, res) => {
  const { productId, cantidad } = req.body;
  const producto = productosFicticios.find((p) => p.id === productId);

  if (!producto) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' });
  }

  carritoDeCompras.push({ producto, cantidad });
  res.status(201).json({ mensaje: 'Producto agregado al carrito' });
});

module.exports = router;
