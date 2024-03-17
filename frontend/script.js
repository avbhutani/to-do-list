const taskList = document.getElementById("task-boxes-list");
let taskListAddButton = document.getElementById("task-boxes-list-item-add");
let addnote = document.getElementById("add-note");
let timestampId = document.getElementById("timestamp-id");
let removeElement = document.querySelector(".task-boxes-list-item-container");
const loggedInUser = document.getElementById("login-user");
let currentUser = document.getElementById("login-user").textContent;
let listItemProperties = document.getElementById("task-boxes-list-item-properties-menu");
let listItemPropertiesDone = document.getElementById("menu-done-button");
let editContent = document.getElementById("edit-content");
let tet;
var t,addNoteContent;
                                          /* All declarations end here.*/




                                          /* All the functions will start here. */

// loggedInUser.textContent = username;
taskListAddButton.addEventListener("click", () => {
  if (addnote.value) addnote.value = "";
  editContent.value = "";
  listItemProperties.style.display = "block";
});

editContent.addEventListener("input", (event) => {
  tet = event.target.value;
});

addnote.addEventListener("input", (event) => {
  addNoteContent = event.target.value;
});

// Function to add the item to the particular box.
let addTaskBox = () => {
  if (!tet) {
    alert("Edit content can't be empty.");
    return;
  }
  let tempObj = {
    username: currentUser,
    editContent: tet,
    Notes: addNoteContent,
  };
  listItemProperties.style.display = "none";
  const tempDiv = document.createElement("div");
  tempDiv.setAttribute("class", "task-boxes-list-item-container");
  let val = `<div class="task-boxes-list-item-remove">&#8722</div>  
    <span class="task-boxes-list-item-timestamp"></span>  
    <div class="task-boxes-list-item">${tet}</div> 
    <button class="task-boxes-list-item-properties">&#9998;</button>
  </div>`;

  tempDiv.innerHTML = val;
  taskList.appendChild(tempDiv);
};

document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    document.getElementById("task-boxes-list-item-properties-menu").style =
      "none";
  }
});

// Function to retrieve the value of a cookie by name
function getCookie(name) {
  var cookieArr = document.cookie.split("");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (cookiePair[0] === name) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}
                                                /*All the functions end here. */



                                  /*All the things to go as soon as the page is loaded, will go below.*/
function main1() {
  var username = getCookie("username");
  console.log(username);
  if (username) {
    // Display the username on the page
    loggedInUser.textContent = username;
  } else {
    // Handle case when username cookie is not found
    console.log("Username cookie not found");
  }
}

main1();