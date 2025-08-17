let amigos = [];

//funcion agregar amigos a la lista

function agregarAmigo() {
//valores de lista
    let nombre = document.getElementById("nombreAmigo").value.trim();
    if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;// salir de la función
    }
//agregar nombre
amigos.push(nombre);
document.getElementById("nombreAmigo").value = "";
    mostrarListaAmigos();
//limpiar la entrada
LimpiarCaja();
}

//funcion mostrar lista de amigos

function mostrarListaAmigos(){

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
    let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function LimpiarCaja(){
    document.getElementById("nombreAmigo").value = "";
};
  
  // funcion para realizar sorteo
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres primero.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    resultado.textContent = "🎉 El amigo secreto es: " + amigoSecreto + " 🎉";
}
//arreglo consola
console.log(amigos);