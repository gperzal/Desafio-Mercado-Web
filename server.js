const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const PORT = 3000;
const setupStaticFiles = require('./middlewares/staticFiles');

// Configurar middlewares de archivos estáticos
setupStaticFiles(app);

// Configuración de Handlebars (plantillas) // Especifica la extensión que se usará para las vistas plantillas
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');


// Rutas
const mainRoutes = require('./routes/index');
app.use('/', mainRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
