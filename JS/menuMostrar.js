document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarButton = document.querySelector('.toggle-sidebar');
    const closeSidebarButton = sidebar.querySelector('.close-sidebar');

    function isMobileView() {
        return window.innerWidth <= 768; // Verifica si está en vista móvil
    }

    // Mostrar la barra lateral al hacer clic en el botón "Menú"
    toggleSidebarButton.addEventListener('click', function () {
        if (isMobileView()) {
            sidebar.classList.add('show'); // Agrega la clase "show" para mostrar el sidebar
        }
    });

    // Ocultar la barra lateral al hacer clic en el botón "Cerrar"
    closeSidebarButton.addEventListener('click', function () {
        if (isMobileView()) {
            sidebar.classList.remove('show'); // Elimina la clase "show" para ocultar el sidebar
        }
    });

    // Asegurarse de que la barra lateral no interfiera en vista de escritorio
    window.addEventListener('resize', function () {
        if (!isMobileView()) {
            sidebar.classList.remove('show'); // Oculta el sidebar en vista de escritorio
        }
    });
});
