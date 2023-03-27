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
		nombre.innerText = ("¡Por favor, seleccione algún tipo de perro!");
		resultado.appendChild(nombre);
	}
	else{
	// Llamar a la API
		fetch(`https://dog.ceo/api/breed/${razaPerro}/images/random`)
	  	.then(response => response.json())
	  	.then(data => {
       


		// Crear el elemento donde se mostrará la imagen
      	const imagen = document.createElement("img");
		// Agregar la imagen al elemento
        imagen.src = data.message;
		// Agregar el elemento al resultado
      	resultado.appendChild(imagen);

		// Crear el elemento donde se mostrará el nombre
		const nombre = document.createElement("p");	
		// Agregar el nombre al elemento
      	nombre.innerText = (descripcion(razaPerro));
		// Agregar el elemento al resultado	
        //resultado.appendChild(nombre);

        console.log(data);
    })
	  .catch(error => console.error(error));
	}
	
	function descripcion(razaPerro){
		if(razaPerro=='dingo'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El dingo es un perro salvaje que habita en Australia. Es un canide que se parece a un perro doméstico");
			resultado.appendChild(descripcion);
		}else if(razaPerro=='husky'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El husky es un perro de raza nórdica. Es un perro muy activo y sociable");
			resultado.appendChild(descripcion);
		}else if(razaPerro=='african'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El african es un perro de raza africana. Es un perro muy activo y sociable");
			resultado.appendChild(descripcion);
		}else if(razaPerro=='akita'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El akita es un perro de raza japonesa. Es un perro muy activo y sociable");
			resultado.appendChild(descripcion);
		}else if(razaPerro=='bulldog'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El bulldog es un perro de raza inglesa. Es un perro muy activo y sociable");
			resultado.appendChild(descripcion);
		}else if(razaPerro=='boxer'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El boxer es un perro de raza alemana. Es un perro muy amigable y consentido");
			resultado.appendChild(descripcion);
		}else if(razaPerro=='chow'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El chow es un perro de raza china. Este perro es muy peludo y amigable");
			resultado.appendChild(descripcion);
		}else if(razaPerro=='dhole'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El dhole es un perro de raza india. Este amigo es muy escurridizo y amigable");
			resultado.appendChild(descripcion);
		}else if(razaPerro=='doberman'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El doberman es un perro de raza alemana. Este perro es muy activo y amigable");
			resultado.appendChild(descripcion); }
		else if(razaPerro=='beagle'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El beagle es un perro de raza inglesa. Este perro es muy activo y amigable");
			resultado.appendChild(descripcion);
		}
		else if(razaPerro=='chihuahua'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El chihuahua es un perro de raza mexicana. Este perro es muy activo y amigable");
			resultado.appendChild(descripcion);
		}
		else if(razaPerro=='dalmatian'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El dalmatian es un perro de raza inglesa. Este perro es muy activo y amigable");
			resultado.appendChild(descripcion);
		}
		else if(razaPerro=='labrador'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El labrador es un perro de raza inglesa. Este perro es muy activo y amigable");
			resultado.appendChild(descripcion);
		}
		else if(razaPerro=='pitbull'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El pitbull es un perro de raza inglesa. Este perro es muy activo y amigable");
			resultado.appendChild(descripcion);
		}
		else if(razaPerro=='pug'){
			const descripcion = document.createElement("p");
			descripcion.innerText = ("El pug es un perro de raza inglesa. Este perro es muy activo y amigable");
			resultado.appendChild(descripcion);
		}
	
}
}


