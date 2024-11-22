var htmlproductCard = /*html*/`
<div class="product-card">
    <div class="product-image">
    <img src="Img/archivadores_carton.jpg" alt="">
</div>
<div class="descripcion">
    <p class="nombre-p">Archivador de cartón  color ladrillo</p>
    <p class="precio-p">$ 19.99</p>
    <img src="Img/signo-menos.png" alt="">
    <span>    1   </span>
    <img src="Img/boton-de-adicion.png" alt="">
    <button class="view-button">Ir</button>
</div>
`
document.getElementsByClassName('product-card')[0].innerHTML = htmlproductCard