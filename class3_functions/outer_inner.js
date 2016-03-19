
function outer(){
	var a = "hi";
	var b = {};
console.log(a, b)

	function inner(a, b) {
		var a = "world";
		var b = {name: 'kim'};
		console.log(a, b);
	
	}

	inner(a,b);
    console.log(inner(a, b));

}

outer();