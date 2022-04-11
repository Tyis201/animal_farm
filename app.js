'use strict';

const catButton = document.getElementById('make-cat');
catButton.addEventListener('click', function(){
  const newCat = document.createElement('li');
  newCat.textContent='cat';
  const cats = document.getElementById('cats');
  cats.appendChild(newCat);
});

const dogButton = document.getElementById('make-dog');
dogButton.addEventListener('click', function () {
  const newDog = document.createElement('li');
  newDog.textContent = 'dog';
 const dogs = document.getElementById('dogs');
  dogs.appendChild(newDog);
});

const sheepButton = document.getElementById('make-sheep');
function handleMakingSheep(){
  sheepButton.addEventListener('click', function() {
    const newSheep = document.createElement('li');
    newSheep.textContent = 'sheep';
    const sheeps = document.getElementById('sheeps');
    sheeps.appendChild(newSheep);
});
}
handleMakingSheep();
// TODO: create an event listener for the `Make Horse` Button that calls a function named `handleMakingHorse`
const horseButton = document.getElementById('make-horse');
horseButton.addEventListener('click', function() {
  const newHorse = document.createElement('li');
  newHorse.textContent = 'horse';
  const horses = document.getElementById('horses');
  horses.appendChild(newHorse);
});