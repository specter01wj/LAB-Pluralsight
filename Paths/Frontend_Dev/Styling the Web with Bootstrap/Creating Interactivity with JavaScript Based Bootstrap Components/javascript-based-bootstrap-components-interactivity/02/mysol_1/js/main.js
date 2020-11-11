
$(document).ready(function() {

	$('.dropdown-toggle').dropdown({
		"offset": -100,
		"flip": false
	});



});


function displayCategories() {
	$('#pieCategories').dropdown('toggle');
}


$('#pieCategories').on('show.bs.dropdown', function() {
	console.log('dropdown works!');
});


