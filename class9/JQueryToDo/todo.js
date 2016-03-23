//JQuery 
$(document).ready(function(){
	$("#btn").on('click', function() {
	var input = $('#input').val();
	//alert(input); // alert at this point in the code tests to make sure we are getting the input
	//entered in the text field when the button is clicked
 	$('#todo').append('<li>'+input+'</li>'); //inserts input on new li but not clean code
 	$('#input').val('');
	});

	$('li').on('click', function(event) {
		var gone = event.target;
		$(gone).css('textDecoration', 'line-through');
			setTimeout(function(){
				gone.remove();}
				, 1000);
	});
});


// same but in Javascript
// function newTask(){
//   var list = document.querySelector('ul');
//   var newLI = document.createElement('li');
//   newLI.innerHTML = document.querySelector("#task").value;
//   // newLI.innerHTML = listItem;
//   list.appendChild(newLI); //Appends to bottom of list
//   document.querySelector("#task").value = " "; //clears input field after click
// //14 and 17 have duplication "document.querySelector("#task").value
// };

// document.querySelector('ul').addEventListener('click', function(event){
// 	var noMore = event.target;
// 	noMore.style.textDecoration = 'line-through';
//     setTimeout(function(){
// 		noMore.remove()
// 	}, 1000);
// });

