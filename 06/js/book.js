function Book(title, author, volume, price) {
  this.title = title;
  this.author = author;
  this.volume = volume;
  this.price = price;
}

var html = new Book("HTML", "John", "608", "28,000");
var youtube = new Book("YOUTUBE", "Jane", "402", "19,000");
var python = new Book("PYTHON", "Bill", "521", "24,000");

var booklist = [html, youtube, python];

booklist.forEach((book) => {
  document.write(`<p>${book.title}</p>`);
});
