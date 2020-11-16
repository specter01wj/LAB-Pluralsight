let tooltipButton = document.getElementById('tooltipButton');
let popButton = document.getElementById('popButton');

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
    	trigger: 'click',
    	html: true
    });

    $('.toast').toast('show');

});

// Dropdown methods
function displayCategories(){
    $('#pieCatergories').dropdown('toggle');
}

// Dropdown events
$('#pieCatergories').on('show.bs.dropdown', function () {
    // alert('This')
})


function viewPopOvers() {
	$('#pop1').popover('toggle');
}


function showTooltips(){
    $('[data-toggle="tooltip"]').tooltip('toggle');
}


$('[data-toggle="tooltip"]').on('show.bs.tooltip', function () {
    tooltipButton.innerHTML = "Hide Tooltips";
})

$('[data-toggle="tooltip"]').on('hide.bs.tooltip', function () {
    tooltipButton.innerHTML = "Show Tooltips";
})




