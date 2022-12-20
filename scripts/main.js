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
let tabcount =
  document.querySelectorAll("button.site").length -
  document.querySelectorAll("button.site.hidethis").length;
let tabplus = document.querySelector("#tabplus");

//add a new browser tab
tabplus.addEventListener("click", function () {
  if (tabcount < 7) {
    tabcount += 1;
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
    //don't allow any more
    if (tabcount == 7) {
      document.querySelector("#tabplus").classList.add("hidethis");
    }
  }
});

//switching browser tabes
tab.forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelector(".tab.active").classList.add("passive");
    document.querySelector(".tab.active").classList.remove("active");
    button.classList.add("active");
    console.log("tabClicked");
    document.querySelector("iframe.showthis").classList.add("hidethis");
    document.querySelector("iframe.showthis").classList.remove("showthis");
    document
      .getElementById(button.getAttribute("link"))
      .classList.remove("hidethis");
    document
      .getElementById(button.getAttribute("link"))
      .classList.add("showthis");
  });
});

bkrdAud.volume = 0.5;

//make the room darker
console.log(timeclock.getHours() + timeclock.getMinutes() / 60);
function findTint() {
  timeclock = new Date();
  setIt = Math.abs(12 - (timeclock.getHours() + timeclock.getMinutes() / 60));
  if (setIt <= 2) {
    tintLevel = 0;
  } else if (setIt >= 7) {
    tintLevel = maxTint;
  } //don't tint during the above hours
  else {
    tintLevel = (maxTint * setIt) / 7;
  }
  tint.style["background-color"] = "rgba(0, 0, 0, " + tintLevel + ")";
}

findTint(); //set initial darkness
setInterval(findTint, 60000); //recalculate every minute

//when clicked, hide menu - show selected submenus
tileDivs.forEach((group) => {
  group.addEventListener("click", function () {
    group.classList.remove("glow");
    group.firstElementChild.classList.remove("hidethis");
    group.firstElementChild.classList.add("showthis");
    group.firstElementChild.classList.add("more");
  });
});

let homeButton = document.getElementById("homeIcon");

//clicking the home button
homeButton.addEventListener("click", function () {
  mpthree.pause(); //stop music
  tileDivs.forEach((group) => {
    //back to default home screen/settings
    group.classList.add("glow");
    group.firstElementChild.classList.remove("showthis");
    group.firstElementChild.classList.remove("more");
    group.firstElementChild.classList.add("hidethis");
  });
  thumbs.forEach((thing) => {
    //pause video, hide video
    thing.nextElementSibling.classList.remove("showthis");
    thing.nextElementSibling.classList.add("hidethis");
    thing.nextElementSibling.pause();
  });
});

//click thumbnail of playable
thumbs.forEach((thing) => {
  thing.addEventListener("click", function () {
    //show/play the nested vid
    changeit = thing.nextElementSibling;
    changeit.classList.remove("hidethis");
    changeit.classList.add("showthis");
    changeit.play();
  });
});

//add pause/play for vids
vids.forEach((vid) => {
  vid.addEventListener("click", function () {
    if (!vid.paused) {
      vid.pause();
    } else {
      vid.play();
    }
  });
});

//play music when tile clicked
musictile.addEventListener("click", function () {
  mpthree.play();
});

alert(
  "Welcome, and thanks for coming to my zone! Enjoy your stay!\n\n" +
    "Depending on the time of day, the room can get pretty dark.\n\n" +
    "Videos may take some to load. (It adds to the realism, right?)\n\n" +
    "REALLY IMPORTANT: The remote control on my knee serves as the home button."
);
