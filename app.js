const productos = [
    {
        id: 1,
        nombre: "Lámpara Colgante Modelo 1",
        precio: 150,
        categoria: "colgantes",
        descripcion: "Lámpara colgante de nido: Hecha de tiras de cartón entrelazadas, ofrece una luz cálida que se filtra a través de su diseño artesanal.",
        imagen: "img/colgante1.jpg"
    },
    {
        id: 2,
        nombre: "Lámpara de Pared Modelo 1",
        precio: 200,
        categoria: "pared",
        descripcion: "Lámpara mural de cartón ondulado: Diseño minimalista con capas de cartón reciclado, creando texturas únicas que proyectan patrones cálidos sobre la pared.",
        imagen: "img/pared1.jpg"
    },
    {
        id: 3,
        nombre: "Lámpara de Escritorio Modelo  1",
        precio: 320,
        categoria: "escritorio",
        descripcion: "Lámpara compacta plegable: Estructura de cartón reciclable que se pliega fácilmente para ajustarse a diferentes alturas y posiciones..",
        imagen: "img/escritorio1.png"
    },
    {
        id: 4,
        nombre: "Lámpara Colgante Modelo 2",
        precio: 400,
        categoria: "pared",
        descripcion: "Colgante en espiral reciclado: Con un diseño fluido, utiliza capas de cartón moldeado para crear una pieza llamativa y ecológica.",
        imagen: "img/colgante2.jpg"
    },
    {
        id: 5,
        nombre: "Lámpara de Pared Modelo 2",
        precio: 80,
        categoria: "pared",
        descripcion: "Aplique de cartón en forma de hoja: Inspirado en la naturaleza, combina cartón reciclado con un acabado orgánico, ideal para ambientes relajantes.",
        imagen: "img/pared2.jpg"
    },
    {
        id: 6,
        nombre: "Lámpara de Escritorio  Modelo 2",
        precio: 150,
        categoria: "pared",
        descripcion: "Lámpara de escritorio con forma de cilindro: Hecha de tubos de cartón reciclado, combina estética industrial y funcionalidad.",
        imagen: "img/escritorio2.jpg"
    },
    {
        id: 7,
        nombre: "Lámpara Colgante Modelo 3",
        precio: 200,
        categoria: "pared",
        descripcion: "Lámpara colgante de panal: Inspirada en formas hexagonales, hecha completamente de cartón reciclado, ideal para espacios modernos y ecoamigables.",
        imagen: "img/colgante3.jpg"
    },
    {
        id: 8,
        nombre: "Lámpara de Pared Modelo 3",
        precio: 190,
        categoria: "pared",
        descripcion: "Lámpara geométrica de cartón: Paneles triangulares ensamblados a mano, hechos de cartón reciclado, generan un diseño contemporáneo y sostenible.",
        imagen: "img/pared3.jpg"
    },
    {
        id: 9,
        nombre: "Lámpara de Escritorio  Modelo 3",
        precio: 140,
        categoria: "pared",
        descripcion: "Lámpara articulada reciclable: Con brazos ajustables de cartón rígido, perfecta para iluminar espacios de trabajo.",
        imagen: "img/escritorio3.jpg"
    },
    {
        id: 10,
        nombre: "Lámpara de Escritorio Modelo 4",
        precio: 400,
        categoria: "pared",
        descripcion: "Lámpara decorativa con pantalla trenzada: Base sólida de cartón con una pantalla hecha de tiras trenzadas, ideal para añadir un toque cálido y artesanal a tu escritorio.",
        imagen: "img/escritorio4.jpg"
    },

];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para cargar productos dinámicamente
function cargarProductos() {
    const contenedor = document.querySelector('.container-products');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card-product');
        div.innerHTML = `
            <div class="container-img">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button data-id="${producto.id}">Agregar al Carrito</button>
            <a href="detalle.html?id=${producto.id}" class="btn-detalle">Ver Detalle</a>
        `;
        div.querySelector('button').addEventListener('click', () => agregarAlCarrito(producto.id));
        contenedor.appendChild(div);
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    const productoEnCarrito = carrito.find(prod => prod.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado al carrito');
}

// Carga inicial
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
});
