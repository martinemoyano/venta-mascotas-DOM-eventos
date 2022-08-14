class mascota {
    constructor (id, nombre, raza, edad, precio) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.raza = raza;
        this.edad = parseInt(edad);
        this.precio = parseInt(precio);

    }
}

// LISTA ORIGINAL DE MASCOTAS
let mascotas = [];
mascotas.push(new mascota (1, "bobi", "bulldog", 3, 11000));
mascotas.push(new mascota (2, "firulai", "golden", 2, 9000));
mascotas.push(new mascota (3, "colita", "labrador", 6, 13000, ));
mascotas.push(new mascota (4, "toto", "poodle", 4, 6000));
mascotas.push(new mascota (5, "braulio", "pastor", 7, 16000));




// FUNCION 

  // PARA INGRESAR UNA MASCOTA NUEVA AL ARRAY
  let formulario = document.getElementById('ingresoMascota');
  ingresoMascota.addEventListener("submit", validarFormulario);
  
  function validarFormulario(ev) {
      ev.preventDefault();
      console.log('Formulario enviado');

let mascota = {
    id : document.getElementById('id').value,
    nombre : document.getElementById('nombre').value,
    raza : document.getElementById('raza').value,
    peso : document.getElementById('peso').value,
    precio : document.getElementById('precio').value,
}
    mascotas.push(mascota);
    document.querySelector('form').reset();
    
}

// FUNCIONA cantidad de mascotas
let botonCantidad = document.getElementById('btnCantidad')
botonCantidad.onclick = () => {
    let mensaje = `hay ${mascotas.length} mascotas disponibles`
    document.getElementById("cantidad").innerHTML = mensaje;
    console.log(mensaje);
}

// FUNCIONA  buscar por nombre pero sin mensaje cuando es incorrecto
let botonId = document.getElementById('btnId');
botonId.onclick = () => {
    let buscarId = document.getElementById('ingreseIdMascota').value;
    const resultado = mascotas.filter((mascota) => mascota.id == buscarId);
    let mensaje = (JSON.stringify(resultado));
    document.getElementById("porId").innerHTML = mensaje;
}

// FUNCIONA buscar por raza
let botonRaza = document.getElementById('btnRaza');
botonRaza.onclick = () => {
    let buscarPorRaza = document.getElementById('inputRaza').value;
    const resultado2 = mascotas.filter((mascota) => mascota.raza == buscarPorRaza);
    let mensaje = (JSON.stringify(resultado2));

    document.getElementById("porRaza").innerHTML = mensaje;

}
// PRUEBA MOSTRAR LISTA DE MASCOTAS
let botonLista = document.getElementById('btnLista');
botonLista.onclick =()=>{
const listaMascotas = document.getElementById('listaMascotas');
mascotas.forEach((mascota) = (mascota) => {
    let itemP = document.createElement('p');
    let itemPtext = document.createTextNode(` id: ${mascota.id} nombre: ${mascota.nombre}, raza: ${mascota.raza}`);
    itemP.appendChild(itemPtext);
    listaMascotas.appendChild(itemP);
})}