var htmlBarraLateral = /*html*/`
<h2>Menú</h2>
            <a href="pagina1.html" class="menu-btn">Página 1</a>
            <a href="pagina2.html" class="menu-btn">Página 2</a>
            <div class="menu-group">
                <button class="menu-btn dropdown-btn">Página 3 ▼</button>
                <div class="dropdown-content">
                    <a href="subpagina1.html" class="submenu-btn">Subpágina 3.1</a>
                    <a href="subpagina2.html" class="submenu-btn">Subpágina 3.2</a>
                </div>
            </div>
            <a href="pagina4.html" class="menu-btn">Página 4</a>
`
document.getElementsByClassName('sidebar')[0].innerHTML = htmlBarraLateral