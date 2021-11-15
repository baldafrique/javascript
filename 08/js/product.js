var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for (i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", function () {
    newPic = this.src;
    bigPic.setAttribute("src", newPic);
  });
}

var view = document.querySelector("#view");
view.addEventListener("click", function () {
  if (document.querySelector("#detail").style.display === "") {
    document.querySelector("#detail").style.display = "block";
    view.innerHTML = "상세 내용 닫기";
  } else {
    document.querySelector("#detail").style.display = "";
    view.innerHTML = "상세 내용 보기";
  }
});
