
const mostra_nombre = () => {

    let nombre = localStorage.getItem('nombre')
    document.getElementById("h_nombre").textContent = `Welcome User - ${nombre}`
}
//Evento onload, al cargar ejecuta la funcion mostra_nombre
document.getElementById("body_focus").onload = mostra_nombre()
