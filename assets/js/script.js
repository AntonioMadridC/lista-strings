// array para insertar
let equipo = []

//identificar elementos del html
let listado = document.getElementById("equipo")
let btnBorrar = document.getElementById("btn-borrar")
let btnAgregar = document.getElementById("btn-agregar")
let borrar = document.getElementById("borrar")
let agregar = document.getElementById("agregar")

btnAgregar.addEventListener("click", function() {
    let add = agregar.value;
    equipo.push(add)
    agregar.value = ""
    let contenido = equipo.join(", ")
    listado.innerHTML = contenido

})

btnBorrar.addEventListener("click", function() {
    let take = borrar.value;
    if (equipo.includes(take)) {
        equipo.splice(equipo.indexOf(take) , 1)
    }
    borrar.value = ""
    let contenido = equipo.join(", ")
    listado.innerHTML = contenido

})