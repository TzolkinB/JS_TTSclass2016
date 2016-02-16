// Let's create a simple todo application

// Show an unordered list of todo's
// Show an input to enter a new todo
// Show a button to add a todo. When the button is clicked:
	// The text from the input box is used to add a list item to the bottom of the list
	// The text from the input box is cleared out.
	// When the user clicks on a list item, it is removed
// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.

function newTask(){
  var list = document.querySelector('ul');
  var newLI = document.createElement('li');
  newLI.innerHTML = document.querySelector("#task").value;
  // newLI.innerHTML = listItem;
  list.appendChild(newLI); //Appends to bottom of list
  document.querySelector("#task").value = " "; //clears input field after click
//14 and 17 have duplication "document.querySelector("#task").value
};

document.querySelector('ul').addEventListener('click', function(event){
	var noMore = event.target.remove();
});


