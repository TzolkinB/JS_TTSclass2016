// Let's create a simple todo application

// Show an unordered list of todo's
// Show an input to enter a new todo
// Show a button to add a todo. When the button is clicked:
	// The text from the input box is used to add a list item to the bottom of the list
	// The text from the input box is cleared out.
	// When the user clicks on a list item, it is removed
// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.

function newTask(){
 var listItem = document.getElementById("task").value;
 var newLI = document.createElement('li');
 newLI.innerHTML = listItem;

var list = document.querySelector('ul');
list.appendChild(newLI); //Insert after item 1
listItem = {}
};

// function newList() {
// 	var newLI = document.createElement("li");

// }
// var list = document.querySelector('ul');

 newTask(); // add a new line & text from input field
