function leerTexto() {
    escrito = prompt("Escribe el nombre");
    return escrito;
}

function escribirTexto(id, texto) {
    document.getElementById(id).innerHTML = texto;
}