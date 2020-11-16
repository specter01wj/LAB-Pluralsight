$(document).ready(function(){

    // Dropdown options
    $('.dropdown-toggle').dropdown({
        "offset": -100,
        "flip": false
    });

    $('[data-toggle="tooltip"]').tooltip({
    	delay: { show: 1000, hide: 1000 },
    	html: true,
    	placement: 'bottom',
    	animation: false,
    	title: 'Click to learn more',



    	
    	trigger: 'hover',
    	offset: 100
    });

    $('[data-toggle="popover"]').popover({

    });

});

// Dropdown methods
function displayCategories(){
    $('#pieCatergories').dropdown('toggle');
}

// Dropdown events
$('#pieCatergories').on('show.bs.dropdown', function () {
    // alert('This')
})