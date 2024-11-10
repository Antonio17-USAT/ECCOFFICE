$(document).ready(function(){
    $(".faq-item").click(function(){
        $(this).find(".respuesta").toggle(); // Muestra u oculta la respuesta al hacer clic
    });
});