var htmlHeader = /*html*/`
`

var htmlFooter = /*html*/`
<div class="caja-footer">
            <div class="logo">
                <div class="logo-f">
                    <img src="Img/pinguino drogo.png" alt="ECCOFFICE Logo" class="logo-img">
                </div>
                <di class="text-f">
                    <span class="logo-text"><strong>ECCOFFICE</strong></span>
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
        </div>
`

document.getElementsByTagName('footer')[0].innerHTML = htmlFooter
// document.getElementsByTagName('header')[0].innerHTML = htmlFooter