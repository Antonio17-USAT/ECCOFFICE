// Obtener los elementos del formulario
const btnConfirmar = document.querySelector('.CO');
const btnCancelar = document.querySelector('.CA');
const inputCA = document.getElementById('CA'); // Contraseña actual
const inputCN = document.getElementById('CN'); // Contraseña nueva
const inputCC = document.getElementById('CC'); // Repetir contraseña

// Función para validar las contraseñas
function validarContraseñas() {
    const nuevaContraseña = inputCN.value;
    const repetirContraseña = inputCC.value;

    // Verificar si las contraseñas coinciden
    if (nuevaContraseña !== repetirContraseña) {
        alert('Las contraseñas no coinciden, por favor intenta de nuevo.');
        return false;
    }
    // Si las contraseñas coinciden
    alert('Contraseña cambiada correctamente.');
    return true;
}

// Agregar evento para el botón "Confirmar"
btnConfirmar.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe si está dentro de un formulario
    if (validarContraseñas()) {
        // Aquí puedes agregar código adicional para enviar el formulario o hacer lo que necesites
        console.log('Contraseña confirmada.');
    }
});

// Agregar evento para el botón "Cancelar"
btnCancelar.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar la acción predeterminada del botón
    // Limpiar los campos de entrada
    inputCA.value = '';
    inputCN.value = '';
    inputCC.value = '';
    console.log('Campos limpiados.');
});
