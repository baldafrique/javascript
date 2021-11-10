var itemList = [];
var addBtn = document.querySelector("#add");

// addBtn.onclick = addList();
addBtn.addEventListener("click", addList);

function addList() {
  var item = document.querySelector("#item").value;
  if (item) {
    itemList.push(item);
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
  }

  showList();
}

function showList() {
  var list = "<ul>";
  var id = 0;
  itemList.forEach((element) => {
    list += `<li>${element}<span class='close' id=${id++}>X</span></li>`;
  });
  list += "</ul>";

  document.querySelector("#itemList").innerHTML = list;

  var remove = document.querySelectorAll(".close");

  remove.forEach((element) => {
    element.addEventListener("click", removeList);
  });
}

function removeList() {
  var id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}
