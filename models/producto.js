const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../productos.json');

const Producto = {
    obtenerTodos: function () {
        const productosJson = fs.readFileSync(productosFilePath, 'utf-8');
        const productos = JSON.parse(productosJson);
        return productos.productos; // El archivo JSON tiene un objeto principal "productos" que contiene todos los productos.
    }
};

module.exports = Producto;
