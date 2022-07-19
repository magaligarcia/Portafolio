//---------------------------------  SONIDOS  ----------------------------------//

const nooseSound = new Audio('/ahorcado/sound/chirrido_soga_cut.mp3'); //----------  HORCA CHIRRIDO  ----------//
const buttonSound = new Audio('/ahorcado/sound/button-click.mp3'); //----------  CLICK EN EL BOTON  ----------//

nooseSound.load();
nooseSound.play();

// var buttonSound = document.getElementById("button-sound");
//---------------------------------  CAPTURADOR DE CLICK  ----------------------------------//
var botonIniciarJuego = document.querySelector("#iniciar-juego"); 
botonIniciarJuego.addEventListener("click", function (event) {  //----------  CLICK EN EL BOTON "INICIAR JUEGO" ----------//
    
    buttonSound.load(); 
    buttonSound.play();
    
    location.href='/ahorcado/iniciarJuego.html'
})

var botonNuevaPalabra = document.querySelector("#nueva-palabra"); 
botonNuevaPalabra.addEventListener("click", function (event) {  //----------  CLICK EN EL BOTON "INICIAR JUEGO" ----------//
    
    buttonSound.load(); 
    buttonSound.play();
    
    location.href='/ahorcado/agregarNuevaPalabra.html'
})