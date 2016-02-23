// Login page - Display a login form asking user for a username.
// On Submit, look up the username entered by the user.
// If no user is found, display a detailed error message.
// If the user is found, store user object and render User's homepage

// function userName(){
//   var user = document.querySelector("#name").value;
//   document.querySelector("#name").value = " "; 
// };


function getUserByName(username) {
	var username = $('#name').val();
   return new Promise(function(resolve,reject){
        $.get('http://jsonplaceholder.typicode.com/users?username=' + username, function(users){
            if(users.length)
              resolve("Found");
           else
               reject('User with name ' + username + ' not found');
        });
   })
}
console.log("done");

//------------ interface.js ------------

// function render(posts) {
// //render the posts data
// console.log(posts);
// }

// function showUserItems(){
// var user = document.querySelector("#name").value;
// document.querySelector("#name").value = " "; 
// getUserByName(user)
//  .then(getPostsByUser)
//  .then(render);
// }

// showUserItems();