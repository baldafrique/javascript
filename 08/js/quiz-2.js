var check = document.querySelectorAll(".check");
check.forEach((element) => {
  element.addEventListener("click", function () {
    this.parentNode.style.color = "#ccc";
  });
});
