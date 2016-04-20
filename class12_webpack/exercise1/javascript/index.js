var $ = require('jquery');
var _ = require('lodash');

var dice = [1,2,3,4,5,6];

module.exports = $("#roll").on('click', function(){

  var outcome = _.shuffle(dice).pop();
  $("#score").html("<h1> "+ outcome +"</h1>");
  $(this).text('Roll Again?');

});