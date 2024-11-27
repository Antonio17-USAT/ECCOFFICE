function toggleCheckbox(selectedCheckbox) {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    });
}
document.getElementById('correo').addEventListener('input', function (e) {
    const input = e.target;

    // Expresión regular para formato de correo electrónico válido
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Mensaje de error
    const mensajeError = document.getElementById('mensaje-error');

    // Validar el formato del correo
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



document.getElementById('nombre').addEventListener('input', function (e) {
    const input = e.target;

    // Remover caracteres no válidos (permitir solo letras, espacios, y guiones)
    input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]/g, '');

    // Mostrar un mensaje de error si es necesario
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
const telefonoInput = document.getElementById("Telefono");

    telefonoInput.addEventListener("input", (event) => {
        // Reemplaza cualquier carácter que no sea un número
        telefonoInput.value = telefonoInput.value.replace(/\D/g, "");
    });

    // Opcional: prevenir pegar caracteres no válidos
    telefonoInput.addEventListener("paste", (event) => {
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedData = clipboardData.getData("text");
        if (!/^\d+$/.test(pastedData)) {
            event.preventDefault();
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

// Evento para el botón de envío
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault(); // Evita el envío del formulario si se utiliza dentro de uno.

    // Obtener todos los inputs para validar
    alert('lw siarw lick')
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const usuario = document.getElementById('Usuario');
    const telefono = document.getElementById('Telefono');
    const cp = document.getElementById('CP');
    const mensajeError = document.getElementById('mensaje-error');

    // Validar cada campo según las condiciones previamente definidas
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
    if (usuario.value.trim() === '') {
        mensajeError.textContent = "El usuario no puede estar vacío.";
        mensajeError.style.display = "block";
        return;
    }
    if (telefono.value.length < 9 || telefono.value.length > 12) {
        mensajeError.textContent = "El número de teléfono debe tener entre 9 y 12 dígitos.";
        mensajeError.style.display = "block";
        return
    }   
    })
