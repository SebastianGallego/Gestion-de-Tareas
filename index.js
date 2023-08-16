let tareasPendientes = [];
let tareasCompletadas = [];
let menuIngresado ; 


function ejecutarTareas() {

  mostrarMenu();  
  menuIngresado =  prompt("ingrese una opción de Menú").toLowerCase(); 
 

  while (menuIngresado != "e") {  
     
    console.clear();
    mostrarMenu();  
    menuIngresado = prompt("ingrese una opción de Menú").toLowerCase(); 
    
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


      

   
