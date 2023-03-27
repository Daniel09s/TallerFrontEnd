function enviarDatos() {
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let edad = document.getElementById("edad").value;   
let email = document.getElementById("email").value;
let telefono = document.getElementById("telefono").value;   
let direccion = document.getElementById("direccion").value;
let ciudad = document.getElementById("ciudad").value;
let comentario = document.getElementById("comentario").value;


if( nombre === "" || apellido === "" || edad === "" || telefono === "" || direccion === "" || ciudad === "" || comentario === ""){
    alert("Todos los campos son obligatorios");
}else{
    alert("Datos enviados correctamente");
    limpiarDatos();
}

}


function limpiarDatos() {
    if( nombre === "" || apellido === "" || edad === "" || telefono === "" || direccion === "" || ciudad === "" || comentario === ""){
        alert("No hay nada que limpiar");
    }else{
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("direccion").value = "";
        document.getElementById("ciudad").value = "";
        document.getElementById("comentario").value = "";
    }
}

function limpiarMensaje() {
    let comentario = document.getElementById("comentario").value;
    if (comentario == "" || comentario == null) {
        alert("No hay nada que limpiar");
    } else {
        document.getElementById("comentario").value = "";
    }
}

/*function validarCorreo(){
        var texto = document.getElementById("email").value;
        var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        
        if (!regex.test(texto)) {
            alert("El correo no es valido");
        } else {
          enviarDatos();
        }
    
    
}*/