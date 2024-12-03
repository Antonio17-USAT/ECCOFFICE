const sidebar = document.getElementById('sidebar');

// Función para crear el filtro dinámicamente
function crearFiltro() {
  // Crear el contenedor principal del filtro
  const filtroContainer = document.createElement('div');
  filtroContainer.classList.add('filtro-container');

  // Crear las secciones del filtro
  const secciones = [
    { titulo: 'Tipo de producto', opciones: ['Lápices', 'Borradores', 'Libretas', 'Archivadores', 'Cuadernos'] },
    { titulo: 'Material', opciones: ['Papel', 'Cartón', 'Metales'] },
    { titulo: 'Precio', opciones: ['Rango de precio'] }
  ];

  // Recorrer las secciones y añadirlas al contenedor
  secciones.forEach((seccion) => {
    // Crear el título de la sección
    const titulo = document.createElement('h3');
    titulo.textContent = seccion.titulo;
    filtroContainer.appendChild(titulo);

    // Crear los elementos según las opciones
    if (seccion.titulo === 'Precio') {
      // Para el rango de precio, añadimos un input de tipo range
      const rango = document.createElement('input');
      rango.type = 'range';
      rango.min = '0';
      rango.max = '100';
      rango.step = '1';
      filtroContainer.appendChild(rango);
    } else {
      // Para otras opciones, añadimos botones
      seccion.opciones.forEach((opcion) => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.classList.add('filtro-boton');
        filtroContainer.appendChild(boton);
      });
    }
  });

  // Añadir el filtro al contenedor principal (sidebar)
  sidebar.appendChild(filtroContainer);
}

// Llamar a la función para crear el filtro
crearFiltro();