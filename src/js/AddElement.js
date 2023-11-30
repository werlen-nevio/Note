document.addEventListener('click', function(event) {
    if (event.target.classList.contains('handleAdd')) {
        openDropdown(event);
    } else {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dropdown) {
            dropdown.style.display = 'none';
        });
    }
});

function openDropdown(event) {
    var dropdownContent = event.target.nextElementSibling;

    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

function addElement(element, button) {
    var currentElement = button.parentElement.parentElement.parentElement;

    var newElement = document.createElement("div");
    newElement.className = "new " + element;

    // Das neue Element als Kind dem aktuellen Element hinzufügen
    currentElement.parentNode.insertBefore(newElement, currentElement.nextSibling);

    switch (element) {
        case "ToDo":
            LoadNewToDo()
            break;
        case "Header-1":
            LoadNewHeader_1()
            break;
        case "Header-2":
            LoadNewHeader_2()
            break;
        case "Header-3":
            LoadNewHeader_3()
            break;
        case "Quote":
            LoadNewQuote()
            break;
        default: // Text
            LoadNewText()
            break;
    }
}