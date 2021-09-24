// DOM
const time = document.querySelector("#time"),
  greet = document.querySelector("#greeting"),
  author = document.querySelector("#author"),
  focus = document.querySelector("#focus");

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    sec = today.getSeconds();

  //   set AmPm
  const amPm = hour <= 12 ? "PM" : "AM";

  time.innerHTML = `${hour}<span>:</span>${addZero(
    minute
  )}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);

  // Set 12 format

  hour = hour % 12 || 12;
}

// Add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set background image according the time
function setBg() {
  const today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = "url(../assets/images/morning.jpg)";
    greet.textContent = "Good Morning";
  } else if (hour < 18) {
    //   afternoon
    document.body.style.backgroundImage = "url(../assets/images/afternoon.jpg)";
    greet.textContent = "Good Afternoon";
  } else {
    //   evening
    document.body.style.backgroundImage = "url(../assets/images/evening.jpg)";
    document.body.style.color = "white";
    greet.textContent = "Good Evening";
  }
}

// Set Name

function getName() {
  if (localStorage.getItem("name") === "") {
    author.textContent = "[Enter Name]";
  } else {
    author.textContent = localStorage.getItem("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    // make sure that enter is pressed
    if (e.which === 13 || e.keycode === 13) {
      localStorage.setItem("name", e.target.innerText);
      author.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// set Focus
function getFocus() {
  if (localStorage.getItem("details") === null) {
    focus.textContent = "[Enter Details]";
  } else {
    focus.textContent = localStorage.getItem("details");
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // make sure that Enter is pressed
    if (e.which === 13 || e.keycode === 13) {
      localStorage.setItem("details", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("details", e.target.innerText);
  }
}

author.addEventListener("keypress", setName);
author.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBg();
getName();
getFocus();
