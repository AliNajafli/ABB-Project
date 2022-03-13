const BASE_URL = 'http://127.0.0.1:8000/';

let href = document.location.href.split("?");
let submitBtn = document.getElementById("edit_submit_btn");
let phoneInput = document.getElementById("phone");
let nameInput = document.getElementById("name");

let userId = href[1].split("=")[1];
let userName = href[2].split("=")[1];
let userPhone = href[3].split("=")[1];

phoneInput.value = userPhone;
nameInput.value = userName;

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    editUser(userId,userName,userPhone);
});


function editUser(userId, newName, newPhoneNumber) {
    fetch(BASE_URL + 'user/' + userId, {
      method: 'PUT',
      body: {
        name: newName,
        phone: newPhoneNumber,
      },
    })
      .then((result) => result.json())
      .then((data) => {})
      .catch((err) => console.log(err));
  }
  