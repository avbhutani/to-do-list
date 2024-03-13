const username = document.getElementById('username')
const password = document.getElementById('password')
const addNewUser = document.getElementById('new-user-button')
const existingUser = document.getElementById('login-button')
const statusUpdate = document.getElementById('display-status')

let list = [];
var user,pass;


// This will add a new user if the user doesn't exist.
addNewUser.addEventListener('click',(event)=> {

  // This will check that both the username and password fields are filled or not.
  // checkInputValidity();
  event.preventDefault();

  let uvalue = username.value;
  let pvalue = password.value;
  // if the username is not valid,then return.
  // if(!checkValidUsername(uvalue)) {
  //   alert("Username should only contain lowercase letters.");
  //   return;
  // }
  
  // if the password is not valid then return.
  // if(!checkValidPassword(pvalue)) {
  //   alert(`Password should be atleast 8 chars long!`);
  //   return;
  // }

  let tempUser = {
    name1:uvalue,
    password:pvalue
  }
  console.log(uvalue)
  console.log(pvalue)
  // Convert the data to a JSON string
  fetch('http://localhost:8000/users', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(tempUser)
})
   .then(response => response.json())
   .then(response => {
    return console.log(JSON.stringify(response))})
   
  statusUpdate.textContent = 'User Added Successfully!';
});


// this is used for adding the functionality of deleting a particular user.
// existingUser1.addEventListener('click',(event)=> {
//   event.preventDefault();

//   let uvalue = username.value;
//   let pvalue = password.value;
//   let tempuser = {
//     name1: uvalue,
//     password:pvalue
//   }
//   fetch('http://localhost:8000/users/delete', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(tempuser)
// })
//    .then(response => response.json())
//    .then(response => {
//     return console.log(JSON.stringify(response))})
   
//   statusUpdate.textContent = 'User Deleted Successfully!';
// })


existingUser.addEventListener('click',(event)=> {
  event.preventDefault();
  let uvalue = username.value;
  let pvalue = password.value;
  let tempuser = {
    name1: uvalue,
    password:pvalue
  }
  fetch('http://localhost:8000/users/login', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(tempuser)
})
   .then(response => response.json())
   .then(response => {
    if(response.status == 400) {
      statusUpdate.textContent = response.error
    }
    else {
      statusUpdate.textContent = response.message
    }
    console.log(JSON.stringify(response))
  })
   
})
// // This function will check if there's an existing username with the same username that is entered.



// // This will check whether the username and password fields are filled or not.
// function checkInputValidity() {
//   if(!username.value || (!username.value && password.value)) {
//     alert(`Username can't be empty!`);
//   }
//   else if(username.value && !password.value) {
//     alert(`Please Enter a Password!`);
//   }
//   else if(!username.value && !password.value) {
//     alert(`Both fields cannot be empty!`);
//   }
// }


// // This function will check whether the username is valid or not.
// function checkValidUsername(uvalue) {
//   for(let i = 0;i<uvalue.length;i++) {
//     let aa = uvalue.charCodeAt(i);
//     if( aa < 97 || aa > 122) {
//       return false;
//     }
//   }
//   return uvalue;
// }

// // This function will check whether the password is valid or not.
// function checkValidPassword(pvalue) {
//   if(pvalue.length < 8) {
//     return 0;
//   }
//   return pvalue;
// }


