/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$( document ).ready(function() {
    

	/*$("#target").click(function () {
        $(this).animate({
        	'width': '+=20',
        	'height': '+=20',
        	'background-color': 'red'
        });
        $(this).effect('bounce');
    });*/

	/*$("#target")
        .css("position", "relative")
        .click(function () {
            $(this).animate({
            	left: 300
            }, 1000, 'easeInOutElastic');
    });*/

    $("#target")
    	.css("position", "relative")
    	.click(function () {
        	$(this).toggleClass("leftTarget", "slow");
    });


	$("#draggables").children().draggable();

    $("#trash").droppable({
        activeClass: "opaque",
        drop: function (event, ui) {
            ui.draggable.hide("explode");
        }
    });












});