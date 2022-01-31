
// current Date in header
var currentDate = $("#currentDay");
    currentDate = moment(currentDate).format("dddd, MMMM Do");

// header to append current Date
var header = $("header");
    header.append(currentDate);

const container = $(".container");

const now = moment();

const currentTime = {text: moment().format("h:00 A"), hour: moment().hour()};

const range = (start, end, step) => {
  return Array.from(
    Array.from(Array(Math.ceil((end - start) / step)).keys()),
    (x) => start + x * step
  );
};

const hoursOfTheDay = Array.from(new Array(9)).map((v, i) => {
  const text = moment().hour(i).format("hA");
  const hour = moment().hour(i);
  return {text, hour};
});


hoursOfTheDay.forEach((hr) => {
  const eventForm = $(`<form data-name = "${hr.text}" class = "row row-cols-3 time-block"></form>`);

  const time = $(`<div class = "hour col d-flex align-items-center justify-content-center">${hr.text}</div>`);

  const textArea = $(`<textarea name = "${hr.text}" class = "description col col-9 ${color(hr)}">${window.localStorage.getItem(hr.text) || ""}</textarea>`);

  textArea.keydown((e) => {
    if (e.keyCode == 8 && !e.shiftKey) {
      e.preventDefault();
      return false;
    }
  });

  
  const saveButton = $("<button type = 'submit' class = 'col d-flex align-items-center justify-content-center rounded'><span class = 'oi oi-box'></span></button>");

  eventForm.submit((e) => {
    e.preventDefault();

    const value = $("textarea[name='${hr.text}']").val();

    window.localStorage.setItem(hr.text, value);
  });

  
  function color() {
    
    return time.text === currentTime.text
      ? "past"
      : time.hour < now
      ? "present"
      : "future";
  }

  
  eventForm.append(time);
  eventForm.append(textArea);
  eventForm.append(saveButton);

  container.append(eventForm);
});
