var obj = {}; //obj with all keypress functions

obj.reset = function () {
  alert(document.querySelector("#name").innerHTML + "GaMe OvEr!");
  for (i = 0; i < bricks.length; i++) {
    bricks[i].style.top = 9 + "vh";
    curr[i] = 9;
  }
  d = 60;
  l = 50;
  littlecup.style.top = d + "vh";
  littlecup.style.left = l + "vw";
  document.querySelector("#score").innerHTML = 0; // SCORE = 0
  document.getElementById("fondo").style.backgroundImage =
    'url("levelone.png")';
  document.querySelector("#name").innerHTML = prompt(
    "Enter your name and survive the earthquake: "
  );
};

obj.win = function () {
  alert(document.querySelector("#name").innerHTML + " You survived!");
  //
  for (i = 0; i < bricks.length; i++) {
    bricks[i].style.top = 9 + "vh";
    curr[i] = 9;
  }
  d = 60;
  l = 50;
  littlecup.style.top = d + "vh";
  littlecup.style.left = l + "vw";
  document.querySelector("#score").innerHTML = 0; // SCORE = 0
  document.getElementById("fondo").style.backgroundImage =
    'url("levelone.png")';
  document.querySelector("#name").innerHTML = prompt("Enter your name: ");
  //
};

obj.f = function () {
  a = parseInt(littlecup.style.left);
  b = parseInt(littlecup.style.top);
  for (i = 0; i < bricks.length; i++) {
    if (
      (parseInt(bricks[i].style.left) + 5 > a &&
        a > parseInt(bricks[i].style.left)) ||
      (a + 5 > parseInt(bricks[i].style.left) &&
        a < parseInt(bricks[i].style.left)) ||
      (a + 5 <= parseInt(bricks[i].style.left) + 5 &&
        a >= parseInt(bricks[i].style.left))
    ) {
      if (
        parseInt(bricks[i].style.top) + 5 > b &&
        b + 5 > parseInt(bricks[i].style.top)
      ) {
        obj.reset();
        return;
      }
    }
  }
  k = event.key.toLowerCase();
  if (k == "s") {
    if (100 <= d + 7) {
      obj.reset();
      return;
    }
    d += 2;
    littlecup.style.top = d + "vh";
  } else if (k == "w") {
    if (d <= 8) {
      obj.reset();
      return;
    }
    d -= 2;
    littlecup.style.top = d + "vh";
  } else if (k == "d") {
    if (100 <= l + 6) {
      obj.reset();
      return;
    }
    l += 2;
    littlecup.style.left = l + "vw";
  } else if (k == "a") {
    if (l <= 0) {
      obj.reset();
      return;
    }
    l -= 2;
    littlecup.style.left = l + "vw";
  }
  a = parseInt(littlecup.style.left);
  b = parseInt(littlecup.style.top);
  for (i = 0; i < bricks.length; i++) {
    bricks[i].style.top = curr[i] + "vh";
    curr[i] = curr[i] + speeds[i];
    if (curr[i] >= 94) {
      curr[i] = 9;
      k = Math.random() * 7;
      if (k < 1) {
        k = 1;
      }
      speeds[i] = k;
      document.querySelector("#score").innerHTML =
        parseInt(document.querySelector("#score").innerHTML) + 1;
    }
  }
  // CHANGE LEVEL
  if (parseInt(document.querySelector("#score").innerHTML) > 10) {
    document.getElementById("fondo").style.backgroundImage =
      'url("leveltwo.jpg")';
  }
  // WIN
  if (parseInt(document.querySelector("#score").innerHTML) > 20) {
    bricks.visibillity = "hidden";
    document.getElementById("fondo").style.backgroundImage = 'url("win.jpg")';
    setTimeout(function () {
      obj.win();
    }, 100);
  }
};

// main code starts
document.querySelector("#name").innerHTML = prompt("Enter your name: ");

d = 60;
l = 50;
bricks = document.querySelectorAll(".brick>div"); //
speeds = [];
for (i = 0; i < bricks.length; i++) {
  k = Math.random() ** 2 * 7;
  if (k < 1) {
    k = 1;
  }
  speeds[i] = k;
}
curr = [];
for (i = 0; i < bricks.length; i++) {
  curr[i] = speeds[i] + 9;
}

littlecup = document.querySelector("#player"); //main littlecup

window.addEventListener("keypress", obj.f, false); //keypress event handler
