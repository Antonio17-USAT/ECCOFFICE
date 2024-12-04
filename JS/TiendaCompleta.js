const productos = [
    { nombre: 'Archivadores de Cartón', precio: 10.00, stock: 15, descripcion: 'Archivadores de cartón ideales para organizar documentos.', ruta_imagen: 'Img/archivadores_carton.jpg' },
    { nombre: 'Borrador', precio: 1.50, stock: 20, descripcion: 'Borrador blanco para papel.', ruta_imagen: 'Img/borrador.jpg' },
    { nombre: 'Borrador para Pizarra', precio: 2.00, stock: 25, descripcion: 'Borrador especial para pizarras.', ruta_imagen: 'Img/borrador_pizarra.jpg' },
    { nombre: 'Carpeta en Cartón Reciclado', precio: 3.50, stock: 10, descripcion: 'Carpeta ecológica hecha de cartón reciclado.', ruta_imagen: 'Img/Carpeta-en-carton-reciclado.webp' },
    { nombre: 'Clips', precio: 0.50, stock: 100, descripcion: 'Clips metálicos para sujetar documentos.', ruta_imagen: 'Img/clips.jpg' },
    { nombre: 'Clips (Webp)', precio: 0.50, stock: 100, descripcion: 'Clips metálicos para sujetar documentos.', ruta_imagen: 'Img/clips.webp' },
    { nombre: 'Cuaderno de Papel Reciclado', precio: 6.00, stock: 30, descripcion: 'Cuaderno hecho de papel reciclado.', ruta_imagen: 'Img/cuaderno-papel-reciclado.jpeg' },
    { nombre: 'Tijeras', precio: 5.00, stock: 12, descripcion: 'Tijeras para cortar papel.', ruta_imagen: 'Img/descarga.jpeg' },
    { nombre: 'Lápices', precio: 1.20, stock: 50, descripcion: 'Lápices de madera para escribir.', ruta_imagen: 'Img/lapices.jpg' },
    { nombre: 'Lápices de Madera', precio: 1.50, stock: 40, descripcion: 'Lápices de madera ecológicos.', ruta_imagen: 'Img/lapices_madera.jpg' },
    { nombre: 'Libretas y Agendas Ecológicas', precio: 7.00, stock: 25, descripcion: 'Libretas y agendas hechas de papel reciclado.', ruta_imagen: 'Img/Libretas y agendas ecológicas.jpg' },
    { nombre: 'Notas Adhesivas', precio: 2.50, stock: 60, descripcion: 'Notas adhesivas de diversos colores.', ruta_imagen: 'Img/notas adhseivas.jpg' },
    { nombre: 'Notas (1)', precio: 2.50, stock: 60, descripcion: 'Notas adhesivas de diversos colores.', ruta_imagen: 'Img/notas(1).jpg' },
    { nombre: 'Notas (2)', precio: 2.50, stock: 60, descripcion: 'Notas adhesivas de diversos colores.', ruta_imagen: 'Img/notas(2).jpg' },
    { nombre: 'Notas (3)', precio: 2.50, stock: 60, descripcion: 'Notas adhesivas de diversos colores.', ruta_imagen: 'Img/notas(3).jpg' },
    { nombre: 'Lápices (Imagen 1)', precio: 1.20, stock: 50, descripcion: 'Lápices de madera para escribir.', ruta_imagen: 'Img/openart-image_alWOSn8V_1731123302839_raw.jpg' },
    { nombre: 'Lápices (Imagen 2)', precio: 1.20, stock: 50, descripcion: 'Lápices de madera para escribir.', ruta_imagen: 'Img/openart-image_AqHCdkrR_1731123307489_raw.jpg' },
    { nombre: 'Lápices (Imagen 3)', precio: 1.20, stock: 50, descripcion: 'Lápices de madera para escribir.', ruta_imagen: 'Img/openart-image_m_jtGlXd_1731123302471_raw.jpg' },
    { nombre: 'Papelera', precio: 8.00, stock: 10, descripcion: 'Papelera para basura.', ruta_imagen: 'Img/papelera.jpg' },
    { nombre: 'Portadocumentos', precio: 4.00, stock: 20, descripcion: 'Portadocumentos de cartón.', ruta_imagen: 'Img/portadocumentos.jpg' },
    { nombre: 'Sobres', precio: 1.00, stock: 50, descripcion: 'Sobres para cartas.', ruta_imagen: 'Img/sobres.jpg' },
    { nombre: 'Lápices (Imagen Sin Nombre)', precio: 1.20, stock: 50, descripcion: 'Lápices de madera para escribir.', ruta_imagen: 'Img/unnamed.png' },
];
if (typeof sitio_js !== 'undefined') {
    if (sitio_js === 'catalogo') {
        const listaProductos = document.querySelector('#listaProductos');
        productos.forEach((producto, index) => {
            const cardHTML = `
                <div class="producto">
                    <a href="producto.html?producto=${index}">
                        <img src="${producto.ruta_imagen}" alt="${producto.nombre}" />
                        <h5>${producto.nombre}</h5>
                        <p>Precio: S/. ${producto.precio.toFixed(2)}</p>
                        <p>Stock: ${producto.stock}</p>
                    </a>
                </div>
            `;
            listaProductos.insertAdjacentHTML('beforeend', cardHTML);
        });
    } else if (sitio_js === 'vista_producto') {
        const urlParams = new URLSearchParams(window.location.search);
        const productoIndex = urlParams.get('producto');
        const producto = productos[productoIndex];
        const contenedorInfo = document.querySelector('.contenedor-info-producto');

        const infoHTML = `
            <div class="producto-detalle">
                <img src="${producto.ruta_imagen}" alt="${producto.nombre}" />
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p>Precio: S/. ${producto.precio.toFixed(2)}</p>
                <p>Stock disponible: ${producto.stock}</p>
                <button id="btnDecrementar${productoIndex}">-</button>
                <span id="cantidad${productoIndex}" class="cantidad">1</span>
                <button id="btnIncrementar${productoIndex}">+</button>
                <button id="btnAgregar${productoIndex}">Agregar al carrito</button>
            </div>
        `;
        contenedorInfo.innerHTML = infoHTML;

        const btnAgregar = document.getElementById(`btnAgregar${productoIndex}`);
        const btnIncrementar = document.getElementById(`btnIncrementar${productoIndex}`);
        const btnDecrementar = document.getElementById(`btnDecrementar${productoIndex}`);
        const spanCantidad = document.getElementById(`cantidad${productoIndex}`);

        let cantidadActual = 1;

        btnIncrementar.addEventListener('click', () => {
            if (cantidadActual < producto.stock) {
                cantidadActual++;
                spanCantidad.textContent = cantidadActual;
            } else {
                alert('No puede exceder el stock disponible');
            }
        });

        btnDecrementar.addEventListener('click', () => {
            if (cantidadActual > 1) {
                cantidadActual--;
                spanCantidad.textContent = cantidadActual;
            }
        });

        btnAgregar.addEventListener('click', () => {
            añadirAlCarrito(productoIndex, cantidadActual);
            alert(`Se ha agregado ${cantidadActual} unidad(es) de ${producto.nombre} al carrito.`);
        });
    } else if (sitio_js === 'carrito' || sitio_js == 'compra') {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const listaCarrito = document.querySelector('#listaCarrito');
        const resumen = document.querySelector('#resumen');
        let total = 0;
        let costoEnvio = 0;

        carrito.forEach((item, index) => {
            const totalProducto = item.precio * item.cantidadComprada;
            total += totalProducto;

            const rowHTML = `
                <div class="producto-carrito" producto-id="${index}">
                    <img src="${item.ruta_imagen}" alt="${item.nombre}" />
                    <div  class="detalle">
                        <h5>${item.nombre}</h5>
                        <p>${item.descripcion}</p>
                    </div>
                    <div class="boton">
                      <div>
                        <button class="btn-decrementar" data-producto="${index}">-</button>
                        <span class="cantidad">${item.cantidadComprada}</span>
                        <button class="btn-incrementar" data-producto="${index}">+</button>
                      </div> 
                        <div>
                             <p>S/. ${totalProducto.toFixed(2)}</p>       
                        </div>
                        <div class="boton">
                         <button class="btnEliminar" data-nombre="${item.nombre}">Eliminar</button>
                        </div>
                    </div>
                </div>
            `;
            listaCarrito.insertAdjacentHTML('beforeend', rowHTML);
        });

        total += costoEnvio;

        const resumenHTML = 
        `   <h3>Resumen</h3>
            <hr>
            <p>Costo total de productos: S/. ${total.toFixed(2)}</p>
            <p>Cant.: (${carrito.reduce((acc, curr) => acc + curr.cantidadComprada, 0)})</p>
            <p>Costo de envío: S/. ${costoEnvio.toFixed(2)}</p>
            <hr>
            <p>Total: S/. ${total.toFixed(2)}</p>
            <div class="botones">
            <button id="btnComprar">Comprar</button>
            </div>
            
        `;
        resumen.innerHTML = resumenHTML;

        document.querySelectorAll('.btnEliminar').forEach(btn => {
            btn.addEventListener('click', () => {
                removerDelCarrito(btn.dataset.nombre);
            });
        });

        document.querySelectorAll('.btn-decrementar').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = btn.dataset.producto;
                cambiarCantidad(index, -1);
            });
        });

        document.querySelectorAll('.btn-incrementar').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = btn.dataset.producto;
                cambiarCantidad(index, 1);
            });
        });

        document.getElementById('btnComprar').addEventListener('click', () => {
            if (sitio_js == 'carrito') {
                location.href = './InformacionCompra.html'
            } else {
                localStorage.removeItem('carrito');
                location.reload();
                location.href = './CompraHecha.html'
            }
        });
    }
}

function añadirAlCarrito(indexProducto, cantidad) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = productos[indexProducto];

    let productoEnCarrito = carrito.find(prod => prod.nombre.toLowerCase() === producto.nombre.toLowerCase());

    if (productoEnCarrito) {
        if (productoEnCarrito.cantidadComprada + cantidad <= producto.stock) {
            productoEnCarrito.cantidadComprada += cantidad;
        } else {
            alert('No puede comprar más del stock disponible');
            return;
        }
    } else {
        carrito.push({ ...producto, cantidadComprada: cantidad });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cambiarCantidad(index, delta) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = carrito[index];

    if (producto) {
        const nuevaCantidad = producto.cantidadComprada + delta;

        if (nuevaCantidad > 0 && nuevaCantidad <= producto.stock) {
            producto.cantidadComprada = nuevaCantidad;
        } else if (nuevaCantidad <= 0) {
            removerDelCarrito(producto.nombre);
            return;
        } else {
            alert('No puede comprar más del stock disponible');
            return;
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        location.reload();
    }
}

function removerDelCarrito(nombreProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(prod => prod.nombre.toLowerCase() !== nombreProducto.toLowerCase());

    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload();
}