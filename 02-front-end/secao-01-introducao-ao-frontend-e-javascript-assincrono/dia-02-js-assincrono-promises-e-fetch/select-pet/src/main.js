const dogApi = 'https://dog.ceo/api/breeds/image/random';
const catApi = 'https://api.thecatapi.com/v1/images/search';

const img = document.querySelector('#pet-img');
const dogBtn = document.querySelector('#dog-btn');
const catBtn = document.querySelector('#cat-btn');
const surpriseBtn = document.querySelector('#surprise-btn');

dogBtn.addEventListener('click', () => {
  fetch(dogApi)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.message;
    });
});

catBtn.addEventListener('click', () => {
  fetch(catApi)
    .then((response) => response.json())
    .then((data) => {
      img.src = data[0].url;
    });
});

surpriseBtn.addEventListener('click', () => {
  Promise.any([
    fetch(dogApi),
    fetch(catApi),
  ])
    .then((response) => response.json())
    .then((data) => {
      const petUrl = data.message || data[0].url;
      img.src = petUrl;
    });
});
