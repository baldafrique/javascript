document.querySelectorAll(".checkbox");
var buttons = document.querySelectorAll(".checkbox");
var total = document.querySelector("#total");
var price = 24000;

buttons.forEach((button) => {
  button.addEventListener("click", calc);
});

function calc() {
  if (this.checked) {
    price += parseInt(this.value);
  } else {
    price -= parseInt(this.value);
  }
  total.value = price + "원";
}
