// Variables

var todaysDate = new Date();
var dateText = document.querySelector(".dateHead");
var currentTime = moment().format("hh:mm:ss");
var currentHour = todaysDate.getHours();


// Overall time

dateText.innerHTML = todaysDate.toLocaleString();

// Save data into local storage

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var activity = $(this).siblings(".description").val();
    console.log(activity);
    var hour = $(this).parent().attr("id");
    console.log(hour);
    localStorage.setItem(hour, activity);
  });
  function checkHour() {
    $(".time-block").each(function () {
      const scheduleHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(scheduleHour);

      // colors of each row

      if (scheduleHour > currentHour) {
        $(this).addClass("past");
      } else if (scheduleHour < currentHour) {
        $(this).removeClass('past');
        $(this).addClass('future');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      }
    });



  }

  // load data from each row into local storage

  checkHour();
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));


});



