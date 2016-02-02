//Javascript for Cats (http://jsforcats.com)

//Using 'replace' function
// var dogSentence = 'dogs are fun'
// console.log(dogSentence.replace('dogs', 'hamsters'));

// console.log(dogSentence);

// var string = "anything yay";

// function makeMoreExciting(something) {
//   return string + '!!!!'
// }
// //console.log(makeMoreExciting(string));

// function yellIt(something) {
//   string = string.toUpperCase()
//   return makeMoreExciting(string)
// }
// console.log(yellIt(string));


// // If you wanna get REALLY fancy you can make an array filled with objects, or an object filled with arrays!
// var moodLog = [
//   {
//     date: "10/20/2012",
//     mood: "catnipped"
//   }, 
//   {
//     date: "10/21/2012",
//     mood: "nonplussed"
//   },
//   {
//     date: "10/22/2012",
//     mood: "purring"
//   }
// ]

// // ordered from least to most favorite
// var favorites = {
//   treats: ["bird sighting", "belly rub", "catnip"],
//   napSpots: ["couch", "planter box", "human face"]
// }

// console.log(favorites.treats[0]);
// console.log(moodLog[1]);

//how many tasks JS can run per second (I got 13,054,172)
// function measureLoopSpeed() {
//   var count = 0
//   function addOne() { count = count + 1 }

//   // Date.now() returns a big number representing the number of
//   // milliseconds that have elapsed since Jan 01 1970
//   var now = Date.now()

//   // Loop until Date.now() is 1000 milliseconds (1 second) or more into
//   // the future from when we started looping. On each loop, call addOne
//   while (Date.now() - now < 1000) addOne()

//   // Finally it has been >= 1000ms, so let's print out our total count
//   console.log(count)
// }

// measureLoopSpeed()

//In the non-blocking version it becomes a's job to do what it needs to do and then call 
//b when it is done. Using functions in this way is called callbacks because your callback 
//function, in this case b, gets called later on when a is all done.
// a(b)
