
const submitButton = document.querySelector('.submit');

const des = document.querySelector('.description');
const figure = document.querySelector('figure');
const pic = document.querySelector('.pic');
const caption = document.querySelector('figcaption');
const box = document.querySelector('.content');

const avocado = document.querySelector('.avocado');
const bee = document.querySelector('.bee');
const dragon = document.querySelector('.dragon');



const Capricorn = {
    value: 'Capricorns aren\'t consumed by the need for attention, but are not immune to it. They simply don\'t indulge in attention-seeking behavior. Capricorns don\'t want attention for their looks or style or ingenuity. They don\'t want to be admired, but they do want to be respected. They don\'t care to be the center of attention. Instead it\'s like they need to prove their own abilities to themselves. They plow through adversity with blinders on until they reach success. Capricorns are constantly competing with themselves. They do want praise, though. Praise is a simple acknowledgment of a job well done. Praise is a pat on the back. They use this as validation to compensate for general feelings of incompetence and inferiority.',
    src : "",
    caption: "Capricorn (12/22 - 01/18)",
}

const Aries = {
    value: 'At their core, Aries do things their own way. They are unafraid of conflict, highly competitive, and honest. They throw themselves at the world eagerly and without fear. Aries are driven by a desire to prove themselves and their strength. They have high energy, and are competitive and ambitious. They naturally take charge because they are good at initiating new projects. They can also be impatient, but are naturally active and don\'t like to waste time. While Aries like competition, they don\'t like to play games. They are highly self-aware, have strong opinions and are always ready to defend them.',
    src: "images/avocado.jpeg",
    caption: "Aries (03/21 - 04/19)"
}

const Taurus = {
    value: 'Tauruses are the human equivalent of moss. A handmade wooden chair. They are normally satisfied with the way things are. They embody stability. Sitting in a patch of grass admiring the breeze. When everything else seems to be falling apart, Tauruses are a rock of dependability in an oasis of calm. Practical knowledge and experience is their modus operandi. Tauruses are oriented around the physical world. They tend to be grounded and logical. They love routine and they\'re committed to their own comfort. They like to be in control. They\'re patient and steady, and their materialism is an extension of their pursuit of stability. Once they get into a groove, it\'s difficult for them to get out of it. Object in motion stays in motion. Object at rest stays at rest. Appreciative of beauty. Attuned to physical pleasure. They like things to be predictable. They are perfectly happy eating the same meal over and over, or wearing the same outfit for a week straight. They would prefer things be consistent than chaotically good. They like to discover what they have the most fun doing, and then do it to the extreme. Tauruses have a regal quality about them. They are graceful and diligent laborers. They can be stubborn, bull-headed, and set in their ways, but they are also great listeners and very dependable. Tauruses can absolutely go on forever. They are tireless machines. And no matter what someone throws at them, they will inevitably overcome their obstacles because they\'ve already prepared for every contingency. They are the hand-built truck that will never break down.',
    src: "images/bee.jpeg",
    caption: "Taurus (04/20 - 05/20)",
}

const Gemini = {
    value: 'Geminis are very intelligent and pick up knowledge quickly. They are perceptive, analytical, and often very funny. They have an unreserved, childlike curiosity, always asking new questions. Geminis have an uncanny ability to size up a person\'s character in a matter of seconds, even if they only just met them. If someone\'s bluffing, they\'ll be the first to notice. They are great communicators because they tend to be very responsive and sensitive listeners. Geminis are versatile, comfortable being both introverts and extroverts. They are quick to adapt to the energy of a room they can be the life of the party or a complete wallflower. Geminis know how to bring dissimilar people together and make them get along.',
    src: "images/dragon.webp",
    caption: 'Gemini (05/21 - 06/20)',
}

submitButton.addEventListener('click', getDate);

function getDate() {
    event.preventDefault();
    const userInput = document.querySelector('#birthday1').value;
    console.log(userInput);

    const date = userInput.split("-");
    console.log(date);

    const month = Number(date[1]);
    const day = Number(date[2]);
    
    console.log(month);
    console.log(day);


if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    console.log("Capricorn");

} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    console.log('Sagittarius');

} else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    console.log('Scorpio');

} else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    console.log('Libra');

} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    console.log('Virgo');

} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    console.log('Leo');

} else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    console.log('Virgo');

} else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    console.log('Gemini');
    geminiDetails();

} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    console.log('Taurus');
    taurusDetails();

} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    console.log('Aries')
    ariesDetails();

} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    console.log('Pieces')
    
} else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    console.log('Aquarius');
}
};


avocado.addEventListener('click', ariesDetails);
bee.addEventListener('click', taurusDetails);
dragon.addEventListener('click', geminiDetails);

function ariesDetails () {
    des.textContent = Aries.value;
    figure.classList.add('active');
    pic.src = Aries.src;
    caption.textContent=Aries.caption;
    box.style.opacity = "1";
}

function taurusDetails () {
    des.textContent = Taurus.value;
    figure.classList.add('active');
    pic.src = Taurus.src;
    caption.textContent=Taurus.caption;
    box.style.opacity = '1';
}

function geminiDetails (){
    des.textContent = Gemini.value;
    figure.classList.add('active');
    pic.src = Gemini.src;
    caption.textContent=Gemini.caption;
    box.style.opacity = '1';
}
