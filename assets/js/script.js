
var currentDate = $("#currentDay");
    currentDate = moment(currentDate).format("dddd, MMMM Do");

var header = $("header");
    header.append(currentDate);

