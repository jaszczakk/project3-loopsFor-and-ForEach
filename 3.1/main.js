//pobranie przycisku i wszystkich li z documentu
const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");
let liFontSize = 10;

// 1 rozwiązanie PĘTLA
btn.addEventListener("click", () => {
  //żeby uwidocznić każdy li musimy zrobić pętlę, która przejdzie
  //przez każdy ten element
  for (let i = 0; i < liItems.length; i++) {

    //inny sposób - instrukcja warunkowa
    // if(!liItems[i].style.display){
    // liItems[i].style.display = "block";
    // }

    liItems[i].style.display = "block";
    liItems[i].style.fontSize = `${liFontSize}px`;
  }
  //tutaj dopiero inkrementacja, bo najpierw ma się wyświetlić czcionka 10px
  // a poźniej zwiększamy o 1; gdybyśmy dali przed pętlą to byłoby przy pierwszym kliknięciu już 11
  liFontSize++;
});



//2 rozwiązanie FOR EACH
// btn.addEventListener("click", () => {
//   liItems.forEach((liItem) => {
//     liItem.style.display = "block";
//     liItem.style.fontSize = liFontSize + "px";
//   });

//   fontSize++;
// });
