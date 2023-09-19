const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Importa las rutas
const productosRouter = require('./routes/productos');
const carritoRouter = require('./routes/carrito');
const pedidosRouter = require('./routes/pedidos');

// Usa las rutas
app.use('/productos', productosRouter);
app.use('/carrito', carritoRouter);
app.use('/pedidos', pedidosRouter);

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});