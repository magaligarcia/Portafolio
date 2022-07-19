
// RECARGA DE PAGINA PARA NUEVO JUEGO
var nuevoJuego = document.querySelector(".boton-nuevoJuego");
nuevoJuego.addEventListener("click", () => {
    window.location.reload();
});


// BOTON VOLVER ATRAS
var terminar = document.querySelector(".boton-terminar");
terminar.addEventListener("click", () => {
    location.href = "/ahorcado/ahorcado.html";
});


          
function inicializarCanvas(){
    var canvas = document.querySelector(".canvas");
            if (canvas && canvas.getContext) {
            var ctx = canvas.getContext("2d");
            iniciarOrca(ctx);
                 
            }
    
    }

// DIBUJAR HORCA
function iniciarOrca(ctx) {
    var canvas = document.querySelector(".canvas");
    var ctx = canvas.getContext("2d");
    var imagen = new Image();
    imagen.src = "/ahorcado/img/hangman01.png";
    imagen.onload = function(){
        ctx.drawImage(imagen, 0, 0, 400, 400);
      }   
}

function dibujarSoga(){
    var canvas = document.querySelector(".canvas");
    var ctx = canvas.getContext("2d");
    var imagen = new Image();
    imagen.src = "/ahorcado/img/hangman02.png";
    imagen.onload = function(){
        ctx.drawImage(imagen, 0, 0, 400, 400);
      }  
}

function dibujarCabeza(){
    var canvas = document.querySelector(".canvas");
    var ctx = canvas.getContext("2d");
    var imagen = new Image();
    imagen.src = "/ahorcado/img/hangman03.png";
    imagen.onload = function(){
        ctx.drawImage(imagen, 0, 0, 400, 400);
      }  
}

function dibujarTorso(){
    var canvas = document.querySelector(".canvas");
    var ctx = canvas.getContext("2d");
    var imagen = new Image();
    imagen.src = "/ahorcado/img/hangman04.png";
    imagen.onload = function(){
        ctx.drawImage(imagen, 0, 0, 400, 400);
      } 
}

function dibujarBrazoIzq(){
    var canvas = document.querySelector(".canvas");
    var ctx = canvas.getContext("2d");
    var imagen = new Image();
    imagen.src = "/ahorcado/img/hangman05.png";
    imagen.onload = function(){
        ctx.drawImage(imagen, 0, 0, 400, 400);
      }
}

function dibujarBrazoDer(){
    var canvas = document.querySelector(".canvas");
    var ctx = canvas.getContext("2d");
    var imagen = new Image();
    imagen.src = "/ahorcado/img/hangman06.png";
    imagen.onload = function(){
        ctx.drawImage(imagen, 0, 0, 400, 400);
      }
}

function dibujarPiernaDer(){
    var canvas = document.querySelector(".canvas");
    var ctx = canvas.getContext("2d");
    var imagen = new Image();
    imagen.src = "/ahorcado/img/hangman07.png";
    imagen.onload = function(){
        ctx.drawImage(imagen, 0, 0, 400, 400);
      }
}

function dibujarPiernaIzq(){
    var canvas = document.querySelector(".canvas");
    var ctx = canvas.getContext("2d");
    var imagen = new Image();
    imagen.src = "/ahorcado/img/hangman08.png";
    imagen.onload = function(){
        ctx.drawImage(imagen, 0, 0, 400, 400);
      }
}

function dibujarMuerto(){
    var canvas = document.querySelector(".canvas");
    var ctx = canvas.getContext("2d");
    var imagen = new Image();
    imagen.src = "/ahorcado/img/hangman09.png";
    imagen.onload = function(){
        ctx.drawImage(imagen, 0, 0, 400, 400);
      }
}

/////////////////////////////////////////////////////

// Llammos a la funcion que difujara la orca.
inicializarCanvas();


