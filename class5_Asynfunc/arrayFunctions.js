var players = [
    {firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
    {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
    {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
    {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
    {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
    {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
    {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

//Players named "Mike"
// var goodPlayers = players.find(function(player){
// 	return player.firstName === 'Mike'
// });

//Running Backs
// var goodPlayers = players.filter(function(player){
// 	return player.position === 'RB'
// });

//Last Names
// var goodPlayers = players.map(function(player){
// 	return player.lastName 
// });

// Full Names of all RB with more than 5 touchdowns
// var myfilter = function(player){
// 	return (player.position === 'RB' && player.touchdowns > 5)
// }
// var goodPlayers = players.filter(myfilter);

// # of touchdowns only by RB
var goodPlayers = players.filter(function(player){
	return player.position == 'RB';
})
	.reduce(function(total, player){ //.reduce is getting chained to .filter
	return total += player.touchdowns;
},0)
console.log(goodPlayers)
