$(function() {
    LoadTitle()
    LoadToDo()
});

function LoadTitle() {
    var TitleElement = document.querySelector('.Title');

    // Title
    var TitleTextArea = document.createElement('textarea');
    TitleTextArea.value = TitleElement.getAttribute('data-text');
    TitleTextArea.className = 'Title';
    TitleTextArea.rows = 1;
    TitleTextArea.placeholder = 'Title';
    TitleTextArea.oninput = function() {
        adjustTextareaHeight(this)
    };
    
    TitleElement.appendChild(TitleTextArea);
}

function LoadToDo() {
    var todoElements = document.querySelectorAll('.ToDo');

    //ToDo
    todoElements.forEach(function(todo) {
        var toDoCheckbox = document.createElement('input');
        toDoCheckbox.type = 'checkbox';
        toDoCheckbox.className = 'ToDoCheckbox';
        toDoCheckbox.checked = todo.getAttribute('data-Checked') === 'true';
    
        var toDoInput = document.createElement('input');
        toDoInput.type = 'text';
        toDoInput.className = 'ToDoInput';
        if(todo.getAttribute('data-Checked') === 'true'){
            toDoInput.className += ' ToDoInputChecked';
        }
        toDoInput.value = todo.getAttribute('data-Value');
    
        todo.appendChild(toDoCheckbox);
        todo.appendChild(toDoInput);
    });
}