const guardar_dato = () =>{
    const name = document.getElementById('inp_usuario').value
    localStorage.setItem("nombre",name)
    
}

const boton =document.getElementById('btn_mostrar')
boton.addEventListener("click",guardar_dato)