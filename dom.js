var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// delete event
itemList.addEventListener('click', removeItem);
// form submit event
form.addEventListener('submit', addItem);
// add item
function addItem(e){
    e.preventDefault();
    // get input value
    let newItem = document.getElementById('item').value;
    // create new li
    let newLi = document.createElement('li');
    // add class
    newLi.className = 'list-group-item';
    // create text node
    let txt = document.createTextNode(newItem);
    newLi.appendChild(txt);
    itemList.appendChild(newLi);
    // create button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    newLi.appendChild(deleteBtn);
    itemList.appendChild(newLi);
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            let li = e.target.parentElement;
        itemList.removeChild(li);
        }
    }
}
