//console.log('here')

//object.onclick = function(){myScript};
sendalert = true;
//document.addEventListener("DOMContentLoaded", function () {
let tileDivs = document.querySelectorAll(".TVtile");
let thumbs = document.querySelectorAll(".preview .pic");
let vids = document.querySelectorAll("video");
let muz = document.querySelector("#music .menu2");
let mpthree = document.querySelector("#music audio");
let bkrdAud = document.querySelector("#bkrdAud");
mpthree.volume = 0.2;
let musictile = document.querySelector("#Tmusic");
let tint = document.querySelector("#tint");
let timeclock = new Date();
let maxTint = 0.85;
let tintLevel = 0;
let comp = document.querySelector("#computer");
let frame = document.querySelectorAll("iframe.web");
let tab = document.querySelectorAll("button.site");
//alert(tab);
let tabcount =
  document.querySelectorAll("button.site").length -
  document.querySelectorAll("button.site.hidethis").length;
alert(tabcount);
let tabplus = document.querySelector("#tabplus");

tabplus.addEventListener("click", function () {
  if (tabcount < 7) {
    tabcount += 1;
    alert(tabcount);
    document.querySelector("iframe.showthis").classList.add("hidethis");
    document.querySelector("iframe.showthis").classList.remove("showthis");
    document.querySelector("#frame" + tabcount).classList.remove("hidethis");
    document.querySelector("#frame" + tabcount).classList.add("showthis");
    document.querySelector("#tab" + tabcount).classList.remove("hidethis");
    document.querySelector(".tab.active").classList.add("passive");
    document.querySelector(".tab.active").classList.remove("active");
    document
      .querySelector("#tab" + tabcount)
      .classList.add("showthis", "active");
    if (tabcount == 7) {
      document.querySelector("#tabplus").classList.add("hidethis");
    }
  }
  /*
  addtab =
    "<button id='tab" +
    tabcount +
    "' class='tab site' link = 'frame'" +
    tabcount +
    ">TAB" +
    tabcount +
    "</iframe>";
  addsite =
    "<iframe id='frame" +
    tabcount +
    "' class='showthis' src='https://bing.com/' frameborder='0'></iframe>";

  alert(tabcount);

  tabplus.insertAdjacentHTML("beforebegin", addtab);
  comp.insertAdjacentHTML("beforeend", addsite);
  */
});

tab.forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelector(".tab.active").classList.add("passive");
    document.querySelector(".tab.active").classList.remove("active");
    button.classList.add("active");
    // alert(document.querySelector("iframe.showthis").getAttribute("src"));
    console.log("tabClicked");
    //frame.setAttribute("src", button.getAttribute("link"));
    document.querySelector("iframe.showthis").classList.add("hidethis");
    document.querySelector("iframe.showthis").classList.remove("showthis");
    //document.querySelector("button.active").classList.add("passive");
    //document.querySelector("button.active").classList.remove("active");
    //frame.style["display"] = "none";
    // alert(button.getAttribute("link"));
    document
      .getElementById(button.getAttribute("link"))
      .classList.remove("hidethis");
    document
      .getElementById(button.getAttribute("link"))
      .classList.add("showthis");
    //setAttribute();
    //button.getAttribute("link");
  });
});

bkrdAud.volume = 0.5;
//bkrdAud.play();
/*bkrdAud.addEventListener(
  "ended",
  function () {
    alert("x");
    bkrdAud.currentTime = 0;
    bkrdAud.play();
  },
  false
);*/

console.log(timeclock.getHours() + timeclock.getMinutes() / 60);
function findTint() {
  timeclock = new Date();
  setIt = Math.abs(12 - (timeclock.getHours() + timeclock.getMinutes() / 60));
  if (setIt <= 2) {
    tintLevel = 0;
  } else if (setIt >= 7) {
    tintLevel = maxTint;
  } else {
    tintLevel = (maxTint * setIt) / 7;
  }
  console.log("setting...");
  console.log(setIt);
  console.log(tintLevel);
  tint.style["background-color"] = "rgba(0, 0, 0, " + tintLevel + ")";
  //console.log(tint.style.backgroundColor);
  console.log("set");
  console.log(tintLevel);
  //tint.style["background-color"] = "red";
}
findTint();
setInterval(findTint, 60000);
tileDivs.forEach((group) => {
  group.addEventListener("click", function () {
    // let thumbnails = document.querySelectorAll(".doclist");
    //  alert(thumbnails);
    console.log("is this workin");
    //generates random number between 0 and 4
    //let randomColorIndex = Math.floor(Math.random() * colors.length);
    //let randomColor = colors[randomColorIndex];
    //group.style.display = block;
    //group.querySelectorAll("div").classList.remove("hidethis");
    //group.querySelectorAll("div").classList.add("showthis");
    // group.firstElementChild.style.display = "block";
    group.classList.remove("glow");
    //group.classList.add("hidethis");
    group.firstElementChild.classList.remove("hidethis");
    group.firstElementChild.classList.add("showthis");
    group.firstElementChild.classList.add("more");
  });
});

let homeButton = document.getElementById("homeIcon");
homeButton.addEventListener("click", function () {
  mpthree.pause();
  /* muz.setAttribute("src", "");
  muz.setAttribute("src", "https://tunein.com/embed/player/s153438/");*/
  tileDivs.forEach((group) => {
    group.classList.add("glow");
    group.firstElementChild.classList.remove("showthis");
    group.firstElementChild.classList.remove("more");
    group.firstElementChild.classList.add("hidethis");
  });
  thumbs.forEach((thing) => {
    //    thing.firstElementChild.classList.remove("showthis");
    //    thing.firstElementChild.classList.add("hidethis");
    thing.nextElementSibling.classList.remove("showthis");
    thing.nextElementSibling.classList.add("hidethis");
    thing.nextElementSibling.pause();
  });
});
/*
homeButton.addEventListener("mouseover", function () {
  if (sendalert && document.querySelector(".showthis #music") !== null) {
    alert(
      "Just an FYI that music will continue to play if it's not stopped.\n\n" +
        "I'm all for the background music but don't want you to get annoyed with it.\n\n" +
        "Alerts can also be annoying, so I promise not to mention it again... unless you refresh."
    );

    sendalert = false;
  }
});
*/
thumbs.forEach((thing) => {
  thing.addEventListener("click", function () {
    console.log("is this workin");
    // alert("x");
    changeit = thing.nextElementSibling;
    changeit.classList.remove("hidethis");
    changeit.classList.add("showthis");
    changeit.play();
    //alert("x");
    //thing.firstElementChild.classList.add("more");
  });
});

vids.forEach((vid) => {
  vid.addEventListener("click", function () {
    if (!vid.paused) {
      vid.pause();
    } else {
      vid.play();
    }
  });
});

musictile.addEventListener("click", function () {
  mpthree.play();
});

//});
/*
function setup(){
    createCanvas(400, 400);
    background(240, 240, 240);
    console.log('it worked');
    circle(width/2, height/2, 40);
}

function draw(){
  //  console.log('this is another one');
  noStroke();
  fill('blue');
  circle(mouseX, mouseY, 40);
  fill('red');
  circle(width/2, height/2, 40);
    //noLoop();
}
*/
/* function setup() {
    createCanvas(720, 400);
    background(230);
    strokeWeight(2);
  }
  
  function draw() {
    background(230);
    if (mouseIsPressed) {
      stroke(255);
    } else {
      stroke(237, 34, 93);
    }
     line(mouseX - 66, mouseY, mouseX + 66, mouseY);
    // line(mouseX, mouseY - 66, mouseX, mouseY + 66);
  } */
/* 
let colorlist = ["gold", "yellow", "turquoise", "red"];

function setup() {
    //this function runs once when the webpage is loaded
    //within this function, you can use p5
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    background(255);
}

function draw() {
    //this functions runs many times every second!
    //within this function, you can use p5 syntax
    noStroke();
    fill(random(colorlist));
    ellipse(mouseX, mouseY, 25, 25);
}
 */

//outside of the setup and draw functions (which are automatically called) - the rest of your code here is plain old javascript
