alert("Witaj w księgarni Kruczek!");

let bookStore = [];

//przykład obiektu
let book1 = {
  title: "Rok 1984",
  year: 1949,
  author: "George Orwell",
};

function Book(title1, year2, author2) {
  this.title = title1;
  this.year = year2;
  this.author = author2;
}

//konstruktor? obiektu
let book2 = new Book("Zbrodnia i kara", 1866, "Fiodor Dostojewski");
let book3 = new Book("Władca Pierścieni", 1954, "J.R.R Tolkien");
let book4 = new Book("Mistrz i Małgorzata", 1967, "Michaił Bułhakow");
let book5 = new Book("Duma i uprzedzenie", 1866, "Jane Austen");
let book6 = new Book("Buszujący w zbożu", 1951, "J.D. Salinger");

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
//alert(bookStore.map((book) => book.title).join(", ")); - alternatywa do wyświetlania tytułu
// WYŚWIETLANIE KSIĄŻEK Z LISTĄ
function displayStatus(bookStore) {
  let result = "";
  for (let i = 0; i < bookStore.length; i++) {
    result +=
      (bookStore[i].read ? "[✓]" : "[ ]") + " " + bookStore[i].title + "\n";
  }
  return result;
}

// PRZECZYTANE KSIĄŻKI CAŁA FUNKCJA
function readedBooks() {
  console.log(displayStatus(bookStore));
  while (true) {
    let input = prompt(
      "Którą książkę przeczytałeś: " +
        "\n" +
        displayStatus(bookStore) +
        "\n" +
        "Jeżeli chcesz wócić to wpisz '0'"
    );

    if (input === "0") {
      break;
    }
    let found = false;
    for (let i = 0; i < bookStore.length; i++) {
      if (bookStore[i].title === input) {
        if (!bookStore[i].read) {
          bookStore[i].read = true;
          alert("Przeczytałeś książkę: " + bookStore[i].title);
        } else {
          alert("Już przeczytałeś: " + bookStore[i].title);
        }
        found = true;
        break;
      }
    }
    if (!found) {
      alert("Nie znaleziono takiej książki:");
    }
  }
  console.log("Przeczytane książki: " + "\n" + displayStatus(bookStore)); // przeczytane książki
}

// DODANIE KSIĄŻKI
function addBook() {
  alert(
    "Za chwilę dodasz książkę." + "\n" + "Podaj nam potrzebne informacje: "
  );
  let titleInput = prompt("Podaj tytuł książki: ");
  while (titleInput === "") {
    alert("Podaj dobre wartości!");
    titleInput = prompt("Podaj tytuł książki: ");
  }
  let yearInput = parseInt(prompt("Podaj rok wydania: "));
  while (isNaN(yearInput) || yearInput === "") {
    alert("To nie jest dobry rok!");
    yearInput = prompt("Podaj rok wydania: ");
  }
  let authorInput = prompt("Podaj autora: ");
  while (authorInput === "") {
    alert("Podaj dobre wartości!");
    authorInput = prompt("Podaj autora: ");
  }
  let newBook = new Book(titleInput, yearInput, authorInput);
  bookStore.push(newBook);
  bookTitles.push(titleInput + "\n");
  // console.log(bookStore);
  alert("Dodałeś książkę. " + '"' + newBook.title + '"');
}

// DODANIE KOLEJNYCH KSIĄŻEK
function addAnotherBook() {
  while (true) {
    let choice = prompt(
      "Czy chcesz dodać kolejną książkę? " + "\n" + "tak lub nie"
    );
    if (choice === "tak") {
      addBook();
    } else if (choice === "nie") {
      alert("Dziękujemy za dodanie nowej książki. ");
      console.log("Wielkość księgarni po dodaniu książek: " + bookStore.length);
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
    console.log("Wybór: " + choice + " Oznaczenie przeczytanych");
    readedBooks(bookTitles);
  } else if (choice === 3) {
    console.log("Wybór: " + choice + " Dodanie książek do księgarni.");
    addBook();
    addAnotherBook();
    console.log(bookTitles + "");
    console.log(bookStore);
  } else {
    alert("Podaj prawidłowy wybór!");
  }
}

console.log(choice);
