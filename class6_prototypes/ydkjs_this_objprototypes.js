//Chapter 1: this Or That?
	// Instead of relying on this, you could have explicitly passed in a context object to both identify() and speak().
	// However, the this mechanism provides a more elegant way of implicitly "passing along" an object reference, 
	// leading to cleaner API design and easier re-use.

	// 'This' is not a reference to the function's lexical scope. This is actually a binding that is made when a 
	// function is invoked, and what it references is determined entirely by the call-site where the function is called.

// Chapter 2: this All Makes Sense Now!
// 	'This' is a binding made for each function invocation, based entirely on its call-site (how the function is called).	
// 	To understand this binding, we have to understand the call-site: the location in code where a function is called 
// 	(not where it's declared). 

// .call and .apply explicitly bind this

// Chapter 3: Objects
// Objects are collections of key/value pairs. The values can be accessed as properties, via .propName or ["propName"] 
// syntax. Whenever a property is accessed, the engine actually invokes the internal default [[Get]] operation 
// (and [[Put]] for setting values), which not only looks for the property directly on the object, but which will 
// traverse the [[Prototype]] chain (see Chapter 5) if not found.


// // Chapter 4: Mixing (Up) "Class" Objects
// classes, inheritance, and instantiation
// A class is a blue-print. To actually get an object we can interact with, we must build (aka, "instantiate") something 
// from the class. The end result of such "construction" is an object, typically called an "instance", which we can 
// directly call methods on and access any public data properties from, as necessary.

// In many languages, the keyword super is used, in place of this example's inherited:, which leans on the idea that 
// a "super class" is the parent/ancestor of the current class.

// Don't let polymorphism confuse you into thinking a child class is linked to its parent class. A child class instead 
// gets a copy of what it needs from the parent class. Class inheritance implies copies.

//Chapter 5: Prototypes
// "Inheritance" implies a copy operation, and JavaScript doesn't copy object properties (natively, by default). 
// Instead, JS creates a link between two objects, where one object can essentially delegate property/function access to 
// another object. "Delegation" (see Chapter 6) is a much more accurate term for JavaScript's object-linking mechanism.

// Functions aren't constructors, but function calls are "constructor calls" if and only if new is used.

// The important part is Bar.prototype = Object.create( Foo.prototype ). Object.create(..) creates a "new" object out 
// of thin air, and links that new object's internal [[Prototype]] to the object you specify (Foo.prototype in this case).

// In other words, that line says: "make a new 'Bar dot prototype' object that's linked to 'Foo dot prototype'."
// The slight downside is that we have to create a new object, throwing the old one away, instead of modifying the existing
// default object we're provided.

// ES6 adds a Object.setPrototypeOf(..) helper utility, which does the trick in a standard and predictable way.

// Chapter 6: Behavior Delegation
