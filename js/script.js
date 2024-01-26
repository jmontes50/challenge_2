import { saveTasks, deleteTask } from "./persistencia.js";

// Puedes utilizar esta función para generar un identificador único basado en la fecha
function generateUniqueId() {
    // Obtener la fecha actual como un número 
    const timestamp = new Date().getTime();
    // Convertir el timestamp a un string , lo retorna ya como texto
    return timestamp.toString();
  }

// Arreglo para almacenar las tareas
const tasks = [];

//la idea es que usando la función generateUniqueId guardes en tasks cada tarea con el siguiente formato:
/**
 * const tasks = [
 *  {
 *      id:timestamp Generado,
 *      task:"Comprar pollo",
 *      nombre:"Jorge"
 *  },
 * {
 *      id:timestamp Generado,
 *      task:"Correr",
 *      nombre:"Jorge"
 *  }
 * ];
 */

// Función para agregar una nueva tarea
// 1. Obtener elementos del DOM (Input y Botón)
// 2. Escuchar el evento del botón para agregar tarea
// 3. Obtener el valor del input y agregarlo al arreglo
// 4. Llamar a una función para actualizar la lista de tareas en el DOM

// Función para eliminar una tarea
// 1. Obtener elementos del DOM (Lista de tareas)
// 2. Escuchar el evento de clic en la lista
// 3. Identificar la tarea seleccionada y eliminarla del arreglo
// 4. Llamar a una función para actualizar la lista de tareas en el DOM

// Función para actualizar la lista de tareas en el DOM
// 1. Obtener el elemento de la lista de tareas del DOM
// 2. Limpiar el contenido actual de la lista
// 3. Iterar sobre el arreglo de tareas y agregar cada tarea como un nuevo elemento de la lista