$(document).ready(function () {

    $(".pregunta").click(function () {
        const respuesta = $(this).find(".respuesta");
        // Alterna la clase para mostrar u ocultar
        respuesta.toggleClass("mostrar");
        if (respuesta.hasClass("mostrar")) {
            respuesta.css("height", respuesta.prop("scrollHeight") + "px");
        } else {
            respuesta.css("height", "0px");
        }
    });
});
