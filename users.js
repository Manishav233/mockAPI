 document.body.innerHTML=`
<div class="user-form">
 <input class="add-user-name" placeholder="Enter Name">
 <input class="add-user-avatar" placeholder="Enter pic url">
 <button onclick="addUser()">ADD USER</button>
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
<button onClick="deleteUser(${user.id})">DELETE</button>
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

























