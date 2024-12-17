// Sélection des éléments DOM
let form = document.getElementById('todoform');
let todolist = document.getElementById('listtodo');

// Centralisation de la gestion du localStorage
function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Initialisation des variables
let todos = getTodos();
let isEditing = false;
let currentEditId = null;

// Affichage des tâches
function renderTodos() {
    todolist.innerHTML = ""; // Vide la liste
    todos.forEach(todo => {
        todolist.innerHTML += `
            <tr>
                <td>Titre: ${todo.title}</td>
                <td>Date: ${todo.date}</td>
                <td>Description: ${todo.desc}</td>
                <td>
                    <button onclick="edit('${todo.id}')">✏️</button>
                    <button onclick="erase('${todo.id}')">🗑️</button>
                </td>
            </tr>
        `;
    });
}

// Ajout ou édition de tâche
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const inputs = form.elements;

    const newTodo = {
        id: currentEditId || Date.now(), // Utilise un identifiant unique
        title: inputs.title.value.trim(),
        date: inputs.date.value,
        desc: inputs.description.value.trim(),
    };
    console.log("edit", isEditing)
    if (!isEditing) {
        // Mode ajout
        todos.push(newTodo);
    } else {
        // Mode édition
        todos = todos.map(todo => (todo.id == currentEditId ? newTodo : todo));
        isEditing = false;
        currentEditId = null;
    }

    saveTodos(todos);
    renderTodos();
    form.reset(); // Réinitialise le formulaire
});

// Fonction pour éditer une tâche
function edit(id) {
    const todo = todos.find(t => t.id == id);
    if (todo) {
        form.elements.title.value = todo.title;
        form.elements.date.value = todo.date;
        form.elements.description.value = todo.desc;

        isEditing = true;
        currentEditId = id;
    }
}

// Fonction pour supprimer une tâche
function erase(id) {
    todos = todos.filter(todo => todo.id != id);
    saveTodos(todos);
    renderTodos();
}

// Appel initial
renderTodos();
