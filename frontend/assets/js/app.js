const BASE_URL = 'http://127.0.0.1:8000/';


getUsers();
setOnClickListeners();


function setOnClickListeners(){
    let allDeleteButtons = document.querySelectorAll("#delete_btn");

    allDeleteButtons.forEach(deleteBtn=>{
        deleteBtn.addEventListener("click",(ev)=>{
            let id = deleteBtn.parentElement.parentElement.children.item(0).textContent;
            deleteUser(id);
        });
    });
}

function getUsers() {
    let users = [{name:"Ali",phone:"050565989",id:Math.random()*4545},{name:"Ali",phone:"050565989",id:Math.random()*4545},{name:"Ali",phone:"050565989",id:Math.random()*4545},{name:"Ali",phone:"050565989",id:Math.random()*4545},{name:"Ali",phone:"050565989",id:Math.random()*4545}]
    
    let userTableBody = document.getElementById("user_table_body");
    users.forEach(user => {
        let userHtml = ` 
            <tr>
                <th scope="row" id="user_id">${user.id}</th>
                <td id="user_name">${user.name}</td>
                <td id="user_phone">${user.phone}</td>
                <td>
                    <a href="edit.html?id=${user.id}?name=${user.name}?phone=${user.phone}"><button class="btn btn-outline-primary btn-sm">Edit</button></a>
                    <button class="btn btn-sm" id="delete_btn">Delete</button>
                </td>
            </tr>`;
         userTableBody.insertAdjacentHTML("afterbegin",userHtml);
    });

//   fetch(BASE_URL + 'user/list')
//     .then((result) => result.json())
//     .then((data) => {
//       var users = data.data;
//     })
//     .catch((err) => console.log(err));
}


function deleteUser(userId) {
  fetch(BASE_URL + 'user/delete/' + userId, {
    method: 'DELETE',
  })
    .then((result) => result.json())
    .then((data) => {})
    .catch((err) => console.log(err));
}
