let tareasPendientes = [];
let tareasCompletadas = [];
let menuIngresado = "inicio"; 


function ejecutarTareas() {

 
  while (menuIngresado != "e") {  
    
    mostrarMenu();  
    menuIngresado = prompt("ingrese una opción de Menú").toLowerCase(); 
    
    if (menuIngresado == "a") fncNuevaTarea(); 

    if (menuIngresado == "b") fncTareaCompletada(); 
    
    if (menuIngresado == "c") fncTareaPendientes(); 

    if (menuIngresado == "d") fncTareaCompletas();  
  }

    
}


function mostrarMenu() {
    console.log('Menú: Gestión de Tareas');
    console.log('a - Agregar nueva tarea');
    console.log('b - Marcar tarea como completada');
    console.log('c - Listar tareas pendientes');
    console.log('d - Listar tareas completadas');
    console.log('e - Salir del programa');
  }


      

  function fncNuevaTarea() {
    const tarea = prompt("Agregue nueva tarea: ");

    tareasPendientes.push(tarea); 
    console.clear();
    console.log('Tarea agregada.');


  }


  function fncTareaCompletada() {
      
      console.clear();
      console.log(tareasPendientes);
      const tarea = prompt("Ingrese la tarea completada: ");
    


  }


  function fncTareaPendientes() {
    console.clear();
    
    
    if (tareasPendientes.length <= 0) {
      console.log("No hay Tareas Pendientes");
    }
    else {
        console.log("Tareas Pendientes");
        for (let i = 0; i < tareasPendientes.length; i++) {
          console.log(tareasPendientes[i]); 
        
        }
    }
    
  }


  
  function fncTareaCompletas() {
    
    console.clear();
    if (tareasCompletadas.length <= 0) {
      console.log("No hay Tareas Completadas");
    }
    else {
        console.log("Tareas Completadas");
        for (let i = 0; i < tareasCompletadas.length; i++) {
          console.log(tareasCompletadas[i]); 
        
        }
    }
    
  }


  document.addEventListener('DOMContentLoaded', function () {
    ejecutarTareas();
  });