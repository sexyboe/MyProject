// var x = 2;
// var y = 3;
// var z;

// z = x + y;

// // console.log(z);
// // document.getElementById("add").innerHTML = z;
// // document.getElementsByTagName("h1")[0].innerHTML = z;
// // document.getElementsByClassName("l")[0].innerHTML = z;

// // document.querySelector(".p").innerHTML = z;
// // document.querySelectorAll(".s").innerHTML = "hell";
// // document.getElementsByClassName('.l')[0].innerHTML=z;
// // window.alert(z);

// var x = document.querySelectorAll("div.s");

// document.getElementById("add")[0].innerHTML = x;

// operators \\

// var x = 3;
// var y = 6;
// var z = 10;

// if (x > y && x > z) {
//   document.write("x is greater");
// } else if (y > x && y > z) {
//   document.write("y is greater");
// } else document.write("z is greater");

// if (x < y) {
//   if (y > z) {
//     document.write("y is greater");
//   } else {
//     document.write("z is greater");
//   }
// } else document.write("x is greater");

// z = y % x;

// x+=y;
// console.log(x+=y);

// document.write("<br>" + z);
// document.write("<br>" + (x>y));

var day;
switch (new Date().getMonth()) {
  case 0:
    day = "january";
    break;
  case 1:
    day = "february";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "january";
}

document.write(day);

// while (i < 9) {
//   document.write(i);
//   i++;
// }

// var i = 12;
// do {
//   document.write(i);
//   i++;
// } while (i < 9);

for (i = 0; i < 9; i++) {
  document.write(i);
}

var students = ["sandesh", "don"];
var address = ["pokhara", "world"];
var age = [30, 40];

for (i = 0; i < students.length; i++) {
  document.write(
    "<br>" + students[i] + "<br>" + address[i] + "<br> <br>" + age[i] + "<br>"
  );
}

var object = [
  {
    name: "dell",
    price: 700,
    date: 2020,
  },

  {
    name: "hp",
    price: 900,
    date: 2022,
  },
];

document.write(object[0].name);

function OnMouseOver() {
  document.getElementById("over").innerHTML = "On mouse over";
}

function OnMouseOut() {
  var text = document.getElementById("over");

  document.getElementById("over").innerHTML = text;
}

function OnMouseDown() {
  text = document.getElementById("over").innerHTML = "hello id hown";
}

function OnChange() {
  var text = document.getElementById("f_name");
  text.style.color = "red";
}

function Style() {
  document.getElementById("dome").style.cssText = "color:red; font-size:30px;";
}

var load = document.getElementById("loading");

setInterval(function OnLoad() {
  load.style.display = "none";
}, 1000);

// window.onload = function() {
//   document.getElementById("loading").style.display = "block";
//   setTimeout(function() {
//     document.getElementById("loading").style.display = "none";
//   }, 3000);
// };
