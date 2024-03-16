const Producto = require('../models/producto');

const productoController = {
    index: (req, res) => {
        const productos = Producto.obtenerTodos();
        res.render('dashboard', { productos });
    }
};

module.exports = productoController;
