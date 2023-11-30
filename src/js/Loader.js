$(function() {
    LoadTitle()
    LoadText()
    LoadToDo()
    LoadHeader_1()
    LoadHeader_2()
    LoadHeader_3()
    LoadQuote()
});

function LoadTitle() {
    var TitleElement = document.querySelector('.Title');

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

function LoadText() {
    var TextElements = document.querySelectorAll('.Text');

    TextElements.forEach(function(text) {
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

function LoadToDo() {
    var todoElements = document.querySelectorAll('.ToDo');

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
    
        todo.appendChild(handleAdd());
        todo.appendChild(createHandle());
        todo.appendChild(toDoCheckbox);
        todo.appendChild(toDoInput);
    });
}

function LoadHeader_1() {
    var Header1Elements = document.querySelectorAll('.Header-1');

    Header1Elements.forEach(function(header1) {
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

function LoadHeader_2() {
    var Header2Elements = document.querySelectorAll('.Header-2');

    Header2Elements.forEach(function(header2) {
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

function LoadHeader_3() {
    var Header3Elements = document.querySelectorAll('.Header-3');

    Header3Elements.forEach(function(header3) {
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

function LoadQuote() {
    var QuoteElements = document.querySelectorAll('.Quote');

    QuoteElements.forEach(function(Quote) {
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

function createHandle() {
    var handle = document.createElement('i');
    handle.className = 'fas fa-bars handle';

    return handle;
}

function handleAdd() {
    var handleAdd = document.createElement('div');
    handleAdd.className = 'container';

    var handleAddIcon = document.createElement('i');
    handleAddIcon.className = 'fas fa-plus handleAdd';
    
    handleAdd.appendChild(handleAddIcon);
    handleAdd.appendChild(getDropdown());

    return handleAdd;
}

function getDropdown() {
    var dropdown = document.createElement('div');
    dropdown.className = 'dropdown-content';

    dropdown.appendChild(generateDropdownOption(languages[currentLanguage].text, "fa-font", "Text"));
    dropdown.appendChild(generateDropdownOption(languages[currentLanguage].todoList, "fa-check", "ToDo"));
    dropdown.appendChild(generateDropdownOption(languages[currentLanguage].header1, "fa-heading", "Header-1"));
    dropdown.appendChild(generateDropdownOption(languages[currentLanguage].header2, "fa-heading", "Header-2"));
    dropdown.appendChild(generateDropdownOption(languages[currentLanguage].header3, "fa-heading", "Header-3"));
    dropdown.appendChild(generateDropdownOption(languages[currentLanguage].quote, "fa-quote-right", "Quote"));

    return dropdown;
}

function generateDropdownOption(text, iconClass, element) {
    var dropdownItem = document.createElement('button');
    dropdownItem.onclick = function(){
        addElement(element, this);
    };

    var dropdownItemIcon = document.createElement('i');
    dropdownItemIcon.className = "dropdownIcon fas " + iconClass;

    var dropdownText = document.createElement('span');
    dropdownText.className = "dropdownText";
    dropdownText.innerText = " " + text;

    dropdownItem.appendChild(dropdownItemIcon);
    dropdownItem.appendChild(dropdownText);
    return dropdownItem;
}

function LoadNewText() {
    var TextElements = document.querySelectorAll('.Text.new');

    TextElements.forEach(function(text) {
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