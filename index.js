var boton = document.getElementById('botonModal');
var botonDeCierre = document.getElementById('botonCerrarModal');
var agarrarModal = document.getElementById('modalWraper');
var cerrarModal = document.getElementById('cruz');
var guardarModal = document.getElementById('botonGuardarModal');

boton.onclick = function() {
    agarrarModal.classList.remove('displayNone');
    boton.classList.add('displayNone');
}

// botonDeCierre.onclick = function() {
//     agarrarModal.classList.add('displayNone')
//     boton.classList.remove('displayNone');
// }

cerrarModal.onclick = function() {
    agarrarModal.classList.add('displayNone')
    boton.classList.remove('displayNone')
    boton.innerHTML = 'Te quiero 🖤';
}

// guardarModal.onclick = function() {
//     agarrarModal.classList.add('displayNone')
//     boton.classList.remove('displayNone');
// }

