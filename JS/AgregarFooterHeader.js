var htmldropdown = /*html*/`
 <div class="dropdown-caja">
            <div class="enlace">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Catalogo
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Carrito</a></li>
                </ul>
            </div>
            <div class="enlace">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Nosotros
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Nuestra Historia</a></li>
                    <li><a class="dropdown-item" href="#">Mision y Visión</a></li>
                </ul>
            </div>
            <div class="enlace">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Contacto
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Mensaje</a></li>
                    <li><a class="dropdown-item" href="#">Redes Sociales</a></li>
                </ul>
            </div>
            <div class="enlace">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Ayuda
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Centro de Ayuda</a></li>
                    <li><a class="dropdown-item" href="#">Libro de Reclamaciones</a></li>
                    <li><a class="dropdown-item" href="#">Preguntas Frecuentes</a></li>
                    <li><a class="dropdown-item" href="#">Horarios de atencion</a></li>
                    <li><a class="dropdown-item" href="#">Politicas de Privacidad</a></li>
                </ul>
            </div>
        </div>
        <div class="caja-busqueda2">
            <div class="barra-busqueda2">
                <input type="text" placeholder="Buscar producto">
                <span class="icono">Q</span>
            </div>
        </div>

`

var htmlHeader = /*html*/`
<div class="he1">
<div class="logo">
    <img src="Img/pinguino drogo.png" alt="ECCOFFICE Logo" class="logo-img">
    <span class="logo-text"><strong>ECCOFFICE</strong></span>
</div>
<div class="caja-busqueda">
    <div class="barra-busqueda">
        <input type="text" placeholder="Buscar producto">
        <span class="icono">Q</span>
    </div>
</div>

<div class="icons">
    <a href="" class="icon"><img src="Img/carro-de-la-compra.png" alt="" class="carrito"></a>
    <a href="#favoritos" class="icon"><img src="Img/amor.png" alt=""></a>
    <a href="#perfil" class="icon"><img src="Img/perfil.png" alt="" class="perfil"></a>
</div>
</div>
`

var htmlFooter = /*html*/`
<div class="caja-footer">
    <div class="logo">
        <div class="logo-f">
                    <img src="Img/pinguino drogo.png" alt="ECCOFFICE Logo" class="logo-img">
        </div>
                <div class="text-f">
                    <span class="logo-text"><strong>ECCOFFICE</strong></span>
                </div>

    </div>

    <div class="Ayuda">
        <div class="titulo-div">Te ayudamos</div>
        <div class="varios">
            <li><a href="">Centro de ayuda</a></li>
            <li><a href="">Contacto</a></li>
            <li><a href="">Preguntas Frecuentes</a></li>
        </div>
    </div>

    <div class="Empresa">
        <div class="titulo-div">Empresa</div>
        <div class="varios">
                <li><a href="">Nuestra historia</a></li>
                <li><a href="">Fundadores</a></li>
                <li><a href="">Mision y Vision</a></li>
        </div>
    </div>

    <div class="Info">
        <div class="titulo-div">Informacion</div>
        <div class="varios">
            <li><a href="">Politicas de privacidad</a></li>
            <li><a href="">Horarios de atencion</a></li>
            <li><a href="">Libro de Reclamaciones</a></li>
        </div>
    </div>

        <div class="Redes">
            <div class="titulo-div">Redes Sociales</div>
            <div class="varios">
                <li class="item">
                    <img src="Img/facebook-brands-solid.svg" alt="">
                    <span><a href="">Facebook</a></span>
                </li>
                <li class="item">
                    <img src="Img/youtube-brands-solid.svg" alt="">
                    <span><a href="">Youtube</a></span>
                </li>
                <li class="item">
                    <img src="Img/instagram-brands-solid.svg" alt="" class="ig">
                    <span><a href="">Instagram</a></span>
                 </li>
            </div>
        </div>
`
document.getElementsByTagName('footer')[0].innerHTML = htmlFooter
document.getElementsByClassName('header')[0].innerHTML = htmlHeader
document.getElementsByClassName('dropdown')[0].innerHTML = htmldropdown
// document.getElementsByTagName('header')[0].innerHTML = htmlFooter