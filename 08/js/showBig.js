var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

smallPics.forEach((element) => {
  element.addEventListener("click", showBig);
});

function showBig() {
  bigPic.src = this.src;
}
