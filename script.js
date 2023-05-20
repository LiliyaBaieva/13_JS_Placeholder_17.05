const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(res => res.json())
    .then(users => {
        const userList = document.getElementById('userList');
        users.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = user.name;
            userList.append(li);
        });
    })
    .catch(err => console.log(err));

const userList2 = document.getElementById('userList2');
let userDetailsDiv = document.getElementById('userDetails');
const searchInput = document.getElementById('searchInput');
// let filteredUsers = [];
const users = [];
fetch(url)
    .then(res => res.json())
    .then((usersGetting) => {
        displayUsers(usersGetting);     
        usersGetting.forEach(user => users.push(user));      
    })
    .catch((error) => {console.log("Error fetching user", error);});
    
console.log(users);

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm) //'Hello world'.includes('ell') - true ищет в строке подстроку
    );
    displayUsers(filteredUsers);
});

// ==========================================================

// const usersWithDetails = [];
// const usersData = [];
// fetch(url)
//     .then(res => res.json)
//     .then((usersGet) => {
//         usersGet.forEach(user => {
//             dataUser = JSON.parse(user);
//             usersData.push(dataUser);
//         })

//         // displayUserDetails(usersGet);
//         // for(let i = 0; i < usersGet; ++i){
//         //     usersWithDetails.add(usersGet[i]);
//         // }
//     });
 
// console.log(users[0].name);


userList2.addEventListener('click', (e) => {
    let userGet = e.target.textContent;
    console.log(userGet);
    users.forEach(user => {        
        if(user.name === userGet){
            // console.log(user.email);
            displayUserDetails(user);
            };
        });  
});

// class User {
//     constructor(name, userName, email, phone){
//         this.name = name;
//         this.userName = userName;
//         this.email = email;
//         this.phone = phone;
//     };
// }
    

function displayUsers(users){
    userList2.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        userList2.append(li);
    })
}

function displayUserDetails(user){

    // console.log(user.name + ', ' + user.username + ', ' + user.email + ', ' + user.phone)
    
    // userDetailsDiv.innerHTML = '';
    
    const nameHeading = document.createElement('h2');
    nameHeading.innerHTML = user.name;
    userDetailsDiv.append(nameHeading);

    const nickName = document.createElement('p');
    nickName.innerHTML = '<b> Username: </b>' + user.username;
    userDetailsDiv.appendChild(nickName);
    

    const email = document.createElement('p');
    email.innerHTML = `<b>E-mail: </b>${user.email}`;
    userDetailsDiv.append(email);

    const phone = document.createElement('p');
    phone.innerHTML = `<b>Phone: </b> ${user.phone}`;
    userDetailsDiv.append(phone);
}



