alert("Witaj w księgarni Kruczek!");

let bookStore = [];

//przykład obiektu
let book1 = {
  title: '"Rok 1984"',
  year: 1949,
  author: "George Orwell",
};

function Book(title1, year2, author2) {
  this.title = title1;
  this.year = year2;
  this.author = author2;
}

//konstruktor? obiektu
let book2 = new Book('"Zbrodnia i kara"', 1866, "Fiodor Dostojewski");
let book3 = new Book('"Władca Pierścieni"', 1954, "J.R.R Tolkien");
let book4 = new Book('"Mistrz i Małgorzata"', 1967, "Michaił Bułhakow");
let book5 = new Book('"Duma i uprzedzenie"', 1866, "Jane Austen");
let book6 = new Book('"Buszujący w zbożu"', 1951, "J.D. Salinger");

//dodawanie obiektów do tablicy
bookStore.push(book1);
bookStore.push(book2);
bookStore.push(book3);
bookStore.push(book4);
bookStore.push(book5);
bookStore.push(book6);

//console.log(bookStore); // tu chciałem zobaczyć czy stworzyła się tablica

//Wyświetlanie tytułów w console logu
let bookTitles = [];
function allBooks(bookStore) {
  for (let i = 0; i < bookStore.length; i++) {
    bookTitles.push(bookStore[i].title + "\n");
    console.log(bookStore[i].title);
  }
  //console.log(bookTitles);
  alert("Oto książki w naszej księgarni: " + "\n" + bookTitles);
}

allBooks(bookStore);
console.log("Wielkość księgarni: " + bookStore.length);
console.log("Ilość tytułów w tablicy z tytułami" + bookTitles.length);
//alert(bookStore.map((book) => book.title).join(", ")); - alternatywa do wyświetlania tytułu

/*
//Wyświetlanie tytułów w alercie
function displayAllBooks(bookStore) {
  let titles = [];
  for (let i = 0; i < bookStore.length; i++) {
    //titles += bookStore[i].title + "\n"; //"\n" to nowa linia
    titles.push(bookStore[i].title + "\n");
  }
  alert("Oto książki w naszej księgarni: " + "\n" + titles);
  console.log(titles);
}

displayAllBooks(bookStore);
*/

function read(bookTitles) {
  let input = prompt("Którą książkę przeczytałeś: " + "\n" + bookTitles);
}

function addBook() {
  alert(
    "Za chwilę dodasz książkę." + "\n" + "Podaj nam potrzebne informacje: "
  );
  let titleInput = prompt("Podaj tytuł książki: ");
  let yearInput = parseInt(prompt("Podaj rok wydania: "));
  let authorInput = prompt("Podaj autora: ");
  let newBook = new Book(titleInput, yearInput, authorInput);
  bookStore.push(newBook);
  bookTitles.push(titleInput + "\n");
  // console.log(bookStore);
  alert("Dodałeś książkę. " + '"' + newBook.title + '"');
}

function addAnotherBook() {
  let choice;
  while (true) {
    let choice = prompt("Czy chcesz dodać kolejną książkę? ");
    if (choice === "tak") {
      addBook();
    } else if (choice === "nie") {
      alert("Dziękujemy za dodanie nowej książki. ");
      console.log("Wielkość księgarni po dodaniu książek: " + bookStore.length);
      console.log("Ilość tytułów w tablicy z tytułami: " + bookTitles.length);
      break;
    } else {
      alert("Wybierz tak lub nie");
    }
  }
}

//GŁÓWNY KOD
let choice;
while (true) {
  // Okienko wyboru użytownika
  let input = prompt(
    "Podaj co chcesz zrobić: " +
      "\n" +
      "0 - Zakończ wizytę" +
      "\n" +
      "1 - Pokaż dostępne książki" +
      "\n" +
      "2 - Oznacz przeczytane" +
      "\n" +
      "3 - Dodaj książki"
  );

  choice = parseInt(input);
  //Sprawdzenie wyboru użytkownika
  if (choice === 0) {
    console.log("Wybór: " + choice + " Wyjście z księgarni");
    alert("Dziękujemy za wiytę." + "\n" + " Zapraszamy ponownie.");
    break;
  } else if (choice === 1) {
    console.log("Wybór: " + choice + " Wypisanie książek w księgarni");
    console.log(bookTitles + "\n");
    alert("Oto książki w naszej księgarni: " + "\n" + bookTitles);
  } else if (choice === 2) {
    read(bookTitles);
  } else if (choice === 3) {
    console.log("Wybór: " + choice + " Dodanie książek do księgarni.");
    addBook();
    addAnotherBook();
    console.log(bookTitles + "");
  } else {
    alert("Podaj prawidłowy wybór!");
  }
}

console.log(choice);
