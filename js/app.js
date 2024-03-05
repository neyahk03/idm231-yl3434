// const form = document.querySelector('.birthday-form');

// console.log(form);
// console.log(form.elements);
// console.log(form.elements["birthday"].value);


const submitButton = document.querySelector('.submit');

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

} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    console.log('Taurus');

} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    console.log('Aries')

} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    console.log('Pieces')
    
} else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    console.log('Aquarius');
}
};

const avocado = document.querySelector('.avocado');
const box1 = document.querySelector('#aries')
avocado.addEventListener('click', () => {
    box.classList.toggle('active');
})

const bee = document.querySelector('.capricorn');
const box2 = document.querySelector('#aries')
avocado.addEventListener('click', () => {
    box2.classList.toggle('active');
})





