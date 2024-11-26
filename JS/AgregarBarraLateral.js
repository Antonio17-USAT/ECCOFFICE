var htmlBarraLateral = /*html*/`
    <button class="S"><a href="pagina1.html">Perfil</a></button>
    <div class="menu-group">
        <button class="menu-btn dropdown-btn">Compras ▼</button>
        <div class="dropdown-content">
            <a href="subpagina1.html" class="submenu-btn">Detalle Pedido</a>
        </div>
    </div>
    <button class="S"><a href="">Lista de Deseos</a></button>
    <button class="S"><a href="pagina4.html">Devoluciones</a></button>
    <button class="S"><a href="pagina4.html">Configuración</a></button>
    
    
    <button class="close-sidebar btn btn-danger">✖ Cerrar</button>
`
document.getElementsByClassName('sidebar')[0].innerHTML = htmlBarraLateral