class comentarioFormulario {
    constructor(nombre, apellido, edad, correo, telefono, direccion, ciudad, comentario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion; 
        this.ciudad = ciudad;
        this.comentario = comentario;
    }



enviarDatos(){
    this.nombre = document.getElementById("nombre").value;
    this.apellido = document.getElementById("apellido").value;
    this.edad = document.getElementById("edad").value;
    this.correo = document.getElementById("correo").value;
    this.telefono = document.getElementById("telefono").value;
    this.direccion = document.getElementById("direccion").value;
    this.ciudad = document.getElementById("ciudad").value;
    this.comentario = document.getElementById("comentario").value;

        if(this.nombre=="" || this.apellido=="" || this.edad=="" || this.correo=="" || this.telefono=="" || this.direccion=="" || this.ciudad=="" || this.comentario==""){
            alert("Todos los campos son obligatorios");
        }
        else{
            alert("Datos enviados correctamente");
            this.limpiarDatos();
        }  
    }

limpiarDatos() {

        if( this.nombre == "" || this.apellido == "" || this.edad == "" || this.correo == "" || this.telefono == "" || this.direccion == "" || this.ciudad == "" || this.comentario == ""){
            alert("No hay nada que limpiar");
        }else{
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("edad").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("telefono").value = "";
            document.getElementById("direccion").value = "";
            document.getElementById("ciudad").value = "";
            document.getElementById("comentario").value = "";
        }
    }

limpiarMensaje() {
        this.comentario = document.getElementById("comentario").value;
        if ( this.comentario == null || this.comentario == "" ) {
            alert("No hay nada para eliminar");
        } else {
            document.getElementById("comentario").value = "";
        }
    }
}
