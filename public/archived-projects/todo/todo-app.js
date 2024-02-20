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
    function createToDoItem(title, name) {
        let item = document.createElement('li')
        
        let itemText = document.createElement('h5')
        let buttonGroup = document.createElement('div')
        let doneButton = document.createElement('button')
        let deleteButton = document.createElement('button')

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        itemText.textContent = name
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
            let itemParent = item.parentNode

            item.classList.toggle('list-group-item-success')
            storage(title, itemParent)
        })
        deleteButton.addEventListener('click', () => {
            let itemParent = item.parentNode
            
            if (confirm('r u sure about that?')) {
                item.remove()
                storage(title, itemParent)
            }
        })

        return {
            item,
            itemText,
            doneButton,
            deleteButton
        };
    }

    function storage(title, todoList) {
        let storageList = []
        let todoListItems = todoList.children

        for (item of todoListItems) {
            let text = item.children[0].textContent
            let active = item.classList.contains('list-group-item-success')
            storageList.push({name: text, done: active})
        }

        localStorage.setItem(title, JSON.stringify(storageList))
    }
    

    function createTodoApp(container, title = 'Список дел', list = []) {

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createToDoItemForm();
        let todoList = createToDoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        
        if (list !== null) { 
            list.forEach(element => {
                let itemTitle = element.name
                let itemDone = element.done
                
                let todoItem = createToDoItem(title, itemTitle)

                if (itemDone) {
                    todoItem.item.classList.add('list-group-item-success')
                }
                
                todoList.append(todoItem.item)       
            });
        } else {
            list = []
        }

        todoItemForm.form.addEventListener('submit', function(e) {
            e.preventDefault();

            let todoItem = createToDoItem(title, todoItemForm.input.value)
            todoList.append(todoItem.item)

            todoItemForm.input.value = '';
            todoItemForm.button.disabled = true
            storage(title, todoList)
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

