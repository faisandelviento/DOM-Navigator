// Constantes globales
const anchoTablero = 8;
const altoTablero = 8;

//como hacer la ruta
//control de teclado
//key.down  prevent default para que no baje la pantalla con la barra, tambien existe el stoppropagation()(para evetar la efervescencia)

// Método window.onload
// Añadir aquí solamente:
//  1.Registro de listeners de eventos del DOM
window.onload = function () {
    const casillas = document.querySelectorAll(".casilla"); 
    casillas.forEach(element => {
        element.addEventListener("click", TurnRed)
    });
}

function TurnRed(e){
    const casillaSelect = e.target;
    BorrarTodo();
    if (document.querySelector('input[id="modoCasilla"]').checked){
        casillaSelect.classList.add("casillaSel");
        ChangePath(casillaSelect);
    }else if (document.querySelector('input[id="modoFila"]').checked) {
        const contenidolinea =Array.from(casillaSelect.parentElement.children);
        contenidolinea.forEach(casilla => {
            casilla.classList.add("casillaSel"); 
        })  
        ChangePath(casillaSelect.parentElement);
    } else if(document.querySelector('input[id="modoCol"]').checked) {
        let indice = Array.from(casillaSelect.parentElement.children).indexOf(casillaSelect);
        const allLineas = document.querySelectorAll(".linea")
        allLineas.forEach(linea => {
            linea.children[indice].classList.add("casillaSel");             
        });
    }
}
function ChangePath(elemento) {
    let updatedPath = '';
    while (elemento) {
        updatedPath = elemento.nodeName + '.' + elemento.classList + ' > ' + updatedPath;
        elemento = elemento.parentElement;
    }
    const pathElement = document.querySelector("#nodePath");
    pathElement.innerHTML = '<b>Node path: </b>'+updatedPath;
}

function BorrarTodo() {
    const casillasRojas = document.getElementsByClassName("casillaSel");
    while (casillasRojas.length > 0) {
        casillasRojas[0].classList.remove("casillaSel");
    }
}

