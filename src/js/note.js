function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

$(document).on('click', '.ToDoCheckbox', function() {
    var childInputs = $(this).siblings('.ToDoInput');
    childInputs.toggleClass('ToDoInputChecked');
});