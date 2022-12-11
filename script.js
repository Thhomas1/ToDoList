const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//creamos las constantes para los datesssssssss

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric'} );
    dateText.textContent = date.toLocaleString('es', { weekday: 'long'} );
    dateMonth.textContent = date.toLocaleString('es', { month: 'short'} ); // por ejemplo aca utilizamos el metodo short para que no aparezca gigante lo del month!!
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric'} );
}; // establecemo

const addNewTask = event  => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');  // creadas las clases para los estilos css
    task.addEventListener('click', changeTaskState) // addeventlistener para llamar a la funcion una vez que le damos click
    task.textContent = value; // el texto que ingreso el usuario *su value 
    tasksContainer.prepend(task); // prepend = al principio de la lista // ( asi se habilita la creacion de elementos por encima de los otros  )
    event.target.reset(); // para resetear la lista
};

const changeTaskState = event => {
    event.target.classList.toggle('done');

}; /* constante creada para cambiar el estado de las tareas  
     (toggle para agg o sacar clase done) 
     esto lo hacemos para cambiar el estado de nuestras tareas  */

     const order = () => {
        const done = [];
        const toDo = [];
        tasksContainer.childNodes.forEach( el => {
            el.classList.contains('done') ? done.push(el) : toDo.push(el)
        }) // si el elemento esta done, agregar el push y sino se agg el array to do para pushear y agregar asi el elemento al final del array
        return[...toDo, ...done]; // *tareas en orden = primero el to do y luego el done  ((generamos un array ordenado))

     } // dos arrays para dividir las tareas hechas y por hacer

     const renderOrderedTasks = () => {
        order().forEach(el => tasksContainer.appendChild(el))

     } // llama al boton ordenar // se toma el elemento y se pone uno por uno en el taskcontainer


// *llamamos a la funcion !!!

setDate();