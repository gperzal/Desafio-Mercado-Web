# Mercado Web

## Descripción del Proyecto

Mercado Web es una aplicación web interactiva diseñada para simular una experiencia de compra en línea en un mercado. Los usuarios pueden navegar por una variedad de productos, agregarlos a su carrito de compras y visualizar sus selecciones antes de realizar una compra.

La aplicación está diseñada con una interfaz de usuario amigable y notificaciones visuales para mejorar la experiencia del usuario al agregar productos al carrito de compras.

## Tecnologías Usadas

- **Frontend**:
  - HTML5: Estructura de la página web.
  - CSS3: Estilos para mejorar la apariencia.
  - Bootstrap 5: Framework de CSS para diseño responsivo y componentes interactivos como modales y toasts.
  - JavaScript: Lógica de la interactividad del lado del cliente.

- **Backend**:
  - Node.js: Entorno de ejecución para JavaScript del lado del servidor.
  - Express.js: Framework de Node.js para construir aplicaciones web y API más fácilmente.
  - Handlebars: Motor de plantillas para renderizar vistas del lado del servidor.

## Funcionamiento

1. **Navegación de Productos**: Los usuarios pueden ver todos los productos disponibles en la página principal.
2. **Selección de Productos**: Al hacer clic en cualquier producto, este se agrega al carrito de compras. Un toast de Bootstrap se muestra brevemente para confirmar que el producto ha sido agregado.
3. **Revisión del Carrito**: Los usuarios pueden hacer clic en un botón para abrir un modal que muestra todos los productos agregados al carrito de compras.
4. **Compra**: Dentro del modal del carrito de compras, los usuarios pueden optar por "Confirmar Selección", lo que simula el proceso de compra. Se muestra un mensaje de agradecimiento y el modal se cierra automáticamente después de unos segundos.

## Capturas de Diseño

![Página Principal](https://github.com/gperzal/Desafio-Mercado-Web/tree/main/public/assets/img/screenshot/main.png)

![Modal](https://github.com/gperzal/Desafio-Mercado-Web/tree/main/public/assets/img/screenshot/modal.png)

## Instalación y Uso

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio en tu máquina local:
   ```
   git clone https://github.com/gperzal/Desafio-Mercado-Web.git
   ```
2. Navega hasta el directorio del proyecto:
   ```
   cd Desafio-Mercado-Web
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Inicia el servidor:
   ```
   npm start
   ```
5. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en funcionamiento.


## Enlace del Despliegue

Este proyecto está desplegado en [Render] y puedes acceder a él a través de este enlace: [Enlace del Despliegue](https://desafio-mercado-web.onrender.com)



