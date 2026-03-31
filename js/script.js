document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', () => {
        const val = input.value.trim();
        if (val) {
            const li = document.createElement('li');
            li.innerHTML = `${val} <button onclick="this.parentElement.remove()">Delete</button>`;
            todoList.appendChild(li);
            input.value = '';
        }
    });
});