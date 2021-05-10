function getDateTime() {
  let now = new Date();
  let getDayName = now.getDay();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }

  if (getDayName % 7 == 1) {
    getDayName = "Pazartesi";
  } else if (getDayName % 7 == 2) {
    getDayName = "Salı";
  } else if (getDayName % 7 == 3) {
    getDayName = "Çarşamba";
  } else if (getDayName % 7 == 4) {
    getDayName = "Perşembe";
  } else if (getDayName % 7 == 5) {
    getDayName = "Cuma";
  } else if (getDayName % 7 == 6) {
    getDayName = "Cumartesi";
  } else if (getDayName % 7 == 7) {
    getDayName = "Pazar";
  }

  let dateTime = hour + ":" + minute + ":" + second + " " + getDayName;
  return dateTime;
}

let setName = prompt("Lütfen isminizi giriniz : ");

document.getElementById("getName").innerHTML = setName;

setInterval(function () {
  currentTime = getDateTime();
  document.getElementById("getDate").innerHTML = currentTime;
}, 1000);
