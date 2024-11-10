$(document).ready(function() {
    // Cambiar el estilo cuando cualquier campo input recibe el foco
    $('input').focus(function() {
        $(this).css({
            'background-color': 'lightgreen',
            'border': '2px solid green'
        });
    });

    // Restaurar el estilo cuando el campo pierde el foco
    $('input').blur(function() {
        $(this).css({
            'background-color': 'white',
            'border': '1px solid #ccc'
        });
    });
});