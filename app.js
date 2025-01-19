// Variable para almacenar los nombres de los amigos
let amigos = [];


// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    
    // Verifica que el nombre no esté vacío ni sea duplicado
    if (!nombre) {
        alert('Por favor, agrega un nombre válido.');
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert(`Este nombre ${amigos} ya ha sido agregado.`);
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
   // Limpiar resultados al agregar un nuevo nombre
    limpiarResultados(); 

    // Limpia el input después de agregar
    input.value = '';
}

// Función para actualizar la lista de amigos en el DOM
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    // Limpiar la lista anterior
    lista.innerHTML = ''; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para limpiar los resultados previos
function limpiarResultados() {
    const resultado = document.getElementById('resultado');
    // Limpiar resultados anteriores
    resultado.innerHTML = ''; 
}

// Función para realizar el sorteo de un solo amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, agrega al menos dos amigo para realizar el sorteo.');
        return;
    }

    // Seleccionar un amigo aleatoriamente de la lista
    const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado en el DOM
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `${amigoSeleccionado} ha sido seleccionado como el Amigo Secreto!`;
    
    // Limpiar la lista después de realizar el sorteo
    amigos = [];
    actualizarLista();
}



