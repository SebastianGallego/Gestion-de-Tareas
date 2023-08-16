let tareasPendientes = [];
let tareasCompletadas = [];
let menuIngresado ; 


//function ejecutarTareas() {

  mostrarMenu();  
  menuIngresado =  prompt("ingrese una opción de Menú").toLowerCase(); 
 

  while (menuIngresado != "e") {  
     
    
    mostrarMenu();  
    menuIngresado = prompt("ingrese una opción de Menú").toLowerCase(); 
    
    if (menuIngresado == "a") {
      fncNuevaTarea();
    
    }

    if (menuIngresado == "b") {

      fncTareaCompletada();
    }

    if (menuIngresado == "c") {

      fncTareaPendientes();
    }

    if (menuIngresado == "d") {

      fncTareaCompletas();
    }


  //}

    
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
    console.log('Tarea agregada.');


  }


  function fncTareaCompletada() {

    
  }


  function fncTareaPendientes() {

    
  }


  function fncTareaCompletas() {

    
  }