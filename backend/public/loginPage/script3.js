const username = document.getElementById('username')
const password = document.getElementById('password')
const addNewUser = document.getElementById('new-user-button')
const existingUser = document.getElementById('login-button')
const statusUpdate = document.getElementById('display-status')

let list = [];
var user,pass;


// This function will check if there's an existing username with the same username that is entered.
existingUser.addEventListener('click',(event)=> {
  checkInputValidity();
  event.preventDefault();
  let login = false;
  for(u in list) {
    if(list[u].name === username.value) {
      console.log(`${username.value} successfully logged in.`)
      statusUpdate.textContent = `${username.value} successfully logged in.`
      login = true;
    }
  }
  if(!login) {
    statusUpdate.textContent = `User doesn't exist. Kindly SignUp!`

  } 
})


// This will check whether the username and password fields are filled or not.
function checkInputValidity() {
  if(!username.value || (!username.value && password.value)) {
    alert(`Username can't be empty!`);
  }
  else if(username.value && !password.value) {
    alert(`Please Enter a Password!`);
  }
  else if(!username.value && !password.value) {
    alert(`Both fields cannot be empty!`);
  }
}


// This function will check whether the username is valid or not.
function checkValidUsername(uvalue) {
  for(let i = 0;i<uvalue.length;i++) {
    let aa = uvalue.charCodeAt(i);
    if( aa < 97 || aa > 122) {
      return false;
    }
  }
  return uvalue;
}

// This function will check whether the password is valid or not.
function checkValidPassword(pvalue) {
  if(pvalue.length < 8) {
    return 0;
  }
  return pvalue;
}


// This will add a new user if the user doesn't exist.
addNewUser.addEventListener('click',(event)=> {

  // This will check that both the username and password fields are filled or not.
  checkInputValidity();
  event.preventDefault();

  let uvalue = username.value;
  // if the username is not valid,then return.
  if(!checkValidUsername(uvalue)) {
    alert("Username should only contain lowercase letters.");
    return;
  }
  
  let pvalue = password.value;
  // if the password is not valid then return.
  if(!checkValidPassword(pvalue)) {
    alert(`Password should be atleast 8 chars long!`);
    return;
  }

  let tempUser = {
    name:uvalue,
    password:pvalue
  }
  statusUpdate.textContent = 'User Added Successfully!';
  
  
  
  // const myJSON = JSON.stringify(tempUser);
  // fs.writeFileSync('data.json', myJSON, 'utf-8', (err) => {
  //   if (err) throw err;
  //   console.log('Data added to file');
  // });
});