/* use an array to keep track of your shopping list */

var list = ['poptarts', 'ramen noodles', 'chips', 'salsa', 'coffee']

list.push('fruit loops');
/*list[4] = 'fair trade coffee'; also works
/* list.splice(4, 1, 'fair trade coffee')
list.splice(2,1, 'rice')
list.splice(3, 1, 'beans') */
list.splice(2, 3, 'rice', 'beans', 'fair trade coffee');

var cart = [];

/* cart[0] = list.pop(5)
*/
cart.push(list.pop());
cart.push(list.shift());

while(list.length > 0)
	cart.push(list.pop());

cart.sort().reverse();
console.log("my cart has: ", cart.join(', '));
