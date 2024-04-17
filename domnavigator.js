//Cristina Claver

//  1.Registro de listeners de eventos del DOM
window.onload = function () {
    const casillas = document.querySelectorAll(".casilla"); 
    //añadir evento a cada casilla
    casillas.forEach(element => {
        element.addEventListener("click", TurnRed)
    });
}

function TurnRed(e){
    const casillaSelect = e.target;
    //cada vez que se clica una casilla, se borra el color rojo
    BorrarTodo();
    //consicionales para escojer el modo
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
        //se pintan de cada class 'linea' solo los hijos que coincide
        // con el indice de la casilla qeu se ha clicado
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
    //utilizo while en vez de foreach pq es un htmlelement
    while (casillasRojas.length > 0) {
        casillasRojas[0].classList.remove("casillaSel");
    }
}

