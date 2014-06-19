
var cID= clientID || '';
var cSECRET= clientSecret||'';

var template = _.template( $('#sidebar_template').html() );
 
var info=$.getJSON('https://api.github.com/users/katlyngabor').done( function (data) {

  $('#sidebar').html( template(data));

});

var templateTwo= _.template( $('#main_body_template').html() );


$.getJSON('https://api.github.com/users/katlyngabor/repos').done(function (data) {
	
	$('#main-body').html( templateTwo(data[0]));
	
});

// console.log(info_two);
