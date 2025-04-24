class Book {
  constructor(year, title, author) {
    this.year = year;
    this.title = title;
    this.author = author;
  }

  getDescription() {
    return (
      "Year: " +
      this.year +
      "\n" +
      "Title: " +
      this.title +
      "\n" +
      "Author: " +
      this.author
    );
  }
}

let bookColecttion = [
  new Book(1923, "Qvo Vadis", "Henryk Sienk"),
  new Book(2012, "Wiedźmin", "Andrzej Sapko"),
  new Book(1978, "Wesele", "Adam Mickiewicz"),
  new Book(2001, "Wesele", "Adam Mickiewicz"),
  new Book(1924, "JavaScript: The Good Parts", "Douglas Crockford"),
  new Book(3574, "Eloquent JavaScript", "Marijn Haverbeke"),
  new Book(2123, "You Don't Know JS", "Kyle Simpson"),
  new Book(2332, "JavaScript: The Good Parts - Part II", "Douglas Crockford"),
  new Book(1299, "Effective JavaScript", "David Herman"),
];

let uniqueTitles = new Set();
let authorBooksMap = new Map();

function generateSet() {
  bookColecttion.forEach((book) => {
    uniqueTitles.add(book.title);
  });
}

function generateMap() {
  //authorBooksMap.set
  bookColecttion.forEach((book) => {
    if (!authorBooksMap.has(book.author)) {
      authorBooksMap.set(book.author, []);
    }
    authorBooksMap.get(book.author).push(book.title);
  });
}
generateSet();
generateMap();

authorBooksMap.forEach((v, k) => {
  console.log("k: " + k + " v: " + v);
});

uniqueTitles.forEach((title) => {
  console.log("coś: " + title);
});
