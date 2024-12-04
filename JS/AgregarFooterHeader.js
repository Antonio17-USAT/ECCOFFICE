var htmldropdown = /*html*/`
 <div class="dropdown-caja">
            <div class="enlace">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Catalogo
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="Catalogo.html">Catalogo</a></li>
                    <li><a class="dropdown-item" href="Carrito.html">Carrito</a></li>
                    <li><a class="dropdown-item" href="personalizada.html">Personalizar</a></li>
                </ul>
            </div>
            <div class="enlace">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Nosotros
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="Historia.html">Nuestra Historia</a></li>
                    <li><a class="dropdown-item" href="Mision-Vision.html">Mision y Visión</a></li>
                </ul>
            </div>
            <div class="enlace">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Contacto
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="contacto.html">Mensaje</a></li>
                    <li><a class="dropdown-item" href="redesSociales.html">Redes Sociales</a></li>
                </ul>
            </div>
            <div class="enlace">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Ayuda
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="Centro-Ayuda.html">Centro de Ayuda</a></li>
                    <li><a class="dropdown-item" href="Libro.html">Libro de Reclamaciones</a></li>
                    <li><a class="dropdown-item" href="Preguntas.html">Preguntas Frecuentes</a></li>
                    <li><a class="dropdown-item" href="Horario.html">Horarios de atencion</a></li>
                    <li><a class="dropdown-item" href="Politicas.html">Politicas de Privacidad</a></li>
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
        <a href="inicio.html" style:"text-decoration:none"> 
            <img src="Img/pinguino drogo.png" alt="ECCOFFICE Logo" class="logo-img">
            <span class="logo-text"><strong>ECCOFFICE</strong></span>
        </a>
    </div>
    <div class="caja-busqueda">
        <div class="barra-busqueda">
            <input type="text" placeholder="Buscar producto">
            <i class="fa-solid fa-magnifying-glass fa-lg" style="color: #000000;"></i>
        </div>
    </div>

    <div class="icons">
        <a href="Carrito.html" class="icon"><i class="fa-solid fa-cart-shopping fa-2xl" style="color: #000000;"></i></a>
        <a href="listaDeseos.html" class="icon"><i class="fa-regular fa-heart fa-2xl" style="color: #000000;"></i></a>
        <a href="perfilNuevo.html" class="icon"><i class="fa-regular fa-user fa-2xl" style="color: #000000;"></i></a>
    </div>
</div>`

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
            <li><a href="Centro-Ayuda.html">Centro de ayuda</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li><a href="Preguntas.html">Preguntas Frecuentes</a></li>
        </div>
    </div>

    <div class="Empresa">
        <div class="titulo-div">Empresa</div>
        <div class="varios">
                <li><a href="Historia.html">Nuestra historia</a></li>
                <li><a href="fundadores.html">Fundadores</a></li>
                <li><a href="Mision-Vision.html">Mision y Vision</a></li>
        </div>
    </div>

    <div class="Info">
        <div class="titulo-div">Informacion</div>
        <div class="varios">
            <li><a href="Politicas.html">Politicas de privacidad</a></li>
            <li><a href="Horario.html">Horarios de atencion</a></li>
            <li><a href="Libro.html">Libro de Reclamaciones</a></li>
        </div>
    </div>

        <div class="Redes">
            <div class="titulo-div">Redes Sociales</div>
            <div class="varios">
                <li class="item">
                    <i class="fa-brands fa-facebook fa-xl" style="color: #ffffff;"></i>
                    <span><a href="https://www.facebook.com">Facebook</a></span>
                </li>
                <li class="item">
                    <i class="fa-brands fa-youtube fa-xl" style="color: #ffffff;"></i>
                    <span><a href="https://www.youtube.com">Youtube</a></span>
                </li>
                <li class="item">
                    <i class="fa-brands fa-instagram fa-xl" style="color: #ffffff;"></i>
                    <span><a href="https://www.instagram.com">Instagram</a></span>
                 </li>
            </div>
        </div>
`
document.getElementsByTagName('footer')[0].innerHTML = htmlFooter
document.getElementsByClassName('header')[0].innerHTML = htmlHeader
document.getElementsByClassName('dropdown')[0].innerHTML = htmldropdown
// document.getElementsByTagName('header')[0].innerHTML = htmlFooter