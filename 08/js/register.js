function newRegister() {
  var newP = document.createElement("p");
  var userName = document.querySelector("#userName");
  var newText = document.createTextNode(userName.value);
  newP.appendChild(newText);

  var delBtn = document.createElement("span");
  var delText = document.createTextNode("X");
  delBtn.setAttribute("class", "del");
  delBtn.appendChild(delText);
  newP.appendChild(delBtn);

  var nameList = document.querySelector("#nameList");
  //   nameList.appendChild(newP);
  nameList.insertBefore(newP, nameList.childNodes[0]);
  userName.value = "";

  var removeBtns = document.querySelectorAll(".del");
  removeBtns.forEach((removebtn) => {
    removebtn.addEventListener("click", function () {
      if (this.parentNode.parentNode) {
        this.parentNode.parentNode.removeChild(this.parentNode);
        // 현재 노드(span 노드)의 부모 노드(p 노드) 삭제
      }
    });
  });
}
