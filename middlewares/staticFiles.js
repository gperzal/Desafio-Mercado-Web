const express = require('express');
const path = require('path');

module.exports = function (app) {

    // Middleware para Bootstrap CSS
    app.use('/bootstrap-css', express.static(path.join(__dirname, '..', 'node_modules/bootstrap/dist/css')));

    // Middleware para servir JS de Bootstrap
    app.use('/bootstrap-js', express.static(path.join(__dirname, '..', 'node_modules/bootstrap/dist/js')));

    // Middleware para servir JS de jQuery
    app.use('/jquery', express.static(path.join(__dirname, '..', 'node_modules/jquery/dist')));

    // Middleware para archivos estáticos
    app.use(express.static(path.join(__dirname, '..', 'public')));



};
