//------------ dataService.js ------------
function getUserByName(username) {
return new Promise(function(resolve,reject){
     $.get('http://jsonplaceholder.typicode.com/users?username=' + username, function(users){
         resolve(users[0]);
     });
 })
}

function getPostsByUser(user) {
return new Promise(function(resolve,reject){
     $.get('http://jsonplaceholder.typicode.com/posts?userId=' + user.id, function(posts){
         resolve(posts);
     });
})
}

//------------ interface.js ------------

function render(posts) {
//render the posts data
console.log(posts);
}

function showUserItems(){
getUserByName('Bret')
 .then(getPostsByUser)
 .then(render);
}

showUserItems();

// // Promise.all
// function getAllUsers() {
//     return new Promise(function(resolve,reject){
//             $.get('http://jsonplaceholder.typicode.com/users', function(users){
//                 resolve(users);
//             })
//     })

// }

// function getAllPosts() {
//     return new Promise(function(resolve,reject){
//             $.get('http://jsonplaceholder.typicode.com/posts', function(posts){
//                 resolve(posts);
//             })
//     })
// }

// var usersPromise = getAllUsers();
// var postsPromise = getAllPosts();

// Promise.all([userPromise, postsPromise])
//     .then(function(results){
//         var users = results[0];
//         var posts = results[1];

//         //Do something with users and posts
// })
