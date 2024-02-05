// We need 1) JSON BIN ID and the base JSON BIN API URL
const BIN_ID="65c05860dc74654018a05f54";
const BASE_JSON_BIN_URL="https://api.jsonbin.io/v3/b";
// not a good idea to embed the master key in data.js
const MASTER_KEY="$2a$10$EZfkhAp55cb1nD3GBqXbaeHPg.9VYRj2u4mWKFwEIbVtER1wGdiNy";

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

async function loadTasks() {
    const response = await axios.get(`${BASE_JSON_BIN_URL}/${BIN_ID}/latest`);
    console.log(response.data);
    return response.data.record;
}

async function saveTasks(todos) {
    // first parameter: the URL (aka the endpoint)
    // second parameter: new data which will overrwrite the existing one
    // third parameter: header options (stores meta data)
    const response = await axios.put(`${BASE_JSON_BIN_URL}/${BIN_ID}`, todos,{
        'Content-Type':"application/json",  // inform JSON BIN API that we are sending something in JSON format
        'X-Master-Key': MASTER_KEY, // provide the credientals to update the JSON BIN
    })
    return response.data;
}
