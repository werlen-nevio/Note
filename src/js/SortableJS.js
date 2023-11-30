$(document).ready(function(){
    new Sortable(document.querySelector('.sortable-divs'), {
        animation: 150,
        ghostClass: 'sortable-ghost',
        handle: '.fa-bars'
    });
});