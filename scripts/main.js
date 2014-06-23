var cID= clientID || '';
var cSECRET= clientSecret||'';

var template = _.template( $('#sidebar_template').html() );
 
var info=$.getJSON('https://api.github.com/users/katlyngabor').done( function (data) {

  $('#sidebar').html( template(data));

});


var templateTwo= _.template( $('#main_body_template').html());
 

var trial= $.getJSON('https://api.github.com/users/katlyngabor/repos').done(function (data) {
_.each(data,function(info){
$('#main-body').append(templateTwo(info));

});

});

console.log(trial);

