
var botonGuardar = document.querySelector(".boton-agregar");
var mensajeOculto = document.querySelector(".contenedor-3");
var botonVolver = document.querySelector(".boton-volver");

botonGuardar.addEventListener("click", () => {
    var nuevaPalabra = document.getElementById("input");
    var correcto = true;
    var mensaje = nuevaPalabra.value.toUpperCase();
    letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    for ( var i = 0; i < mensaje.length; i++) {
        if (letras.indexOf(mensaje[i]) == -1) {
            correcto = false;
            break;
        }
    }

    if (mensaje.length === 0 || !correcto) {
        mensajeOculto.style.display = "flex";
        mensajeOculto.style.position = "absolute";
    }
    else {
        palabrasOcultas.push(mensaje);
    }
});

mensajeOculto.addEventListener("click", () => {
    mensajeOculto.style.display = "none";
    input.value = "";
    input.focus();
});

botonVolver.addEventListener("click", () => {
    location.href = "/ahorcado/ahorcado.html";
});


