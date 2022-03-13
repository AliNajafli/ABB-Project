const BASE_URL = 'http://127.0.0.1:8000/';

let submitBtn = document.getElementById("create_submit_btn");
let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let name = nameInput.value;
    let phone = phoneInput.value;
    addUser(name,phone);
});


function addUser(name, phone) {
    fetch(BASE_URL + 'user/add/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
  