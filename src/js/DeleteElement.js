function generatedeleteElement() {
    var DeleteItem = document.createElement('div');
    DeleteItem.className = "context-menu-item";
    DeleteItem.ID = "DeleteItem"
    DeleteItem.innerHTML = languages[currentLanguage].delete;
    DeleteItem.onclick = function(){
        deleteElement(this.parentNode.parentNode);
    };

    return DeleteItem;
}

function deleteElement(element) {
    console.log( element );
}