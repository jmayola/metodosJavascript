//metodo 2 unshift
//
//Funcion para ingresar las peliculas nuevas primero
let arr = [
  { nombre: "peña reverb", estreno: "3/7" },
  { nombre: "titanic 2", estreno: "26/6}" },
];
let nuevaPeli = { nombre: "muzka 2", estreno: "15/7" };
function agregarPelicula(array, nuevaPeli) {
  array.unshift(nuevaPeli);
  return array;
}
console.log(agregarPelicula(arr, nuevaPeli));

//metodo 3 pop
//
//Function para eliminar las peliculas que dejan de ser estrenos
function eliminarCatalog(array) {
  array.pop();
  return array;
}
console.log(eliminarCatalog(arr));

//metodo 4 shift
//
//Funcion para eliminar personas de una reserva de un restaurante.
let reservas = [
  { mesa: 1, nombre: "juan" },
  { mesa: 2, nombre: "carlos" },
  { mesa: 3, nombre: "peña" },
];
function eliminarReserva(reserva) {
  return reserva.shift();
}
eliminarReserva(reservas);
console.log(reservas);

//metodo 5 splice
//
//funcion para insertar nuevas notas en un orden especifico
let notas = [
  { nota: "regar las plantas" },
  { nota: "cocinar" },
  { nota: "bañarse" },
];
function agregarPrioridad(notas, nuevaNota, prioridad) {
  return notas.splice(prioridad, 0, { nota: nuevaNota });
}
agregarPrioridad(notas, "darle de comer al perro", 3);
console.log(notas);

//metodo 6 reverse
//
//funcion para invertir el orden de prioridades de las notas
function invertirPrioridad(notas) {
  return notas.reverse();
}
console.log(invertirPrioridad(notas));

//metodo 7 sort
//
//funcion para ordenar nombres alfabeticamente
let nombres = ["peña", "roman", "jose", "alfredo"];
function ordenarNombres(nombres) {
  return nombres.sort();
}
console.log(ordenarNombres(nombres));

//metodo 8 fill
//
//funcion para dejar vacante un lugar para nuevas notas.
let tareas = [
  { nota: "regar las plantas", completado: "incompleto" },
  { nota: "cocinar", completado: "incompleto" },
  { nota: "bañarse", completado: "completo" },
  { nota: "regar las plantas", completado: "incompleto" },
  { nota: "bañarse", completado: "completo" },
];
function quitarNota(notas) {
  let notasNuevas = [];
  notas.map((item, i) => {
    if (notas[i]["completado"] == "completo") {
      notasNuevas = notas.fill("tarea terminada", i, i + 1);
    }
  });
  return notasNuevas;
}
console.log(quitarNota(tareas));

// metodo 9 map
//
// Funcion para agregar el estado civil a cada persona
function estadoCivil(nombre) {
  let nombresEx = [];
  nombre.map((item, i) => {
    if (i % 2 == 0) {
      nombresEx[i] = { nombre: item, "Est.Civil": "Soltero" };
    } else {
      nombresEx[i] = { nombre: item, "Est.Civil": "Casado" };
    }
  });
  return nombresEx;
}
console.log(estadoCivil(nombres));

// metodo 10 filter
//
// funcion para filtrar por personas casadas

function personasCasadas(nombresEx) {
  let anillo = [];
  anillo = nombresEx.filter((item) =>
    item["Est.Civil"] == "Casado" ? true : false
  );
  return anillo;
}
console.log(personasCasadas(estadoCivil(nombres)));

// metodo 11 slice
//
// Funcion para tomar los determinada cantidad de datos de una tabla

function lessData(data) {
  return data.slice(0, 10);
}

// metodo 12
//
// funciona para combinar los empleados obtenidos tras ser comprados por una multinacional

let empleados = [
  { nombre: "Juan", dni: 47828123, sector: "A" },
  { nombre: "Carlos", dni: 26828123, sector: "A" },
  { nombre: "Peña", dni: 97828123, sector: "A" },
];

let nuevosEmpleados = [
  { nombre: "Damian", dni: 95828123, sector: "B" },
  { nombre: "Abigail", dni: 46828123, sector: "B" },
  { nombre: "Merentiel", dni: 57816123, sector: "B" },
];

function fusion(empleados,nuevosEmpleados){
	return empleados.concat(nuevosEmpleados)
}
console.log(fusion(empleados,nuevosEmpleados))

// metodo 13 y 23, map y forEach
//
// funcion para saber los permisos de un usuario sobre archivos

let passwd = [{name: "mayola", permissions:[[ 1, 1, 1 ], [ 1, 1, 1 ],[ 1, 1, 1 ]]},{name: "diego", permissions:[[ 1, 1, 1 ], [ 0, 0, 0 ],[ 1, 0, 1 ]]},{name: "peña", permissions:[[ 1, 1, 0 ], [ 1, 1, 1 ],[ 1, 1, 1 ]]}]
function getPermissions(archive,name){
	let perms = []
	archive.forEach((item)=>item["name"] == name ? perms = item["permissions"].flat() : false)
	let owner = decode(perms.slice(0,3))
	let group = decode(perms.slice(3,6))
	let other = decode(perms.slice(6,9))
	return owner+group+other
}
function decode(codec){
	let decodec = ""
	codec.map((item,i)=>{
		if(item == 1){
			switch(i){
				case 0:
					decodec += "r"
					break
				case 1:
					decodec += "w"
					break
				case 2:
					decodec += "x"
					break
			}
		}
		else{
			decodec += "-"
		}
	})
	return decodec
}
console.log(getPermissions(passwd,"mayola"))
console.log(getPermissions(passwd,"peña"))
console.log(getPermissions(passwd,"diego"))

// metodo 14