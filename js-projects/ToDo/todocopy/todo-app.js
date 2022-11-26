(function() {
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title
        return appTitle
    }
    function createToDoItemForm() {
        let form = document.createElement('form')
        let input = document.createElement('input')
        let buttonWrapper = document.createElement('div')
        let button = document.createElement('button')

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.disabled = true
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button
        };
    }
    function createToDoList() {
        let list = document.createElement('ul')
        list.classList.add('list-group');
        return list;
    }
    function createToDoItemElement(todoItem, { onDone, onDelete }) {
        const doneClass = 'list-group-item-success'

        let item = document.createElement('li')
        
        let itemText = document.createElement('h5')
        let buttonGroup = document.createElement('div')
        let doneButton = document.createElement('button')
        let deleteButton = document.createElement('button')

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        if (todoItem.done) {
            item.classList.add(doneClass)
        }


        itemText.textContent = todoItem.name
        itemText.style.margin = 0

        buttonGroup.classList.add('btn-group', 'btn-group-sm')
        doneButton.classList.add('btn', 'btn-success')
        doneButton.textContent = 'Done'
        deleteButton.classList.add('btn', 'btn-danger')
        deleteButton.textContent = 'Delete'
        
        buttonGroup.append(doneButton)
        buttonGroup.append(deleteButton)
        item.append(itemText)
        item.append(buttonGroup)

        doneButton.addEventListener('click', () => {
            onDone(todoItem)
            item.classList.toggle(doneClass, todoItem.done)
        
        })
        deleteButton.addEventListener('click', () => {       
            onDelete({todoItem, element: item})
        })

        return item
    }

    async function createTodoApp(container, title) {

        const todoAppTitle = createAppTitle(title);
        const todoItemForm = createToDoItemForm();
        const todoList = createToDoList();
        const handlers = {
            onDone(todoItem) {
                todoItem.done = !todoItem.done 
                fetch(`http://localhost:3000/api/todos/${todoItem.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({ done: todoItem.done }),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
            },
            onDelete({todoItem, element}) {
                if (!confirm('r u sure?')) {
                    return;
                }
                element.remove();
                fetch(`http://localhost:3000/api/todos/${todoItem.id}`, {
                    method: 'DELETE'
                })
            }
        };

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        const response = await fetch(`http://localhost:3000/api/todos?owner=${title}`);
        const todoItemList = await response.json();

        todoItemList.forEach(todoItem => {
            const todoItemElement = createToDoItemElement(todoItem, handlers)
            todoList.append(todoItemElement)
        });


        todoItemForm.form.addEventListener('submit', async e => {
            e.preventDefault();

            const response = await fetch('http://localhost:3000/api/todos', {
                method: 'POST',
                body: JSON.stringify({
                    name: todoItemForm.input.value.trim(),
                    owner: title
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const todoItem = await response.json()

            let todoItemElement = createToDoItemElement(todoItem, handlers)
            todoList.append(todoItemElement)

            todoItemForm.input.value = '';
            todoItemForm.button.disabled = true
        
        })

        todoItemForm.input.addEventListener('input', ()=> {
            if (todoItemForm.input.value) {
                todoItemForm.button.disabled = false
            } else {
                todoItemForm.button.disabled = true
            }
        })            
    }

    window.createTodoApp = createTodoApp;
})();

