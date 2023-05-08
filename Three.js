window.onload = () => {
var canvas = document.getElementById("ship-canvas");
var width = document.getElementsByClassName('outer')[0].offsetWidth;
var height = document.getElementsByClassName('outer')[0].offsetHeight;
canvas.width = width;
canvas.height = height;
var c = canvas.getContext("2d");
var left = document.getElementById('left').getBoundingClientRect().left + ((document.getElementById('left').getBoundingClientRect().right - document.getElementById('left').getBoundingClientRect().left)/2);
var right = document.getElementById('right').getBoundingClientRect().left + ((document.getElementById('right').getBoundingClientRect().right - document.getElementById('right').getBoundingClientRect().left)/2);

function Star(x, y, dy, radius) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.closePath();
    c.fillStyle = "white";
    c.fill();
  };

  this.update = function() {
    if (this.y + this.radius > height) {
      this.y = 0;
    }

    this.y += this.dy;

    this.draw();
  };
}

var colors = ["#A7DBD8", "#E0E4CC", "#F38630", "#FA6900", "#FF4E50", "#F9D423"];

function Smoke(x, y, sx, sy, radius) {
  this.x = x;
  this.y = y;
  this.sx = sx;
  this.sy = sy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.closePath();
    c.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    c.fill();
  };

  this.update = function() {
    if (this.y + this.radius > height && this.x < (width / 100) * 50) {
      this.y = (height / 100) * 74;
      this.x = right;
    } else if (this.y + this.radius > height && this.x > (width / 100) * 50) {
      this.y = (height / 100) * 74;
      this.x = left;
    }

    this.x += this.sx;
    this.y += this.sy;

    this.draw();
  };
}

var starsArray = [];
var smokeArrayLeft = [];
var smokeArrayRight = [];

for (let i = 0; i < width; i++) {
  var x = Math.random() * width;
  var y = Math.random() * height;
  var dy = Math.random() * 6 + 2;
  var radius = Math.random() * 3;

  starsArray.push(new Star(x, y, dy, radius));
}

for (let i = 0; i < 200; i++) {
  var x = left;
  var y = (height / 100) * 74;
  var sx = Math.random();
  sx *= Math.floor(Math.random() * 4) == 2 ? 2 : -2;
  var sy = Math.floor(Math.random() * 18) + 6;
  var radius = Math.random() * (height / 50);

  smokeArrayLeft.push(new Smoke(x, y, sx, sy, radius));
}

for (let i = 0; i < 200; i++) {
  var x = right;
  var y = (height / 100) * 74;
  var sx = Math.random();
  sx *= Math.floor(Math.random() * 4) == 2 ? 2 : -2;
  var sy = Math.floor(Math.random() * 18) + 6;
  var radius = Math.random() * (height / 30); 

  smokeArrayRight.push(new Smoke(x, y, sx, sy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, width, height);
  for (var i = 0; i < starsArray.length; i++) {
    starsArray[i].update();
  }

  for (var i = 0; i < smokeArrayLeft.length; i++) {
    smokeArrayLeft[i].update();
  }

  for (var i = 0; i < smokeArrayRight.length; i++) {
    smokeArrayRight[i].update();
  }
}

animate();

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  let name = document.getElementById("full_name");
  let chars = /^[A-Za-z\s]+$/;
  let checkname = name.value.trim();                                       //////check the full_name
  if (!chars.test(checkname)) {
      event.preventDefault();
      let f_input = document.querySelector("input");                      /////border
      f_input.style.borderBlockColor = "red";
      f_input.style.transition = "border-color 0.2s ease-in-out";
      f_input.style.borderRadius = "5px";

      let error_1= document.getElementById('1');                          ////alret
      error_1.classList.add('alert', 'alert-danger');
   
      error_1.innerText = 'only alphabet and spaces';
      error_1.setAttribute('role', 'alert');
        alert("something is wrong");
  }
});

list_month();
list_year();
list_day();



function list_month() {
  for (let i = 1; i <= 12; i++) {
      let option = document.createElement("option");
      option.innerHTML = i;
      let select_list = document.getElementById("select_1_list");
      select_list.appendChild(option);
  }
}
function list_year() {
  for (let i = 2000; i <= 2023; i++) {
      let option = document.createElement("option");
      option.innerHTML = i;
      let select_list = document.getElementById("select_2_list");
      select_list.appendChild(option);
  }
}
function list_day() {
  for (let i = 1; i <= 30; i++) {
      let option = document.createElement("option");
      option.innerHTML = i;
      let select_list = document.getElementById("select_3_list");
      select_list.appendChild(option);
  }
}

}
