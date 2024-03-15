const editContent1 = document.getElementById('edit-content')
const addNote = document.getElementById('add-note')
const taskAddButton = document.getElementById('menu-done-button')

taskAddButton.addEventListener('click',(event)=> {
    event.preventDefault();
    let ec = editContent1.value;

    // review the field below
    let un = 'anubhav'
    let an = addNote.value;
    let tempToDo = {
        currentUser:un, /**/
        task:ec,
        note:an
    }

    fetch('http://localhost:8000/createToDo', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(tempToDo)
}).then(response => response.json())
    .then(response=> {
        console.log(response)
    })
})