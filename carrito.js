let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function cargarCarrito() {
    const tabla = document.querySelector('#tabla-carrito tbody');
    const totalSpan = document.querySelector('#total');
    tabla.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>
                <input type="number" min="1" value="${producto.cantidad}" data-index="${index}">
            </td>
            <td>$${subtotal}</td>
            <td>
                <button data-index="${index}">Eliminar</button>
            </td>
        `;

        fila.querySelector('input').addEventListener('change', actualizarCantidad);
        fila.querySelector('button').addEventListener('click', eliminarProducto);

        tabla.appendChild(fila);
    });

    totalSpan.textContent = `$${total}`;
}

function actualizarCantidad(event) {
    const index = event.target.dataset.index;
    carrito[index].cantidad = parseInt(event.target.value, 10);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function eliminarProducto(event) {
    const index = event.target.dataset.index;
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function realizarCompra() {
    alert('Compra realizada con éxito');
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito();
    document.querySelector('#realizar-compra').addEventListener('click', realizarCompra);
});
