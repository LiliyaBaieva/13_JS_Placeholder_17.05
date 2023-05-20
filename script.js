const url = 'https://jsonplaceholder.typicode.com/users';
const userList2 = document.getElementById('userList2');
let userDetailsDiv = document.getElementById('userDetails');
const searchInput = document.getElementById('searchInput');
const users = [];

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

fetch(url)
    .then(res => res.json())
    .then((usersGetting) => {
        usersGetting.forEach(user => users.push(user));      
    })
    .catch((error) => {console.log("Error fetching user", error);});
    

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm){
        filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm) //'Hello world'.includes('ell') - true ищет в строке подстроку
            );
            displayUsers(filteredUsers);
    }

});

userList2.addEventListener('click', (e) => {
    let userGet = e.target.textContent;
    console.log(userGet);
    users.forEach(user => {        
        if(user.name === userGet){
            displayUserDetails(user);
            };
        });  
});

function displayUsers(users){
    userList2.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        userList2.append(li);
    })
}

function displayUserDetails(user){
    
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