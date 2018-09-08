var $ = require('jquery');
var moment = require('moment');

$(document).ready(function() {
    var currDate = moment().format('dddd');
    $("#sp").append("<br />The current day is: " + currDate);
});

