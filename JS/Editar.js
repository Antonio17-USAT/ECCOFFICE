function toggleCheckbox(selectedCheckbox) {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    });
}
//USUARIO: Elimina cualquier carácter que no sea letra, número o guion.; Esto asegura que el usuario no pueda ingresar caracteres no permitidos mientras escribe.
document.getElementById('Usuario').addEventListener('input', function (e) {
    const input = e.target;
    // Permitir solo letras, números y guiones
    input.value = input.value.replace(/[^A-Za-z0-9\-]/g, '');
});

// Hace que solo se ingresen numeros en el input del celular
document.getElementById('Telefono').addEventListener('input', function (e) {
    const input = e.target;
    // Eliminar cualquier carácter que no sea número
    input.value = input.value.replace(/\D/g, '');
    // Verificar si está dentro del rango permitido
    if (input.value.length < 9 || input.value.length > 12) {
        input.setCustomValidity('El número debe tener entre 9 y 12 dígitos.');
    } else {
        input.setCustomValidity('');
    }
});
//En el input de postal: Elimina cualquier carácter que no sea alfanumérico; Muestra un mensaje si la longitud está fuera del rango permitido (5-10 caracteres).
document.getElementById('CP').addEventListener('input', function (e) {
    const input = e.target;
    // Eliminar caracteres no alfanuméricos
    input.value = input.value.replace(/[^A-Za-z0-9]/g, '');
    // Verificar si la longitud está entre 5 y 10
    if (input.value.length < 5 || input.value.length > 10) {
        input.setCustomValidity('El código postal debe tener entre 5 y 10 caracteres alfanuméricos.');
    } else {
        input.setCustomValidity('');
    }
});