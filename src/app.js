import "bootstrap";
import "./style.css";

const card = document.querySelector(".card");

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSimbol = () => {
  let simbols = ["diamond", "spade", "heart", "club"];
  let indexSimbols = Math.floor(Math.random() * simbols.length);
  return simbols[indexSimbols];
};

window.onload = () => {
  card.classList.add(generateRandomSimbol());
  card.innerHTML = generateRandomNumber();
};
