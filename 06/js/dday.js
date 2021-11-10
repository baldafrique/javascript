var toNow = new Date();
var firstDay = prompt("첫 만남은 언제인가요?", "YYYYMMDD");
firstDay = new Date(
  `${firstDay.slice(0, 4)}-${firstDay.slice(4, 6)}-${firstDay.slice(6, 8)}`
);
var toFirst = firstDay.getTime();
var toNow = toNow.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.ceil(passedTime / (1000 * 60 * 60 * 24));

document.querySelector("#accent").innerHTML = `${passedDay}일`;

const oneDay = 1000 * 60 * 60 * 24;
var future, someday, year, month, date, param;

function set(day) {
  future = toFirst + day * oneDay;
  someday = new Date(future);
  year = someday.getFullYear();
  month = someday.getMonth() + 1;
  if (day != 365) {
    date = someday.getDate() - 1;
  } else {
    date = someday.getDate();
  }
  document.querySelector(
    "#date" + day
  ).innerHTML = `${year}년 ${month}월 ${date}일`;
}

set(100);
set(200);
set(365);
set(500);
