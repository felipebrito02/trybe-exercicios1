
const getDogButton = document.querySelector("#random-dog");

const getCatButton = document.querySelector("#random-cat");

const petImage = document.querySelector("#random-pet-image");

const surpriseMeButton = document.querySelector("#surprise-me");

getDogButton.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then((data) => {
      const petUrl = data.message;
      petImage.src = petURL;
    })
});


getCatButton.addEventListener("click", () => {
  fetch("https://aws.random.cat/meow")
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.file;

      petImage.src = petURL;
    });
});


surpriseMeButton.addEventListener("click", () => {
  Promise.any([
    fetch("https://aws.random.cat/meow"),
    fetch("https://dog.ceo/api/breeds/image/random"),
  ]);
});

surpriseMeButton.addEventListener("click", () => {
  Promise.any([
    fetch("https://aws.random.cat/meow"),
    fetch("https://dog.ceo/api/breeds/image/random"),
  ])
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.file || data.message;

      petImage.src = petURL;
    });
});