let inputTarea = document.getElementById('tarea');
let botonAñadir = document.getElementById('añadir');
let tareasAñadidas = document.getElementById('tareas');
let sinTareas = document.getElementById('vacio');

botonAñadir.addEventListener('click', (e) => {
    e.preventDefault();
    
    let texto = inputTarea.value;

    let listaT = document.createElement('li');
    let parrafoT = document.createElement('p');
    parrafoT.textContent = texto;

    listaT.appendChild(parrafoT);
    listaT.appendChild(BotonBorrar());
    tareasAñadidas.append(listaT);

    inputTarea.value = '';
    sinTareas.style.display = 'none';
});

function BotonBorrar(){
    let borrar = document.createElement('button');

    borrar.textContent = 'X';
    borrar.className= 'Borrado';

    borrar.addEventListener('click', (e) =>{
        let item = e.target.parentElement;
        tareasAñadidas.removeChild(item)

        let items = document.querySelectorAll('li');
        
        if (items.length === 0){
            sinTareas.style.display = 'block'
        }
    });
    return borrar;
}