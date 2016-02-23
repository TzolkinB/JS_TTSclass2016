//1. Fullfill/create a Promise

//var q = require('q');
//var def = q.defer();
        
//  def.promise.then(console.log);
//  setTimeout(def.resolve, 300, "RESOLVED!")

//2. Reject a Promise
// var q = require('q');
// var defer = q.defer();
        
//   function printError (err) {
//     console.log(err.message); 
//   }

// defer.promise.then(null, printError);
// setTimeout(defer.reject, 300, new Error("REJECTED!"))

// 3. To reject or not to reject
// var q = require('q');
// var def = q.defer();
    
// def.promise.then(console.log, console.log);
// def.resolve("I FIRED");
// def.reject("I DID NOT FIRE");

// 4. Always asynchronous

// var promise = new Promise(function (fulfill, reject) {
//   fulfill('SECOND');
// });

// promise.then(console.log);

// console.log('FIRST');

// 5. Values and Promises

// var q = require('q')
// var def = q.defer();
    
//     function attachTitle (name) {
//       return "DR. " + name;
//     }
    
//     def.promise
//     .then(attachTitle)
//     .then(console.log);
    
//     def.resolve("MANHATTAN");

// 6. Throw an Error

// var q = require('q');
    
//     function parsePromised (json) {
//       var def = q.defer()
//         , result;
    
//       try {
//         result = JSON.parse(json);
//       } catch (e) {
//         def.reject(e);
//       }
    
//       def.resolve(result);
//       return def.promise;
//     };
    
//     parsePromised(process.argv[2])
//     .then(null, console.log)

// 7. Using qfcall
//# Using Q's fcall to simplify our code

// Wrapping a value or synchronous function call in a promise is a
// fairly easy pattern to capture in a generic way.

// The q library has a function for just this purpose called fcall.

// ## Task

// Use fcall to replace the entire parsePromised function from the previous
// lesson.

// var q = require('q');

// q.fcall(JSON.parse, process.argv[2])
//   .then(null, console.log);

// 8. An Important Rule
// var q = require('q');

// function alwaysThrows() {
//   throw new Error('OH NOES');
// }

// function iterate(arg) {
//   console.log(arg);

//   return arg + 1;
// }

// q.fcall(iterate, 1)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(alwaysThrows)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(null, console.log);
// 
//9. Multiple Promises
// var q = require('q');

// var defer1 = q.defer(),
//     defer2 = q.defer();

// function all(prom1, prom2) {
//   var defer = q.defer(),
//       results = [undefined, undefined],
//       counter = 0;

//   prom1
//     .then(function (data) {
//       counter += 1;
//       results[0] = data;

//       if (counter === 2) {
//         defer.resolve(results);
//       }
//     })
//     .then(null, defer.reject);

//   prom2
//     .then(function (data) {
//       counter += 1;
//       results[1] = data;

//       if (counter === 2) {
//         defer.resolve(results);
//       }
//     })
//     .then(null, defer.reject);

//   return defer.promise;
// }

// all(defer1.promise, defer2.promise)
//   .then(console.log);

// setTimeout(function () {
//   defer1.resolve('PROMISES');
//   defer2.resolve('FTW');
// }, 200);
    
// 10. Fetch JSON
// var qioHttp = require('q-io/http');

// qioHttp.read('http://localhost:1337')
//   .then(function (data) {
//     console.log(JSON.parse(data));
//   })
//   .then(null, console.error)
//   .done();

// 11. Do some work
var qioHttp = require('q-io/http');

qioHttp.read('http://localhost:7000')
  .then(function (data) {
    return qioHttp.read('http://localhost:7001/' + data);
  })
  .then(function (user) {
    console.log(JSON.parse(user));
  })
  .then(null, console.error)
  .done();


