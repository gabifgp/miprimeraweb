// Función para obtener datos del producto de manera aleatoria
async function obtenerProducto() {
    try {
        // Generar un número aleatorio entre 1 y 30 (30 productos disponibles en la API)
        const idProducto = Math.floor(Math.random() * 30) + 1;

        // Realizar petición a la API de DummyJSON con el ID aleatorio
        const respuesta = await fetch(`https://dummyjson.com/products/${idProducto}`);
        const datos = await respuesta.json();

        // Manipular el DOM para mostrar el producto
        const contenedor = document.getElementById('producto');
        contenedor.innerHTML = `
            <h4>${datos.title}</h4>
            <img src="${datos.thumbnail}" alt="${datos.title}" style="width:150px;">
            <p>${datos.description}</p>
            <p><strong>Precio:</strong> $${datos.price}</p>
        `;
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        const contenedor = document.getElementById('producto');
        contenedor.innerHTML = `<p>No se pudo cargar la publicidad.</p>`;
    }
}

// Ejecutar la función al cargar la página
window.onload = obtenerProducto;
``
