// Variables globales
let tasks = [];  // Array donde se guardan las tareas.
const taskInput = document.getElementById("taskInput");  // Elemento de entrada para la tarea.
const taskList = document.getElementById("taskList");  // Contenedor donde se muestran las tareas.
const addTaskBtn = document.getElementById("addTaskBtn");  // Botón para agregar tarea.
const clearCompletedBtn = document.getElementById("clearCompletedBtn");  // Botón para limpiar tareas completadas.
const clearAllBtn = document.getElementById("clearAllBtn"); 

// Función para agregar tarea
function addTask() {
    const taskText = taskInput.value.trim();  // Obtiene el valor de la entrada, eliminando espacios en blanco.
    if (taskText !== "") {  // Si no está vacío, agrega la tarea.
        tasks.push({ text: taskText, completed: false });  // Agrega una nueva tarea al array `tasks` con el texto y estado de completado.
        taskInput.value = "";  // Limpia el campo de entrada.
        displayTasks();  // Muestra las tareas actualizadas.
    }
}

// Función para mostrar las tareas
function displayTasks() {
    taskList.innerHTML = "";  // Limpia la lista de tareas en el HTML.
    tasks.forEach((task, index) => {  // Itera sobre cada tarea en el array.
        const li = document.createElement("li");  // Crea un nuevo elemento <li>.
        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>  <!-- Casilla de verificación -->
            <label for="task-${index}">${task.text}</label>  <!-- Texto de la tarea -->
        `;
        // Asocia un event listener al checkbox para cambiar el estado de la tarea.
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);  // Agrega el nuevo <li> a la lista de tareas en el HTML.
    });
}

// Función para alternar el estado de una tarea
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;  // Alterna el valor de `completed` de la tarea.
    displayTasks();  // Vuelve a mostrar las tareas actualizadas.
}

// Función para limpiar tareas completadas
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);  // Filtra las tareas para eliminar las que están marcadas como completadas.
    displayTasks();  // Muestra las tareas restantes.
}

function clearAllTasks() {
    tasks = [];  // Vacía el array de tareas
    displayTasks();  // Vuelve a mostrar las tareas (que estarán vacías)
}

// Agregar los event listeners a los botones
addTaskBtn.addEventListener("click", addTask);  // Cuando se hace clic en "Agregar Tarea", se ejecuta la función `addTask`.
clearCompletedBtn.addEventListener("click", clearCompletedTasks);  // Cuando se hace clic en "Limpiar Completadas", se ejecuta `clearCompletedTasks`.
clearAllBtn.addEventListener("click", clearAllTasks);