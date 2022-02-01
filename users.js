 document.body.innerHTML=`<section class="user-list"> </section>`;
async function getAllUsers(){
const data=await fetch("https://617062da23781c0017289a16.mockapi.io/users" ,{method:"GET"});
const users=await data.json();
const userContainer=document.querySelector(".user-list");

users.forEach((user)=>{
userContainer.innerHTML+= `
<div class="user-container">
<img class="user-avatar" src=${user.avatar} alt=${user.name}/>


<p class="user-name">${user.name}</p>


</div>`;
});
console.log(users);
}
getAllUsers();

// async function deleteUser(userId){
// console.log("deleting", userId);
//     const data=await fetch("https://617062da23781c0017289a16.mockapi.io/users/" +userId,{method:"DELETE"});
// };
// getAllUsers();

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

























