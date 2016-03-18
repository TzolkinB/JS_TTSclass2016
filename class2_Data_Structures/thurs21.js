/* Array is an ordered list 

var teachers = ['Assaf', 'Shane', ['a', 'b']]

console.log(teachers[1]);
console.log(teachers.length); /* how many items in the array
console.log(teachers);

var teachers = [];
teachers.push('Assaf');
teachers.push('Shane');

var recent = teachers.pop(); /* removes top item from end of array (most recent) and returns value

console.log(teachers);
console.log(recent)
*/
/* how to push/pop from bottom of array? 

var teachers = []
teachers.unshift('shane'); /*unshift adds to bottom of array
teachers.unshift('assaf');
teachers.unshift('someone else')
console.log(teachers);

var recent = teachers.shift();
console.log(recent);

var teachers = ['shane', 'assaf'];
teachers[2] = 'zack';
var i = teachers.indexOf('assaf');
console.log(teachers);
console.log(i);
*/

/* splicing and slicing */

/*
var teachers = ['shane', 'assaf', 'zack', 'andreas'];
console.log(teachers.slice(1,3))  //returns assaf & zack 

//teachers.splice(1,1, 'joe') //puts joe in place of assaf

// iterate over an array: 
var teachers = ['Assaf', 'Shane', 'Zack']
for(var i = 0; i < teachers.length; i++) {
    console.log(teachers[i]);
}

teachers.toString();
console.log(teacher.join('--abc--'))

sorting:
teachers.sort();
*/
//Uses a function, more on that next class
var teachers = ['shane', 'assaf', 'zack', 'andreas'];
teachers.forEach(function(item, index) {
    console.log(item, index);
})


