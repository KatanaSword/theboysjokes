const randomJoke = document.querySelector("#random-joke");
const randomJokeBtn = document.querySelector("#random-joke-btn");
const closeBoxBtn = document.querySelector(".fa-xmark");
const boxContainer = document.querySelector(".box-container");

const serverUrl =
  "https://humor-jokes-and-memes.p.rapidapi.com/jokes/random?max-length=100&include-tags=one_liner&min-rating=7&exclude-tags=sexist";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1102bac83cmshccfefeea8285b57p102e25jsn4d76687d8ada",
    "X-RapidAPI-Host": "humor-jokes-and-memes.p.rapidapi.com",
  },
};

function displayJoke() {
  setTimeout(() => {
    boxContainer.style.display = "block";
  }, 2000);
  getJoke();
}
randomJokeBtn.addEventListener("click", displayJoke);

function errorHandler(error) {
  console.log(error);
}

function getJoke() {
  fetch(serverUrl, options)
    .then((response) => response.json())
    .then((json) => {
      const joke = json.joke;
      if (!joke) {
        randomJoke.innerHTML = "Today Joke's limit is over comeback tommorrow";
        randomJoke.style.color = "#f43f5e";
      } else {
        randomJoke.innerHTML = joke;
        randomJoke.style.color = "#000";
      }
    })
    .catch(errorHandler);
}

function closeBox() {
  boxContainer.style.display = "none";
  randomJoke.innerHTML = "";
}
closeBoxBtn.addEventListener("click", closeBox);
