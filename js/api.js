function buscar() {
	// Obtener el valor del input
	const razaPerro = document.getElementById("raza").value;
	// Obtener el elemento donde se mostrará el resultado
	const resultado = document.getElementById("resultado");
	resultado.innerHTML = "";
	if (razaPerro == "") {
		// Mostrar un mensaje de error
		const nombre = document.createElement("p");
		nombre.setAttribute("id", "id");
		nombre.innerText = ("Por favor, ingrese una raza para mostrar.");
		resultado.appendChild(nombre);
	}
	else{
	// Llamar a la API
		fetch(`https://dog.ceo/api/breed/${razaPerro}/images/random`)
	  	.then(response => response.json())
	  	.then(data => {
       
		// Crear el elemento donde se mostrará el nombre
      	const nombre = document.createElement("p");
		// Agregar el nombre al elemento
      	nombre.innerText = (razaPerro);
		// Agregar el elemento al resultado	
        resultado.appendChild(nombre);

		// Crear el elemento donde se mostrará la imagen
      	const imagen = document.createElement("img");
		// Agregar la imagen al elemento
        imagen.src = data.message;
		// Agregar el elemento al resultado
      	resultado.appendChild(imagen);

        console.log(data);
    })
	  .catch(error => console.error(error));
	}
	
	
	
}





