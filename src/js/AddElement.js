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