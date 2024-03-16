document.addEventListener('DOMContentLoaded', (event) => {
    const productosSeleccionados = [];

    document.querySelectorAll('.producto').forEach(producto => {
        producto.addEventListener('click', () => {
            const nombreProducto = producto.getAttribute('data-nombre');
            const imagenProducto = producto.getAttribute('data-imagen');
            // Agrega el producto y su imagen a tu array de seleccionados
            productosSeleccionados.push({ nombre: nombreProducto, imagen: imagenProducto });
            // Llama a una función para actualizar la modal con los productos seleccionados
            actualizarModal(productosSeleccionados);
        });
    });

    // function actualizarModal(productos) {
    //     // Limpiar la lista actual
    //     const modalBody = document.querySelector('.modal-body');
    //     modalBody.innerHTML = '';

    //     // Agregar los productos seleccionados a la modal
    //     productos.forEach(producto => {
    //         const productoElement = document.createElement('div');
    //         productoElement.classList.add('producto-seleccionado');

    //         const imagenElement = document.createElement('img');
    //         imagenElement.src = producto.imagen;
    //         imagenElement.alt = producto.nombre;
    //         imagenElement.style.width = '100px'; // Ajusta el tamaño de la imagen según necesites
    //         productoElement.appendChild(imagenElement);

    //         const nombreElement = document.createElement('p');
    //         nombreElement.textContent = producto.nombre;
    //         productoElement.appendChild(nombreElement);

    //         modalBody.appendChild(productoElement);
    //     });
    // }
    function actualizarModal(productos) {
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = ''; // Limpia el contenido actual del modal

        // Crea un contenedor para los productos seleccionados y aplica Flexbox
        const productosContainer = document.createElement('div');
        productosContainer.style.display = 'flex';
        productosContainer.style.flexWrap = 'wrap';
        productosContainer.style.justifyContent = 'center'; 
        productosContainer.style.gap = '10px'; 

        // Agrega cada producto seleccionado al contenedor
        productos.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto-seleccionado');

            const imagenElement = document.createElement('img');
            imagenElement.src = producto.imagen;
            imagenElement.alt = producto.nombre;
            imagenElement.style.width = '100px'; // Ajusta el tamaño de la imagen según necesites

            productoElement.appendChild(imagenElement);

            const nombreElement = document.createElement('p');
            nombreElement.textContent = producto.nombre;
            productoElement.appendChild(nombreElement);

            productosContainer.appendChild(productoElement);
        });

        modalBody.appendChild(productosContainer); // Añade el contenedor de productos al cuerpo del modal
    }

});
