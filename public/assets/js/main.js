document.addEventListener('DOMContentLoaded', (event) => {
    const productosSeleccionados = [];

    function actualizarContador() {
        const contador = document.querySelector('.carrito-contador');
        contador.textContent = productosSeleccionados.length;
    }

    document.querySelectorAll('.producto').forEach((producto, index) => {
        producto.addEventListener('click', () => {
            const nombreProducto = producto.getAttribute('data-nombre');
            const imagenProducto = producto.getAttribute('data-imagen');
            // Asigna un identificador único (index) al producto
            productosSeleccionados.push({ id: index, nombre: nombreProducto, imagen: imagenProducto });
            // Llama a una función para actualizar la modal con los productos seleccionados
            actualizarModal(productosSeleccionados);

            var toastEl = document.getElementById('toastAgregado');
            var toast = new bootstrap.Toast(toastEl);
            toast.show();
            // Animación para indicar que el producto ha sido agregado con JQUERY
            $(producto).fadeOut(200).fadeIn(200);
            actualizarContador();
        });
    });

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
        productos.forEach((producto, index) => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto-seleccionado');
            productoElement.style.position = 'relative';

            const eliminarBtn = document.createElement('div');
            eliminarBtn.classList.add('animal_insertado_close');
            eliminarBtn.title = 'Haz click aquí para eliminar el producto';
            eliminarBtn.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
            eliminarBtn.style.position = 'absolute';
            eliminarBtn.style.top = '0';
            eliminarBtn.style.right = '0';
            eliminarBtn.style.cursor = 'pointer';
            // Animacion para eliminar con JQUERY
            eliminarBtn.onclick = function () {
                // Encuentra el elemento del producto que se va a eliminar
                actualizarContador();
                var productoAEliminar = $(this).closest('.producto-seleccionado');

                // Animación slideUp antes de eliminar el producto del array y actualizar el modal
                productoAEliminar.slideUp(300, function () {
                    productosSeleccionados.splice(index, 1); // Elimina el producto del array
                    actualizarModal(productosSeleccionados); // Actualiza el modal
                    actualizarContador(); // Actualiza el contador
                });

            };

            const imagenElement = document.createElement('img');
            imagenElement.src = producto.imagen;
            imagenElement.alt = producto.nombre;
            imagenElement.style.width = '100px'; // Ajusta el tamaño de la imagen según necesites

            productoElement.appendChild(imagenElement);
            productoElement.appendChild(eliminarBtn);

            const nombreElement = document.createElement('p');
            nombreElement.textContent = producto.nombre;
            productoElement.appendChild(nombreElement);

            productosContainer.appendChild(productoElement);
        });

        modalBody.appendChild(productosContainer); // Añade el contenedor de productos al cuerpo del modal
    }


    //CONSUMIR CODIGO DE JQUERY 
    // Funcionalidad de filtrado dinámico de productos
    $('#buscarProducto').on('keyup', function () {
        var valor = $(this).val().toLowerCase();
        $('.lista-productos .producto').filter(function () {
            $(this).toggle($(this).find('.card-title').text().toLowerCase().indexOf(valor) > -1);
        });
    });


    // Cierre Compra y Fin de Modal
    document.querySelector('.modal-footer .btn-primary').addEventListener('click', () => {
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `
            <div class="alert alert-success text-center" role="alert">
                Gracias por su compra! Regrese Pronto
            </div>
        `;

        productosSeleccionados.length = 0; // Limpia el array de productos seleccionados

        setTimeout(() => {
            $('#productosModal').modal('hide'); // Cierra el modal después de 3 segundos
        }, 3000);

    });
});
