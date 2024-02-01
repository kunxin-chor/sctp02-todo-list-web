// main() is the entry point
function main() {
    let todos= [];  // this array will store all our todos


    // create some sample data to test displaying the list of tasks
    createTask(todos, "Walk the dog", "medium");
    createTask(todos, "Wash the car", "low");
    createTask(todos, "Clean the bathroom", "high");

    // display all the tasks for the first time
    renderTodos(todos);

    const addTodoButton = document.querySelector("#addTodo");
    addTodoButton.addEventListener("click", function(){
        const taskName = document.querySelector("#taskName").value;
        const taskUrgency = document.querySelector("#taskUrgency").value;
        createTask(todos, taskName, taskUrgency);

        // redraw the todo list so the most recent one can be shown
        renderTodos(todos);

    });
}

function renderTodos(todos) {
    const todoList = document.querySelector("#todoList");
    // remove any existing list items before showing all items again
    todoList.innerHTML = "";
    for (let t of todos) {
        console.log(t);
        // create a new element using document.createElement
        const listItem = document.createElement('li');
        listItem.classList.add("list-group-item");
        listItem.innerHTML=`${t.name} (${t.urgency})`

        // add the new element to the DOM:
        // -- append it as child of the ul#todoList
        todoList.appendChild(listItem);

    }
}

main();