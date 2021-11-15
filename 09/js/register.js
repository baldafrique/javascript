var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

userId.addEventListener("change", checkId);

function checkId() {
  if (this.value.length < 4 || userId.value.length > 15) {
    alert("4~15자리의 영문과 숫자를 사용하세요.");
    userId.select();
  }
}

pw1.addEventListener("change", checkPw);
pw2.addEventListener("change", comparePw);

function checkPw() {
  if (this.value.length < 8) {
    alert("비밀번호는 8자리 이상이어야 합니다.");
    this.value = "";
    this.focus();
  }
}

function comparePw() {
  if (pw1.value != this.value) {
    alert("암호가 다릅니다. 다시 입력하세요.");
    this.value = "";
    this.focus();
  }
}
