Stwórz rozwiązanie z pomocą dwóch funkcji w oparciu o strukturę script.js. Nie dodawaj nic więcej do zakresu globalnego.

funkcja init, która będzie uruchomiona po wczytaniu strony, jej zadaniem jest:
- stworzyć dwa elementy
<button>Dodaj 10 elementów listy</button>
<ul></ul>
- dodaj je do body
- ustaw nasłuchiwanie na przycisk

funkcja createLiElements, która będzie uruchamiana po kliknięciu przycisku stworzonego przez funkcję init, jej zadanie to:
- tworzenie 10 elementów li i umieszczenie ich w elemencie ul
- każdy z 10 elementów ma mieć swój indeks (order) przy czym kolejne 10 elementów ma być kontunuacją (czyli pierwszy klik 1-10, kolejny 11-20 itd)
- każdy kolejny element li ma mieć font-size większy o 1px.

Bez zmian w pliku html (nie dodajemy html i css). Cały kod piszemy w script.js