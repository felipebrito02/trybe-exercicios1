import Swal from "sweetalert2";

const img = document.querySelector('#image');
const nome = document.querySelector('#name');
const button = document.querySelector('button');

const ACCESS_TOKEN = '6117209548391122';

const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (evento) => {
  evento.preventDefault();
  const id = randomId();

  fetch(`${BASE_URL} / ${id}`)
  .then((response) => response.json())
  .then((data) => {
    img.scr = data.image.url;
    nome.innerHTML = data.name;
  })
  .catch((error) => Swal.fire({
    title: 'Hero not found',
    text: error.message,
    icon: 'error',
    confirmButtonText: 'Cool'
  }));
});