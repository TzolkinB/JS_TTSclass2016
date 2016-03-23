// Exercise One
// 1) Get all posts
// $.get('http://jsonplaceholder.typicode.com/posts', function(data){
//     console.log(data);
// });

// // 2) Get post with id of 10
$.get('http://jsonplaceholder.typicode.com/posts/10', function(data){
    console.log(data);
});

// // 3) Get the comments from post with id of 12
// $.get('http://jsonplaceholder.typicode.com/post/12/comments', function(data){
//     console.log(data);
// });

// // 4) Get all the posts from user with id of 2
// $.get('http://jsonplaceholder.typicode.com/user/2/posts', function(data){
//     console.log(data);
// });

// // 5) Create a new post and log the id generated for it by the server
// $.post('http://jsonplaceholder.typicode.com/posts',{
//     userId: 1,
//     title: "My New Post",
//     body: "This is the body"
// }, function(data){
//     console.log(data.id)
// })

// // 6) Replace the post with id of 12
// $.ajax({
//     method: 'PUT',
//     url: 'http://jsonplaceholder.typicode.com/posts/12',
//     data: {
//         userId: 1,
//         title: "New Post",
//         body: "New post added"
//     },
//     complete: function(response){
//         console.log(response.responseJSON);
//     }
// })

// // 7) Update the title field of the post with id of 12
// $.ajax({
//     method: 'PATCH',
//     url: 'http://jsonplaceholder.typicode.com/posts/12',
//     data: {
// title: "patched it"
// },
//     complete: function(response){
//         console.log(response.responseJSON);
//     }
// })

// // 8) Delete the post with id of 12
// $.ajax({
//     method: 'DELETE',
//     url: 'http://jsonplaceholder.typicode.com/posts/12',
//     complete: function(response){
//         console.log(response.statusText);
//     }
// })