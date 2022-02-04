 document.body.innerHTML=`
<div class="user-form">
 <input class="add-user-name" placeholder="Enter Name">
 <input class="add-user-avatar" placeholder="Enter pic url">
 
<a class="waves-effect waves-light btn" onclick="addUser()">  <i class="material-icons left"> add</i> ADD USER</a> 

 </div>
 <section class="user-list"> </section>
 `;

async function getAllUsers(){
const data=await fetch("https://617062da23781c0017289a16.mockapi.io/users" ,{method:"GET"});
const users=await data.json();
const userContainer=document.querySelector(".user-list");
userContainer.innerHTML= "";
users.forEach((user)=>{
userContainer.innerHTML+= `
<div class="user-container">
<img class="user-avatar" src=${user.avatar} alt=${user.name}/>

<div>
<p class="user-name">${user.name}</p>

<div class="action-buttons">
<a class="waves-effect waves-light btn" onClick="toggleEdit(${user.id})"><i class="material-icons left"> edit</i>EDIT</a>
<a class="waves-effect waves-light btn red" onClick="deleteUser(${user.id})"><i class="material-icons left"> delete</i>DELETE</a>
</div>

<div class="edit-user-form edit-${user.id}">
<input value="${user.name}" class="edit-${user.id}-user-name" placeholder="Enter Name">
<input value="${user.avatar}" class="edit-${user.id}-user-avatar" placeholder="Enter pic url">

<!--<button onclick="saveUser(${user.id})">SAVE</button> -->

<a class="waves-effect waves-light btn" onclick="saveUser(${user.id})"><i class="material-icons left">save</i>SAVE</a>
</div>

</div>

</div>`;
});
console.log(users);
}
getAllUsers();

async function deleteUser(userId){
console.log("deleting", userId);

const data=await fetch("https://617062da23781c0017289a16.mockapi.io/users/" +userId,{method:"DELETE"});

getAllUsers();

}


async function addUser(){
  
    const userName=document.querySelector(".add-user-name").value;
    const userAvatar=document.querySelector(".add-user-avatar").value;   //const data=await fetch("https://617062da23781c0017289a16.mockapi.io/users/" +userId,{method:"DELETE"});
    console.log("adding",userName,userAvatar);
    const data=await fetch("https://617062da23781c0017289a16.mockapi.io/users",
    {method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({name:userName,avatar:userAvatar})});
    getAllUsers();
    
    }

function toggleEdit(userId){
console.log("editing",userId);
const editUserForm=document.querySelector(`.edit-${userId}`);
console.log(editUserForm.style.display);
editUserForm.style.display=
editUserForm.style.display==="block" ? "none" : "block";
;
}

async function saveUser(userId){
    const userName=document.querySelector(`.edit-${userId}-user-name`).value;
    const userAvatar=document.querySelector(`.edit-${userId}-user-avatar`).value;   //const data=await fetch("https://617062da23781c0017289a16.mockapi.io/users/" +userId,{method:"DELETE"});
    console.log("adding",userName,userAvatar);
    
    const data=await fetch("https://617062da23781c0017289a16.mockapi.io/users/"+userId,
    {method:"PUT",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({name:userName,avatar:userAvatar})});
    getAllUsers();
}



// document.body.innerHTML=`<section class="profile"></section>`;

// async function Myown(){


// const data=await fetch("https://617062da23781c0017289a16.mockapi.io/users");
// const user=await data.json();
// console.log(user);
// user.forEach((u)=>{
// console.log(u.avatar);
// const userContainer=document.querySelector(".profile");
// userContainer.innerHTML+=
// `
// <img src="${u.avatar}" alt="profile"/>
// <h1>${u.name}</h1>
// `
// });
// }
// Myown();

























