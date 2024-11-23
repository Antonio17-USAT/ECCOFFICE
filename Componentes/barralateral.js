export function initializeDropdowns() {
    // Obtener todos los botones desplegables
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    // Agregar un evento de clic para mostrar u ocultar el submenú
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function () {
            const dropdownContent = this.nextElementSibling;

            // Alternar la visibilidad del submenú
            if (dropdownContent) {
                dropdownContent.classList.toggle('show');
            }
        });
    });
}