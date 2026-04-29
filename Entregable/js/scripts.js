// ========== BASE DE DATOS DE PRODUCTOS ==========
const productos = [];

// FRUTAS 
const frutas = [
  { id: 1, nombre: "Manzana Orgánica", precio: 8.50, unidad: "kg", categoria: "frutas", descripcion: "Manzanas dulces y crujientes, cultivadas sin pesticidas.", stock: 50, imagen: "imagenes/manzana.png" },
  { id: 2, nombre: "Plátano de seda", precio: 4.50, unidad: "kg", categoria: "frutas", descripcion: "Plátanos pequeños, dulces y altos en potasio.", stock: 120, imagen: "imagenes/platano.png" },
  { id: 5, nombre: "Palta Hass", precio: 12.00, unidad: "kg", categoria: "frutas", descripcion: "Paltas cremosas perfectas para ensaladas.", stock: 30, imagen: "imagenes/palta.png" },
  { id: 6, nombre: "Fresa orgánica", precio: 18.00, unidad: "kg", categoria: "frutas", descripcion: "Fresas rojas y jugosas, cosecha reciente.", stock: 45, imagen: "imagenes/fresa.png" },
  { id: 8, nombre: "Limón sutil", precio: 4.00, unidad: "kg", categoria: "frutas", descripcion: "Limones jugosos, ideales para bebidas y comidas.", stock: 150, imagen: "imagenes/limon.png" },
  { id: 10, nombre: "Naranja dulce", precio: 5.50, unidad: "kg", categoria: "frutas", descripcion: "Naranjas jugosas, llenas de vitamina C.", stock: 100, imagen: "imagenes/naranja.png" },
  { id: 14, nombre: "Kiwi orgánico", precio: 15.00, unidad: "kg", categoria: "frutas", descripcion: "Kiwis dulces y ácidos, llenos de vitamina C.", stock: 40, imagen: "imagenes/kiwi.png" },
  { id: 15, nombre: "Uva borgoña", precio: 12.00, unidad: "kg", categoria: "frutas", descripcion: "Uvas dulces, perfectas para comer frescas o en postres.", stock: 70, imagen: "imagenes/uva.png" },
  { id: 16, nombre: "Mango orgánico", precio: 9.00, unidad: "kg", categoria: "frutas", descripcion: "Mangos dulces y jugosos, cosecha reciente.", stock: 50, imagen: "imagenes/mango.png" },
  { id: 20, nombre: "Granada", precio: 14.00, unidad: "kg", categoria: "frutas", descripcion: "Granadas dulces, llenas de antioxidantes.", stock: 35, imagen: "imagenes/granada.png" },
];

// VERDURAS 
const verduras = [
  { id: 3, nombre: "Zanahoria orgánica", precio: 3.50, unidad: "kg", categoria: "verduras", descripcion: "Zanahorias jugosas, ricas en betacaroteno.", stock: 85, imagen: "imagenes/zanahoria.png" },
  { id: 7, nombre: "Tomate riñón", precio: 5.00, unidad: "kg", categoria: "verduras", descripcion: "Tomates rojos, firmes y sabrosos.", stock: 90, imagen: "imagenes/tomate.png" },
  { id: 9, nombre: "Espinaca orgánica", precio: 6.00, unidad: "kg", categoria: "verduras", descripcion: "Espinaca fresca, rica en hierro y vitaminas.", stock: 60, imagen: "imagenes/espinaca.png" },
  { id: 11, nombre: "Pepino orgánico", precio: 4.00, unidad: "kg", categoria: "verduras", descripcion: "Pepinos frescos y crujientes, ideales para ensaladas.", stock: 80, imagen: "imagenes/pepino.png" },
  { id: 12, nombre: "Pimiento rojo", precio: 7.00, unidad: "kg", categoria: "verduras", descripcion: "Pimientos rojos dulces, ricos en vitamina C.", stock: 60, imagen: "imagenes/pimientoRojo.png" },
  { id: 13, nombre: "Brócoli orgánico", precio: 6.50, unidad: "kg", categoria: "verduras", descripcion: "Brócoli fresco, alto en antioxidantes.", stock: 55, imagen: "imagenes/brocoli.png" },
  { id: 17, nombre: "Papa nativa", precio: 5.50, unidad: "kg", categoria: "verduras", descripcion: "Papas andinas, variedad autóctona.", stock: 150, imagen: "imagenes/papa.png" },
  { id: 18, nombre: "Cebolla roja", precio: 3.50, unidad: "kg", categoria: "verduras", descripcion: "Cebollas rojas, ideales para ensaladas y salsas.", stock: 120, imagen: "imagenes/cebolla.png" }
];

// GRANOS 
const granos = [
  { id: 4, nombre: "Quinua Real", precio: 15.00, unidad: "kg", categoria: "granos", descripcion: "Quinua orgánica de grano grande, alto valor proteico.", stock: 200, imagen: "imagenes/quinua.png" },
  { id: 23, nombre: "Kiwicha", precio: 14.00, unidad: "kg", categoria: "granos", descripcion: "Kiwicha orgánica, rica en calcio y proteínas.", stock: 120, imagen: "imagenes/kiwicha.png" },
  { id: 24, nombre: "Cañihua", precio: 16.00, unidad: "kg", categoria: "granos", descripcion: "Cañihua orgánica, alto contenido en hierro.", stock: 90, imagen: "imagenes/cañihua.png" }
];

// LEGUMBRES 
const legumbres = [
  { id: 21, nombre: "Lentejas orgánicas", precio: 9.00, unidad: "kg", categoria: "legumbres", descripcion: "Lentejas ricas en hierro y proteína vegetal.", stock: 100, imagen: "imagenes/lentejas.png" },
  { id: 22, nombre: "Frijol canario", precio: 8.50, unidad: "kg", categoria: "legumbres", descripcion: "Frijoles canarios, suaves y cremosos.", stock: 80, imagen: "imagenes/frijol.png" },
  { id: 25, nombre: "Garbanzo orgánico", precio: 10.00, unidad: "kg", categoria: "legumbres", descripcion: "Garbanzos orgánicos, ideales para guisos y ensaladas.", stock: 70, imagen: "imagenes/garbanzo.png" }
];

// FRUTAS SECAS 
const frutasSecas = [
  { id: 26, nombre: "Pasas orgánicas", precio: 25.00, unidad: "kg", categoria: "frutas secas", descripcion: "Pasas de uva, dulces y naturales. Venta por kilogramo.", stock: 80, imagen: "imagenes/pasas.png" },
  { id: 27, nombre: "Ciruelas secas", precio: 30.00, unidad: "kg", categoria: "frutas secas", descripcion: "Ciruelas deshidratadas, ricas en fibra.", stock: 60, imagen: "imagenes/ciruelasSecas.png" },
  { id: 28, nombre: "Higos secos", precio: 35.00, unidad: "kg", categoria: "frutas secas", descripcion: "Higos orgánicos deshidratados, dulces y nutritivos.", stock: 45, imagen: "imagenes/higosSecos.png" },
  { id: 29, nombre: "Nueces peladas", precio: 45.00, unidad: "kg", categoria: "frutas secas", descripcion: "Nueces frescas, ricas en Omega-3.", stock: 70, imagen: "imagenes/nuecesPeladas.png" }
];

//  UNIR TODOS LOS PRODUCTOS  
frutas.forEach(p => productos.push(p));
verduras.forEach(p => productos.push(p));
granos.forEach(p => productos.push(p));
legumbres.forEach(p => productos.push(p));
frutasSecas.forEach(p => productos.push(p));

//  FUNCIONES DEL CARRITO (con localStorage) 

// Obtener el carrito actual desde localStorage
function obtenerCarrito() {
  const carrito = localStorage.getItem('ecomarket_carrito');
  return carrito ? JSON.parse(carrito) : [];
}

// Guardar el carrito en localStorage
function guardarCarrito(carrito) {
  localStorage.setItem('ecomarket_carrito', JSON.stringify(carrito));
}

// Agregar un producto al carrito
function agregarAlCarrito(idProducto, cantidad = 1) {
  const producto = productos.find(p => p.id === idProducto);
  if (!producto) {
    console.error('Producto no encontrado');
    return;
  }
  
  let carrito = obtenerCarrito();
  const productoExistente = carrito.find(item => item.id === idProducto);
  
  if (productoExistente) {
    productoExistente.cantidad += parseFloat(cantidad);
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      unidad: producto.unidad,
      cantidad: parseFloat(cantidad),
      imagen: producto.imagen
    });
  }
  
  guardarCarrito(carrito);
  actualizarContadorCarrito();
  mostrarNotificacion(`${producto.nombre} agregado al carrito (${cantidad} ${producto.unidad})`);
}

// Eliminar un producto del carrito
function eliminarDelCarrito(idProducto) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter(item => item.id !== idProducto);
  guardarCarrito(carrito);
  actualizarContadorCarrito();
  mostrarNotificacion('Producto eliminado del carrito');
  
  if (window.location.pathname.includes('carrito.html')) {
    location.reload();
  }
}

// Vaciar el carrito completamente
function vaciarCarrito() {
  localStorage.removeItem('ecomarket_carrito');
  actualizarContadorCarrito();
  mostrarNotificacion('Carrito vaciado');
}

// Actualizar el contador del carrito en toda la página
function actualizarContadorCarrito() {
  const carrito = obtenerCarrito();
  const totalItems = carrito.reduce((suma, item) => suma + item.cantidad, 0);
  
  const elementosContador = document.querySelectorAll('#contadorCarrito');
  elementosContador.forEach(elemento => {
    elemento.textContent = totalItems;
  });
}

// Mostrar notificación tipo toast
function mostrarNotificacion(mensaje, tipo = 'exito') {
  let contenedorToast = document.querySelector('.toast-container');
  if (!contenedorToast) {
    contenedorToast = document.createElement('div');
    contenedorToast.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    contenedorToast.style.zIndex = '1100';
    document.body.appendChild(contenedorToast);
  }
  
  const idToast = 'toast-' + Date.now();
  const htmlToast = `
    <div id="${idToast}" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true" data-bs-delay="3000">
      <div class="toast-header ${tipo === 'exito' ? 'bg-success text-white' : 'bg-danger text-white'}">
        <strong class="me-auto"><i class="bi bi-check-circle"></i> EcoMarket</strong>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
      </div>
      <div class="toast-body">
        ${mensaje}
      </div>
    </div>
  `;
  
  contenedorToast.insertAdjacentHTML('beforeend', htmlToast);
  const elementoToast = document.getElementById(idToast);
  const toast = new bootstrap.Toast(elementoToast);
  toast.show();
  
  elementoToast.addEventListener('hidden.bs.toast', () => {
    elementoToast.remove();
  });
}

//  FUNCIONES DE OBTENCIÓN POR CATEGORÍA 
function obtenerProductosPorCategoria(categoria) {
  return productos.filter(p => p.categoria === categoria);
}

function obtenerFrutas() {
  return productos.filter(p => p.categoria === "frutas");
}

function obtenerVerduras() {
  return productos.filter(p => p.categoria === "verduras");
}

function obtenerGranos() {
  return productos.filter(p => p.categoria === "granos");
}

function obtenerLegumbres() {
  return productos.filter(p => p.categoria === "legumbres");
}

function obtenerFrutasSecas() {
  return productos.filter(p => p.categoria === "frutas secas");
}

// ========== FUNCIONES DE TOTALES ==========
function obtenerTotalCarrito() {
  const carrito = obtenerCarrito();
  return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

function obtenerCantidadItemsCarrito() {
  const carrito = obtenerCarrito();
  return carrito.reduce((suma, item) => suma + item.cantidad, 0);
}

//  INICIALIZACIÓN 
document.addEventListener('DOMContentLoaded', function() {
  actualizarContadorCarrito();
});