
let mensajeValido = false;

//====================================================
// Boton ENCRIPTAR mensaje, verifica que el campo no
//  este vacio y llama las funciones que verifican 
//          las condiciones a cumplir
//====================================================

function botonEncriptar(){
    var textoIngresado = document.getElementById("textarea").value;
    if(textoIngresado == ""){
        document.getElementById("msg").placeholder = "Primero debes escribir un mensaje";
    }else{
        validarSoloMinusculas()
        if(mensajeValido){
            codificar();
        }
    }
}

//======================================================
// Boton DESENCRIPTAR mensaje, verifica que el campo no
//  este vacio y llama las funciones que verifican 
//          las condiciones a cumplir
//======================================================
function botonDesencriptar(){
    var textoIngresado = document.getElementById("textarea").value;
    if(textoIngresado == ""){
        document.getElementById("msg").placeholder = "Primero debes escribir un mensaje";
    }else{
      validarSoloMinusculas();
      if(mensajeValido){
          descodificar();
      }
    }
    
  }

//====================================================
// Valida que solo se ingresen minúsculas
//====================================================

function validarSoloMinusculas(){
    let textoIngresado = document.getElementById("textarea").value;
    let mayusculas = /[A-Z]/g;
    let resultado = mayusculas.test(textoIngresado);

    if(resultado ==  false){
        validarSoloLetras();
    } else {
        document.getElementById("msg").placeholder = "El mensaje no puede contener mayúsculas";
    }
}

//====================================================
// Valida que no se ingresen números
//====================================================
function validarSoloLetras(){
    let textoIngresado = document.getElementById("textarea").value;
    let digito = /[0-9]/g;
    let resultado = digito.test(textoIngresado);

    if(resultado == false){
        validarSinCaracteresEspeciales();
    } else {
        document.getElementById("msg").placeholder = "El mensaje no puede contener números";
    }
}

//====================================================
// Valida que no se ingresen caracteres especiales
//====================================================
function validarSinCaracteresEspeciales(){
    let textoIngresado = document.getElementById("textarea").value;
    let caracterEspeciales = /[^a-z0-9\s]/g;
    let resultado = caracterEspeciales.test(textoIngresado);

    if(resultado == false){
        mensajeValido = true;
    } else {
        document.getElementById("msg").placeholder = "El mensaje no puede contener caracteres especiales";
    }
}

//====================================================
// Codifica el mensaje ingresado
//====================================================
function codificar(){
    let textoIngresado= document.getElementById("textarea").value;
    let codificado = textoIngresado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat" );
    document.getElementById("msg").value = codificado;
    document.getElementById("textarea").value = " ";
}

//====================================================
// Descodifica el mensaje ingresado
//====================================================
function descodificar(){
    let textoIngresado= document.getElementById("textarea").value;
    let decodificado = textoIngresado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u" ); 
    document.getElementById("msg").value = decodificado;
    document.getElementById("textarea").value = " ";
}

//====================================================
// Boton COPIAR mensaje
//====================================================
function copiar(){
    var copiar= document.getElementById("msg");
    copiar.select();
    copiar.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiar.value);
}
