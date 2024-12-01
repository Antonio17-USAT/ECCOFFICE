function toggleCheckbox(selectedCheckbox) {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    });
}

// Validación del correo
document.getElementById('correo').addEventListener('input', function (e) {
    const input = e.target;
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mensajeError = document.getElementById('mensaje-error');

    if (input.value.trim() === '') {
        mensajeError.textContent = "El correo no puede estar vacío.";
        mensajeError.style.display = "block";
    } else if (!correoRegex.test(input.value.trim())) {
        mensajeError.textContent = "Por favor, introduce un correo válido.";
        mensajeError.style.display = "block";
    } else {
        mensajeError.style.display = "none";
    }
});

// Validación del nombre
document.getElementById('nombre').addEventListener('input', function (e) {
    const input = e.target;
    input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]/g, '');
    const mensajeError = document.getElementById('mensaje-error');
    
    if (input.value.trim() === '') {
        mensajeError.textContent = "El nombre no puede estar vacío.";
        mensajeError.style.display = "block";
    } else if (input.value.trim().length < 2 || input.value.trim().length > 50) {
        mensajeError.textContent = "El nombre debe tener entre 2 y 50 caracteres.";
        mensajeError.style.display = "block";
    } else {
        mensajeError.style.display = "none";
    }
});

// Validación para el teléfono, solo números
document.getElementById('Telefono').addEventListener('input', function (e) {
    const input = e.target;
    input.value = input.value.replace(/\D/g, ''); // Solo permite números
    if (input.value.length < 9 || input.value.length > 12) {
        input.setCustomValidity('El número debe tener entre 9 y 12 dígitos.');
    } else {
        input.setCustomValidity('');
    }
});

// Limitar el número de caracteres en el input "Telefono"
document.getElementById('Telefono').addEventListener("input", (event) => {
    const telefonoInput = event.target;
    telefonoInput.value = telefonoInput.value.replace(/\D/g, "");
});

// Prevenir pegar caracteres no válidos en "Telefono"
document.getElementById('Telefono').addEventListener("paste", (event) => {
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData("text");
    if (!/^\d+$/.test(pastedData)) {
        event.preventDefault();
    }
});

// Evento para el botón "Registrar"
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault(); // Evitar el envío del formulario

    // Obtener todos los campos
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('Telefono');
    const mensajeError = document.getElementById('mensaje-error');

    // Validar los campos
    if (nombre.value.trim() === '' || nombre.value.length < 2 || nombre.value.length > 50) {
        mensajeError.textContent = "El nombre no cumple con los requisitos.";
        mensajeError.style.display = "block";
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {
        mensajeError.textContent = "El correo no es válido.";
        mensajeError.style.display = "block";
        return;
    }
    if (telefono.value.length < 9 || telefono.value.length > 12) {
        mensajeError.textContent = "El número de teléfono debe tener entre 9 y 12 dígitos.";
        mensajeError.style.display = "block";
        return;
    }

    // Si todo es válido, puedes enviar el formulario o realizar otras acciones
    alert("¡Cuenta registrada exitosamente!");
    // Aquí podrías agregar el código para enviar el formulario o procesar los datos
});

// Evento para el botón "Cancelar"
document.querySelector('.CA').addEventListener('click', function (e) {
    e.preventDefault(); // Evitar la acción predeterminada

    // Limpiar todos los campos
    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('Telefono').value = '';

    // Limpiar el mensaje de error
    const mensajeError = document.getElementById('mensaje-error');
    mensajeError.style.display = "none";
});
