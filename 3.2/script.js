let size = 10;
let orderElement = 1;

const init = () => {
  const btn = document.createElement("button");
  document.body.appendChild(btn);
  btn.textContent = "Dodaj 10 elementów listy";

  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  btn.addEventListener("click", createLiElements);
};

const createLiElements = () => {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent=`Element nr ${orderElement++}`;
    li.style.fontSize = `${size++}px`;
    //używam querySelector, a nie ul.appendChild(li),bo ul stworzyłam w innej funkcji, do której ta funkcja nie ma dostępu przez swój zakres
    document.querySelector("ul").appendChild(li);
  }
};

init();
