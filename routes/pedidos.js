const express = require('express');
const router = express.Router();

// Supongamos que tenemos una lista de pedidos
const pedidosFicticios = [];

// Ruta para obtener todos los pedidos 
router.get('/', (req, res) => {
  res.json(pedidosFicticios);
});

// Ruta para crear un nuevo pedido 
router.post('/', (req, res) => {
  const { productos, direccion } = req.body;
  const nuevoPedido = { productos, direccion };
  pedidosFicticios.push(nuevoPedido);
  res.status(201).json({ mensaje: 'Pedido realizado con éxito' });
});

module.exports = router;
