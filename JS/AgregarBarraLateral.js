var htmlBarraLateral = /*html*/`
    <button class="S"><a href="perfilNuevo.html">Perfil</a></button>
    <div class="menu-group">
        <button class="menu-btn dropdown-btn"><a href="compras.html">Compras ▼</a></button>
        <div class="dropdown-content">
            <a href="Detalle-pedido.html" class="submenu-btn">Detalle Pedido</a>
        </div>
    </div>
    <button class="S"><a href="listaDeseos.html">Lista de Deseos</a></button>
    <button class="S"><a href="devoluciones.html">Devoluciones</a></button>
    <button class="S"><a href="configuracion.html">Configuración</a></button>
    <div>
        <input type="date" id="fecha" name="fecha"> 
    </div>
    
    <button class="close-sidebar btn btn-danger">✖ Cerrar</button>
    
`
document.getElementsByClassName('sidebar')[0].innerHTML = htmlBarraLateral