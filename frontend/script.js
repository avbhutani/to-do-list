const taskList = document.getElementById("task-boxes-list");
let taskListAddButton = document.getElementById("task-boxes-list-item-add");
let addnote = document.getElementById('add-note');
let timestampId = document.getElementById('timestamp-id');
// let taskContainer = document.getElementById('task-boxes-list-item-container')
let removeElement = document.querySelector(
  ".task-boxes-list-item-container"
);
var count = 0
var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');
const loggedInUser = document.getElementById('login-user');
loggedInUser.textContent = username
// This gets the name of the first user.
let currentUser = document.getElementById('login-user').textContent;
let listItemProperties = document.getElementById(
  "task-boxes-list-item-properties-menu"
);

let listItemPropertiesDone = document.getElementById("menu-done-button");
list = [];
// Function to perform when the done button is clicked.
let editContent = document.getElementById("edit-content");
let tet;
var t;
// Function to trigger when the add button in the menu is clicked.
var addNoteContent;
taskListAddButton.addEventListener("click", () => {
  if(addnote.value)
    addnote.value = "";
    editContent.value = ""
  listItemProperties.style.display = "block";
});

editContent.addEventListener("input", (event) => {
  tet = event.target.value;
});


addnote.addEventListener('input',(event)=> {
  addNoteContent = event.target.value;
})

// Function to add the item to the particular box.
let addTaskBox = () => {
  if(!tet) {
    alert("Edit content can't be empty.");
    return;
  }
  let tempObj = {
    username:currentUser,
    editContent:tet,
    timeStamp:t,
    Notes:addNoteContent
  }
  listItemProperties.style.display = "none";
  const tempDiv = document.createElement("div");
  tempDiv.setAttribute("class", "task-boxes-list-item-container");
  let val = `<div class="task-boxes-list-item-remove">&#8722</div>  
    <span class="task-boxes-list-item-timestamp"></span>  
    <div class="task-boxes-list-item">${tet}</div> 
    <button class="task-boxes-list-item-properties">&#9998;</button>
  </div>`
  
  
  tempDiv.innerHTML = val;
  taskList.appendChild(tempDiv);
  list.push(tempObj)

  console.log(list)
}


listItemPropertiesDone.addEventListener("click", addTaskBox);

// Adding the functionality to close the menu box when escape is pressed.

document.addEventListener('keyup', function (event) {
  if (event.key === "Escape")   {
     document.getElementById('task-boxes-list-item-properties-menu').style = 'none';
  }
})