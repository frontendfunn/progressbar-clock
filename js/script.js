/*
 * Included Jquery
 */
$(document).ready(function () {
  $(".barClock").each(function () {
    var barClock = $(this);
    let hoursProgress = $(barClock).find(".hours .progress");
    let minutesProgress = $(barClock).find(".minutes .progress");
    let secondsProgress = $(barClock).find(".seconds .progress");
    let hoursValue = $(barClock).find(".hours .value");
    let minutesValue = $(barClock).find(".minutes .value");
    let secondsValue = $(barClock).find(".seconds .value");
    let interval = setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      hoursProgress.css("width", getHoursPercentage(hours) + "%");
      minutesProgress.css("width", getPercentage(minutes) + "%");
      secondsProgress.css("width", getPercentage(seconds) + "%");
      hoursValue.text(hours);
      minutesValue.text(minutes);
      secondsValue.text(seconds);
    }, 1000);
  });
  const getPercentage = (x) => (x / 60) * 100;
  const getHoursPercentage = (x) => (x / 24) * 100;
});
