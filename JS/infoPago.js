// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Validar que solo un checkbox pueda ser seleccionado
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                checkboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== this) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });

    // Validar que el CVV tenga máximo 3 números
    const cvvInput = document.getElementById('cvv');
    cvvInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 3);
    });

    // Validar que el nombre del propietario solo acepte letras
    const propietarioInput = document.getElementById('propietario');
    propietarioInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });

    // Validar que el número de cuenta permita solo números y guiones con formato específico
    const numeroCuentaInput = document.getElementById('numero');
    numeroCuentaInput.addEventListener('input', function () {
        // Elimina cualquier carácter no numérico
        let cleanedValue = this.value.replace(/[^0-9]/g, '');
        
        // Limita el valor a un máximo de 16 dígitos
        if (cleanedValue.length > 16) {
            cleanedValue = cleanedValue.slice(0, 16);
        }

        // Formatea el valor con guiones cada 4 dígitos
        let formattedValue = cleanedValue.match(/.{1,4}/g)?.join('-') || '';
        this.value = formattedValue;
    });

    // Validación final en el botón de envío
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', function (event) {
        const selectedCheckbox = Array.from(checkboxes).some(checkbox => checkbox.checked);
        const propietarioValue = propietarioInput.value.trim();
        const numeroCuentaValue = numeroCuentaInput.value.trim();

        if (!selectedCheckbox) {
            alert('Debe seleccionar un método de pago.');
            event.preventDefault();
        } else if (propietarioValue === "") {
            alert('El nombre del propietario no puede estar vacío y debe contener solo letras.');
            event.preventDefault();
        } else if (cvvInput.value.length !== 3) {
            alert('El CVV debe tener exactamente 3 números.');
            event.preventDefault();
        } else if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(numeroCuentaValue)) {
            alert('El número de cuenta debe tener el formato 9999-9999-9999-9999 y máximo 16 números.');
            event.preventDefault();
        }
    });

    // Limpiar campos al hacer clic en el botón "Cancelar"
    const cancelButton = document.querySelector('.CA');
    cancelButton.addEventListener('click', function () {
        // Restablecer el formulario
        const form = document.querySelector('form');
        form.reset();

        // También se desmarcan los checkboxes
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    });
});
