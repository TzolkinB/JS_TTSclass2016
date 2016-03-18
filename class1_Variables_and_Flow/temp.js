var temp = 80;
var precip = "raining";
var indoor = true;

console.log("The temp is " + temp + " degrees");

/* left to right evaluation */
if(indoor || temp > 80 && !precip) {
	console.log("Time to swim")
}

else {
	console.log("Too cold to swim")
}