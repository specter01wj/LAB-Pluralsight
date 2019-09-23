"use strict";
var wowify_1 = require('./wowify');
var $ = require('jquery');
var interestingThings = ['The Sun', 'The Moon', 'The Stars'];
var result = wowify_1.default.apply(void 0, interestingThings);
$('#result').html(result.join('<br/>'));
