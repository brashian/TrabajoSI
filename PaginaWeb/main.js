
const mostra_nombre = () => {
    //succiono datos del almacen local, con su
    let nombre = localStorage.getItem('nombre')
    document.getElementById("h_nombre").textContent = `Welcome User - ${nombre}`
}
//Evento onload, al cargar ejecuta la funcion mostra_nombre
document.getElementById("body_focus").onload = mostra_nombre()

const cambio_idiomas = () => {
    let language = document.getElementById('option').value

    if (language=="eng") {
        location.href='maineng.html'
    }else{
        
            location.href='main.html'
        
    }

}
const idiomas = document.getElementById('option')
idiomas.addEventListener('change',cambio_idiomas)

