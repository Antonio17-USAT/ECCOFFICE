let listElement = document.querySelectorAll('.item-boton');

listElement.forEach(listElement => {
    listElement.addEventListener('click' , () =>{
        
        listElement.classList.toggle('arrow')
        let height = 0; 
        let menu = listElement.nextElementSibling; 
        
        if(menu.clientHeight=="0"){ 
            height= menu.scrollHeight; 
        }
        menu.style.height = `${height}px`;
    })
}); 

$(document).ready(function() {
    $(".product-card").hover(
        function() { // Al pasar el ratón
            $(this).css({
                "transform": "scale(1.05)", 
                "box-shadow": "0 4px 8px rgba(0,0,0,0.3)" 
            });
        },
        function() { // Al retirar el ratón
            $(this).css({
                "transform": "scale(1)", // Vuelve al tamaño original
                "box-shadow": "none" // Quita la sombra
            });
        }
    );
});