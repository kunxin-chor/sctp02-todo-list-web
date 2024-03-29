function createTask(todos, name, urgency) {

    const newTask = {
        // the purpose of the id is to give each task an unique identity
        // use a random number for simplicty's sake
        "id": Math.floor(Math.random() * 10000),
        "name": name,
        "urgency": urgency,
        "done": false
    }

    // add the new task to the array
    todos.push(newTask);
}

function updateTask(todos, id, newName, newUrgency) {
    let wantedTask = null;
    for (let t of todos) {
        if (t.id == id) {
            wantedTask = t;
            break;
        }
    }
    wantedTask.name = newName;
    wantedTask.urgency = newUrgency;
}

function deleteTask(todos, id) {
    // we need to find the index of the task that we want in delete in the todos array
    let wantedIndex = null;
    for (let i = 0; i < todos.length; i++) {
        // check if the id of the task that I want to delete
        // matches the id of the task currently indicated by index `i`.
        if (id == todos[i].id) {
            wantedIndex = i;
        }
    }
    if (wantedIndex) {
        // use .splice to delete an element from array
        // parameter 1: where to start deleting (aka which index to start deleting from)
        // parameter2 : how many to delete
        todos.splice(wantedIndex, 1);
    }
}
