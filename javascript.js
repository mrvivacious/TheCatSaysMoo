// Clicking an animal picture should alert the page with a
//  "The cat says moo" alert

// STEPS
// Step1: Click the cat √
// Step2: After we click the cat, an alert pops up √
// Step3: The alert says, "The cat says moo"

// Step1: Click the cat
// Step2: After we click the cat, an alert pops up √
var cat = document.getElementById('cat');
var snake = document.getElementById('snake');
// alert(animal) gives us [object HTMLParagraphElement]
// alert(animal.innerHTML);

cat.onclick = function() {
  var animalSounds = [
    'moo',
    'meow',
    'quack',
    'woof',
    'snort',
    '3.1415'
  ];
  var beginningOfPhrase = 'The cat says ';
  var sound;

  // How to randomly get an element from the array?
  var randomIndex = Math.floor( Math.random() * animalSounds.length )
  sound = animalSounds[randomIndex];

  alert(beginningOfPhrase + sound);
};

snake.onclick = function() {
  var animalSounds = [
    'moo',
    'meow',
    'quack',
    'woof',
    'snort',
    '3.1415'
  ];
  var beginningOfPhrase1 = 'The left snake says ';
  var beginningOfPhrase2 = 'The right snake says ';

  var sound1;
  var sound2;


  var randomIndex = Math.floor( Math.random() * animalSounds.length )
  sound1 = animalSounds[randomIndex];

  randomIndex = Math.floor( Math.random() * animalSounds.length )
  sound2 = animalSounds[randomIndex];

  alert(beginningOfPhrase1 + sound1 + '\n' + beginningOfPhrase2 + sound2);

};
