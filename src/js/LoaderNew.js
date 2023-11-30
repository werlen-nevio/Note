function LoadNewText() {
    var TextElements = document.querySelectorAll('.Text.new');
    
    TextElements.forEach(function(text) {
        text.className = 'Text';

        var TextTextArea = document.createElement('textarea');
        TextTextArea.value = text.getAttribute('data-text');
        TextTextArea.className = 'Text';
        TextTextArea.rows = 1;
        TextTextArea.oninput = function() {
            adjustTextareaHeight(this)
        };

        text.appendChild(handleAdd());
        text.appendChild(createHandle());
        text.appendChild(TextTextArea);
    });
}

function LoadNewToDo() {
    var todoElements = document.querySelectorAll('.ToDo.new');
    
    todoElements.forEach(function(todo) {
        todo.className = 'ToDo';

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
    
        todo.appendChild(handleAdd());
        todo.appendChild(createHandle());
        todo.appendChild(toDoCheckbox);
        todo.appendChild(toDoInput);
    });
}

function LoadNewHeader_1() {
    var Header1Elements = document.querySelectorAll('.Header-1.new');
    
    Header1Elements.forEach(function(header1) {
        header1.className = 'Header-1';

        var Header1TextArea = document.createElement('textarea');
        Header1TextArea.value = header1.getAttribute('data-text');
        Header1TextArea.className = 'Header-1';
        Header1TextArea.rows = 1;
        Header1TextArea.placeholder = 'Header';
        Header1TextArea.oninput = function() {
            adjustTextareaHeight(this)
        };

        header1.appendChild(handleAdd());
        header1.appendChild(createHandle());
        header1.appendChild(Header1TextArea);
    });
}

function LoadNewHeader_2() {
    var Header2Elements = document.querySelectorAll('.Header-2.new');
    
    Header2Elements.forEach(function(header2) {
        header2.className = 'Header-2';

        var Header2TextArea = document.createElement('textarea');
        Header2TextArea.value = header2.getAttribute('data-text');
        Header2TextArea.className = 'Header-2';
        Header2TextArea.rows = 1;
        Header2TextArea.placeholder = 'Header';
        Header2TextArea.oninput = function() {
            adjustTextareaHeight(this)
        };

        header2.appendChild(handleAdd());
        header2.appendChild(createHandle());
        header2.appendChild(Header2TextArea);
    });
}

function LoadNewHeader_3() {
    var Header3Elements = document.querySelectorAll('.Header-3.new');
    
    Header3Elements.forEach(function(header3) {
        header3.className = 'Header-3';
        
        var Header3TextArea = document.createElement('textarea');
        Header3TextArea.value = header3.getAttribute('data-text');
        Header3TextArea.className = 'Header-3';
        Header3TextArea.rows = 1;
        Header3TextArea.placeholder = 'Header';
        Header3TextArea.oninput = function() {
            adjustTextareaHeight(this)
        };

        header3.appendChild(handleAdd());
        header3.appendChild(createHandle());
        header3.appendChild(Header3TextArea);
    });
}

function LoadNewQuote() {
    var QuoteElements = document.querySelectorAll('.Quote.new');
    
    QuoteElements.forEach(function(Quote) {
        Quote.className = 'Quote';

        var QuoteTextArea = document.createElement('textarea');
        QuoteTextArea.value = Quote.getAttribute('data-text');
        QuoteTextArea.className = 'Quote';
        QuoteTextArea.rows = 1;
        QuoteTextArea.placeholder = 'Quote';
        QuoteTextArea.oninput = function() {
            adjustTextareaHeight(this)
        };

        Quote.appendChild(handleAdd());
        Quote.appendChild(createHandle());
        Quote.appendChild(QuoteTextArea);
    });
}