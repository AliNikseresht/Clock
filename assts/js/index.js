
let deg = 6;
let _sc = document.querySelector("#sc");
let _mn = document.querySelector("#mn");
let _hr = document.querySelector("#hr");

setInterval(() => {
  let _day = new Date();

  let ss = _day.getSeconds() * deg;
  let mm = _day.getMinutes() * deg;
  let hh = _day.getHours() * 30;
  
  _sc.style.transform = `rotateZ(${ss}deg)`;
  _mn.style.transform = `rotateZ(${mm}deg)`;
  _hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;

}), 1000;

