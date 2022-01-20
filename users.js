document.body.innerHTML=`<section class="user-list"> </section>`;
async function getAllUsers(){
const data=await fetch("https://617062da23781c0017289a16.mockapi.io/users" ,{method:"GET"});
const users=await data.json();
const userContainer=document.querySelector(".user-list");

userContainer.innerHTML= "";

users.forEach((user)=>{
userContainer.innerHTML+=  `
<div class="user-container">
<img class="user-avatar" src=${user.avatar} alt=${user.name}/>
<div>
<p class="user-name">${user.name}</p>
<button onclick="deleteUser(${user.id})">DELETE</button>
</div>
</div>`;
});
console.log(users);
}
getAllUsers();

async function deleteUser(userId){
console.log("deleting", userId);
    const data=await fetch("https://617062da23781c0017289a16.mockapi.io/users/" +userId,{method:"DELETE"});
};
getAllUsers();