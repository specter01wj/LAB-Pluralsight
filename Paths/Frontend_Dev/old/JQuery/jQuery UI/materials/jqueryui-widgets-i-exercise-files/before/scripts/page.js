/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />


$( document ).ready(function() {
    
	$("#dialog").dialog(
		{
            autoOpen: false,
            modal: true,
            resizable: true,
            draggable: true,
            position: "top",
            buttons: {
                "Cancel": function () {
                    $("#dialog").dialog("close");
                    $("#dialogDecision").text("You Cancelled!");
                },
                "Confirm": function () {
                	$("#dialog").dialog("close");
                    $("#dialogDecision").text("Confirmed!");
                }
            }
        }
    );

	$("#openDialog").click(function () {
        $("#dialog").dialog('open');
    });

	$("#progress").progressbar({ value: 30 });

	var value = 100;

    //countdown();

    function countdown() {
        value--;
        $("#progress").progressbar("option", "value", value);
        $("#countdown").text(value);

        if (value > 0) {
            setTimeout(countdown, 100);
        }
        else {
            $("#countdown").text("completed");
            $("#progress").progressbar("disable");
        }
    }

    $("#slider").slider(
    	{ 
    		min: 0, max: 100, value: 40, 
    		slide: function (event, ui) {
	        	$("#slider").prev().css({ 
	        		opacity: ui.value / 100 
	        	});
	    	}
    	}
    );

    $("#tabs").tabs();

});
