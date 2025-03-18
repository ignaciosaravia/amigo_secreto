// Array para almacenar los nombres de los amigos
const listaDeAmigos = [];
// Referencias a elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigosElement = document.getElementById('listaAmigos');
const resultadoElement = document.getElementById('resultado');

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Obtener el valor del input y eliminar espacios en blanco al inicio y final
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    // Validar que el nombre no exista ya en la lista (case-insensitive)
    if (listaDeAmigos.some(amigo => amigo.toLowerCase() === nombreAmigo.toLowerCase())) {
        alert('Este amigo ya está en la lista');
        return;
    }
    
    // Añadir el nombre a la lista
    listaDeAmigos.push(nombreAmigo);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    actualizarListaAmigos();
    
    // Enfocar el input para seguir añadiendo
    inputAmigo.focus();
}

/**
 * Función para actualizar la visualización de la lista de amigos
 */
function actualizarListaAmigos() {
    // Limpiar la lista actual
    listaAmigosElement.innerHTML = '';
    
    // Crear elementos de lista para cada amigo
    listaDeAmigos.forEach((amigo) => {
        const elementoLista = document.createElement('li');
        elementoLista.className = 'name-item';
        elementoLista.textContent = amigo;
        
        // Añadir el item a la lista
        listaAmigosElement.appendChild(elementoLista);
    });
}

/**
 * Función para sortear un amigo secreto aleatorio
 */
function sortearAmigo() {
    // Validar que haya participantes
    if (listaDeAmigos.length < 1) {
        alert('Necesitas al menos un participante para realizar el sorteo');
        return;
    }
    
    // Limpiar resultados anteriores
    resultadoElement.innerHTML = '';
    
    // Elegir un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    // Crear elemento para mostrar el resultado
    const elementoResultado = document.createElement('li');
    elementoResultado.className = 'result-item';
    elementoResultado.style.color = 'green';
    elementoResultado.style.fontWeight = 'bold';
    elementoResultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    
    // Añadir el resultado a la lista
    resultadoElement.appendChild(elementoResultado);
    
    // Desplazar la página para mostrar el resultado
    resultadoElement.scrollIntoView({ behavior: 'smooth' });
}

// Añadir evento para permitir agregar amigo al presionar Enter en el input
inputAmigo.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        agregarAmigo();
    }
});