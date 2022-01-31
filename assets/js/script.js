
// current Date in header
var currentDate = $("#currentDay");
currentDate = moment(currentDate).format("dddd, MMMM Do");

// header to append current Date
var header = $("header");
header.append(currentDate);

var container = $(".container");

var now = moment();

// credits for function layout to https://codepen.io/judebloom/pen/RwGbVWB
var currentTime = {text: moment().format("hA"), hour: moment().hour()};

var hoursOfTheDay = Array.from(new Array(9)).map((v, i) => {
  var text = moment().hour(i).format("hA");
  var hour = moment().hour(i);
  return {text, hour};
});

var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");

function color() {
  return time === currentTime.text
    ? "past"
    : time < now
    ? "present"
    : "future";
}

hoursOfTheDay.forEach((hr) => {

  var textArea = document.querySelectorAll("textarea");
    textArea.addClass(color(hr));

  eventForm.submit((e) => {
    e.preventDefault();


    //set items in local storage.
    localStorage.setItem(time, text);
    
  });
});


function loadEvents(){
  if (storedEvents) {
    for(var i = 0; i < 9; i++){
      Events.hour = storedEvents;
    }
  }
  if(!storedEvents){
    for(var i = 0; i < 9; i++){
      Events[i] = "";
    }
  }
};


loadEvents();