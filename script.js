document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    { name: "bear", img: "1.gif" },
    { name: "bear", img: "1.gif" },
    { name: "fish", img: "2.gif" },
    { name: "fish", img: "2.gif" },
    { name: "bird", img: "3.gif" },
    { name: "bird", img: "3.gif" },
    { name: "cake", img: "4.gif" },
    { name: "cake", img: "4.gif" },
    { name: "penguin", img: "5.gif" },
    { name: "penguin", img: "5.gif" },
    { name: "balloons", img: "6.gif" },
    { name: "balloons", img: "6.gif" },
  ];
  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "Moon.gif");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      playSound();
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "Moon.gif");
      cards[optionTwoId].setAttribute("src", "Moon.gif");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations";
    }
  }
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    var cardSrc = this.getAttribute("src");
    if (cardSrc == "Moon.gif") {
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute("src", cardArray[cardId].img);
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
  }
  function playSound() {
    const audio = document.querySelector(`audio`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }
  createBoard();
});
