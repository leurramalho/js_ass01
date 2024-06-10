// Initialize the speech synthesis object
var synth = window.speechSynthesis;

// Arrays containing different story elements
var nouns = ['The turkey', 'Mons', 'Dad', 'The Dog', 'My teacher', 'The elephant', 'The cat'];
var verbs = ['sat on', 'danced with', 'ate', 'saw', 'do not like', 'Kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Event listeners for each button to pick different story elements
document.getElementById('nounButton').addEventListener('click', pickNoun);
document.getElementById('verbButton').addEventListener('click', pickVerb);
document.getElementById('adjectiveButton').addEventListener('click', pickAdjective);
document.getElementById('noun2Button').addEventListener('click', pickNoun2);
document.getElementById('placeButton').addEventListener('click', pickPlace);
document.getElementById('generateButton').addEventListener('click', generateStory); // Point 1: Button to generate story
document.getElementById('resetButton').addEventListener('click', resetStory); // Point 2: Button to reset story
document.getElementById('speakButton').addEventListener('click', speakStory);

// Functions to pick random elements from the arrays
function pickNoun() {
    document.getElementById('noun').textContent = getRandomElement(nouns);
}

function pickVerb() {
    document.getElementById('verb').textContent = getRandomElement(verbs);
}

function pickAdjective() {
    document.getElementById('adjective').textContent = getRandomElement(adjectives);
}

function pickNoun2() {
    document.getElementById('noun2').textContent = getRandomElement(nouns);
}

function pickPlace() {
    document.getElementById('place').textContent = getRandomElement(places);
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a story by picking random elements
function generateStory() {
    pickNoun();
    pickVerb();
    pickAdjective();
    pickNoun2();
    pickPlace();
}

// Function to reset the story by clearing all the story elements
function resetStory() {
    document.getElementById('noun').textContent = '';
    document.getElementById('verb').textContent = '';
    document.getElementById('adjective').textContent = '';
    document.getElementById('noun2').textContent = '';
    document.getElementById('place').textContent = '';
}

// Function to generate and speak the story
function speakStory() {
    var noun = document.getElementById('noun').textContent;
    var verb = document.getElementById('verb').textContent;
    var adjective = document.getElementById('adjective').textContent;
    var noun2 = document.getElementById('noun2').textContent;
    var place = document.getElementById('place').textContent;
    
    var story = `Once upon a time, there was a ${adjective} ${noun} who ${verb} with a ${noun2} in a ${place}.`;
    speakNow(story);
}

// Function to speak the story using the speech synthesis API
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}
