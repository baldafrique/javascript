var numbers = [2, 4, 6, 8, 10];
var sum = 0;

numbers.forEach((number) => {
  sum += number;
});

numbers.push(sum);

showArray(numbers);

function showArray(arr) {
  var str = "<table><tr>";
  for (var i = 0; i < arr.length; i++) {
    str += "<td>" + arr[i] + "</td>";
  }
  str += "</tr></table>";
  document.write(str);
}
