
const submitButton = document.querySelector('.submit');
const des = document.querySelector('.description');
const figure = document.querySelector('figure');
const pic = document.querySelector('.pic');
const caption = document.querySelector('figcaption');
const box = document.querySelector('.content');
const sound = document.querySelector('#audio_player');
const close = document.querySelector('.close');
// const pauseButton = document.querySelector('.pause');

// pauseButton.addEventListener('click', () => {
//     sound.pause();
// })

const helpButton = document.querySelector('.help');
helpButton.addEventListener('click', () => {
    console.log(helpButton);
})

close.addEventListener ('click', () => {
    console.log('its working');
    box.style.opacity = '0';
})



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
    capricornDetails();

} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    console.log('Sagittarius');
    sagittariusDetails();

} else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    console.log('Scorpio');
    scorpioDetails();

} else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    console.log('Libra');
    libraDetails();

} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    console.log('Virgo');
    virgoDetails();

} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    console.log('Leo');
    leoDetails();

} else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    console.log('Cancer');
    cancerDetails();

} else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    console.log('Gemini');
    geminiDetails();

} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    console.log('Taurus');
    taurusDetails();

} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    console.log('Aries');
    ariesDetails();

} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    console.log('Pices');
    picesDetails();
    
} else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    console.log('Aquarius');
    aquariusDetails();
}
};


function ariesDetails () {
    des.textContent = Aries.value;
    figure.classList.add('active');
    pic.src = Aries.src;
    caption.textContent=Aries.caption;
    sound.src = Aries.sound;
    box.style.opacity = "1";
    sound.play();
}

function taurusDetails () {
    des.textContent = Taurus.value;
    figure.classList.add('active');
    pic.src = Taurus.src;
    caption.textContent=Taurus.caption;
    box.style.opacity = '1';
    sound.src = Taurus.sound;
    sound.play();
}

function geminiDetails (){
    des.textContent = Gemini.value;
    figure.classList.add('active');
    pic.src = Gemini.src;
    caption.textContent=Gemini.caption;
    box.style.opacity = '1';
    sound.src = Gemini.sound;
    sound.play();
}

function cancerDetails () {
    des.textContent = Cancer.value;
    figure.classList.add('active');
    pic.src = Cancer.src;
    caption.textContent=Cancer.caption;
    box.style.opacity = '1';
    sound.src = Cancer.sound;
    sound.play();
}

function leoDetails () {
    des.textContent = Leo.value;
    figure.classList.add('active');
    pic.src = Leo.src;
    caption.textContent = Leo.caption;
    box.style.opacity = '1';
    sound.src = Leo.sound;
    sound.play();
}

function virgoDetails () {
    des.textContent = Virgo.value;
    figure.classList.add('active');
    pic.src = Virgo.src;
    caption.textContent =  Virgo.caption;
    box.style.opacity = '1';
    sound.src = Virgo.sound;
    sound.play();
}

function libraDetails () {
    des.textContent = Libra.value;
    figure.classList.add('active');
    pic.src = Libra.src;
    caption.textContent = Libra.caption;
    box.style.opacity = '1';
    sound.src = Libra.sound;
    sound.play();
}

function scorpioDetails () {
    des.textContent = Scorpio.value;
    figure.classList.add('active');
    pic.src = Scorpio.src;
    caption.textContent = Scorpio.caption;
    box.style.opacity = '1';
}

function sagittariusDetails () {
    des.textContent = Sagittarius.value;
    figure.classList.add('active');
    pic.src = Sagittarius.src;
    caption.textContent = Sagittarius.caption;
    box.style.opacity = '1';
}

function capricornDetails () {
    des.textContent = Capricorn.value;
    figure.classList.add('active');
    pic.src = Capricorn.src;
    caption.textContent = Capricorn.caption;
    box.style.opacity = '1';
}

function aquariusDetails () {
    des.textContent = Aquarius.value;
    figure.classList.add('active');
    pic.src = Aquarius.src;
    caption.textContent = Aquarius.caption;
    box.style.opacity = '1';
}

function picesDetails () {
    des.textContent = Pices.value;
    figure.classList.add('active');
    pic.src = Pices.src;
    caption.textContent = Pices.caption;
    box.style.opacity = '1';
}


const Aries = {
    value: 'At their core, Aries do things their own way. They are unafraid of conflict, highly competitive, and honest. They throw themselves at the world eagerly and without fear. Aries are driven by a desire to prove themselves and their strength. They have high energy, and are competitive and ambitious. They naturally take charge because they are good at initiating new projects. They can also be impatient, but are naturally active and don\'t like to waste time. While Aries like competition, they don\'t like to play games. They are highly self-aware, have strong opinions and are always ready to defend them.',
    src: "images/avocado.jpeg",
    caption: "Aries (03/21 - 04/19)",
    sound: "audio/1.mp3"
}

const Taurus = {
    value: 'Tauruses are the human equivalent of moss. A handmade wooden chair. They are normally satisfied with the way things are. They embody stability. Sitting in a patch of grass admiring the breeze. When everything else seems to be falling apart, Tauruses are a rock of dependability in an oasis of calm. Practical knowledge and experience is their modus operandi. Tauruses are oriented around the physical world. They tend to be grounded and logical. They love routine and they\'re committed to their own comfort. They like to be in control. They\'re patient and steady, and their materialism is an extension of their pursuit of stability. Once they get into a groove, it\'s difficult for them to get out of it. Object in motion stays in motion. Object at rest stays at rest. Appreciative of beauty. Attuned to physical pleasure. They like things to be predictable. They are perfectly happy eating the same meal over and over, or wearing the same outfit for a week straight. They would prefer things be consistent than chaotically good. They like to discover what they have the most fun doing, and then do it to the extreme. Tauruses have a regal quality about them. They are graceful and diligent laborers. They can be stubborn, bull-headed, and set in their ways, but they are also great listeners and very dependable. Tauruses can absolutely go on forever. They are tireless machines. And no matter what someone throws at them, they will inevitably overcome their obstacles because they\'ve already prepared for every contingency. They are the hand-built truck that will never break down.',
    src: "images/bee.jpeg",
    caption: "Taurus (04/20 - 05/20)",
    sound: 'audio/2.mp3'
}

const Gemini = {
    value: 'Geminis are very intelligent and pick up knowledge quickly. They are perceptive, analytical, and often very funny. They have an unreserved, childlike curiosity, always asking new questions. Geminis have an uncanny ability to size up a person\'s character in a matter of seconds, even if they only just met them. If someone\'s bluffing, they\'ll be the first to notice. They are great communicators because they tend to be very responsive and sensitive listeners. Geminis are versatile, comfortable being both introverts and extroverts. They are quick to adapt to the energy of a room they can be the life of the party or a complete wallflower. Geminis know how to bring dissimilar people together and make them get along.',
    src: "images/dragon.webp",
    caption: 'Gemini (05/21 - 06/20)',
    sound: 'audio/3.mp3'
}

const Cancer = {
    value: 'A Cancer\'s personality is like wading chest deep in a lake of warm water. It feels sparkling and cool while you\'re in the shallow end, but you know that if you were to dive in, it would feel warm. The self-awareness of a Cancer is like the tides constantly moving in and out of focus. Their personalities are layered. Cancers have many moods, some of which are contradictory, but they also have a deep, core self that persists. Cancers are weighed down by their own sorrows and the sorrows of those around them. They are frequently haunted by grief. It\'s hard for them to share their pain with others, and they are often afraid to be vulnerable because they carry a fear that people will use their weaknesses against them. Cancers have learned to hide their pain to avoid burdening anyone else. They pretend they\'re okay when they\'re not. Their emotions are like an exposed nerve. Cancers can feel everything. They\'re like a tuning fork that vibrates at the slightest provocation. They tend to carry deep grudges because they can\'t forget the emotional sting of even a slight.',
    src: 'images/bunny.jpeg',
    caption: 'Cancer (06/21 - 07/22)',
}

const Leo = {
    value: ' Leos are bold, warm, and loving. They are also the ultimate performers. They can dazzle with the theatrical flair of a Broadway star and the charisma of a politician. They are captivating personalities. No matter how quickly they\'ve just been introduced to a topic, they can speak eloquently about almost anything because they have such a way with words. Leos inject ambition into everything they do. They are ruled by the heart. Their actions are natural and effortless because they are brash and confident and trust their instincts. Leos have an unrelenting appetite for growth that is easily satiated by the praise of others. When they are hurting, it shows. They will use their anger as a protective wall to shield their vulnerabilities. They want to be perceived as unbreakable because they are scared of admitting vulnerability, needing things from other people, or being incomplete.',
    src: 'images/egg.webp',
    caption: 'Leo (07/23 - 08/22)',
}

const Virgo = {
    value: 'Virgos are known for being perfectionists. They are known for their attention to detail, which helps them find patterns where there are none. At times, Virgos can be finicky and critical to a fault. It\'s true that Virgos are very particular, but that doesn\'t necessarily mean that they keep neat spaces. Their particularities and habits don\'t necessarily line up with traditional views of cleanliness. They could live in what looks like a Tasmanian devil-style dust storm ruin, but still impose a “no shoes in the house” or “no outside clothes on the bed” rule. Maybe their house looks cluttered, but they still know where everything is. Everything has its place. Virgos prefer to exist in organized spaces, but put helping others over their own comfort. A Virgo can become so busy fixing the lives of those around them that they don\'t put much work into providing for their own needs. Virgos are rarely motivated by their own self-interest. Virgos are also known for being intelligent, but because of their introverted nature they can sometimes have trouble expressing themselves. Talking to them may feel like floating on the surface of existence, and like you never know what they\'re thinking and feeling deep inside. Their emphasis on thoughts and ideas can seem like a cover-up for their lack of emotional depth. In reality, they are a fortress unto themselves—the definition of self-containment. Virgos will be endlessly accepting of whatever you have to share, but may not see the value in spontaneously performing a similar excavation of themselves for anyone else.',
    src: 'images/heart.jpeg',
    caption: 'Virgo (08/23 - 09/22)',
}

const Libra = {
    value: 'Libras are difficult to really understand because they seem so contradictory. They\'re simultaneously extroverted and introverted, strategic and spontaneous, focused and intuitive. This variability makes it difficult to pin down their true character. They are an entire constellation of personalities. Libras are different depending on who they\'re around. This is because they value empathy and want to be receptive. They can be other people\'s mirrors. While they have strong opinions about other people, it can take a long time for them to understand themselves. Libras want to be admired not for their talents but for their charm. They want to be seen as the responsible figure who can balance out the turbulent elements around them. Libras feel an intense amount of guilt and shame when they are unhappy because they know that their unhappiness affects everyone around them.',
    src: 'images/bear.jpeg',
    caption: 'Libra (09/23 - 10/22)',
}

const Scorpio = {
    value: 'A Scorpio\'s personality is a chasm of infinite complexity (or at least how they project themselves). They are difficult people to get to know because they are psychological trap doors. Scorpios socialize from behind a double-sided mirror, always scanning, reading you while you can only see your own reflection. They prefer to be the people asking the questions, removing your skin with their perceptive scalpel and taking inventory of your pulsing viscera. They subtly probe and push your pressure points so they can get the answer they\'re seeking. Scorpios are keenly aware of power, its flows, and their position within its matrix. Despite their ability to be popular, there\'s something very lonely about Scorpios. They have a ruthless view of the world. Eat or be eaten. Their knowledge of other people\'s internal structures gives them an edge over the competition. They know how to play people against each other. Every human interaction is a meeting of opposing powerful forces. A clashing of wants and needs where somebody wins and somebody loses. They are forthcoming and evasive at the same time, depending on what is situationally beneficial. They are blunt, but not without tact. They are intentional about the information they reveal. They\'re not liars, they don\'t spread lies, but they are masters of opening windows on certain truths while concealing others behind heavy curtains.',
    src: 'images/cat.webp',
    caption: 'Scorpio (10/23 - 11/21)',
}

const Sagittarius = {
    value: 'Sagittarians are the ultimate empiricists. They will always choose principles over feelings and will often question who they are. They move from job to job, philosophy to philosophy, belief to belief. They are explorers of the human condition and are unafraid of change. Sagittarians feel like the world is their playground. They love to explore the unknown. At their core, they want to understand how the world works. On an unbounded quest to discover the whole of the universe inside of themselves, Sagittarians are unshackled from any particular worldly attachment. They are reckless in their pursuit of what they want, and often end up doing and experiencing things that defy conceptions of the possible. Sagittarians are explorers. They are both the fearless adventurers and the jaded critics. They understand that knowledge comes in two forms: the shallow, disposable kind that comes from external sources, and the kind that comes from within. Sagittarians know that external knowledge can be easily gained while internal knowledge is exponentially deeper and more powerful.',
    src: 'images/dino.jpeg',
    caption: 'Sagittarius (11/22 - 12/21)',
}


const Capricorn = {
    value: "Capricorns aren\'t consumed by the need for attention, but are not immune to it. They simply don\'t indulge in attention-seeking behavior. Capricorns don\'t want attention for their looks or style or ingenuity. They don\'t want to be admired, but they do want to be respected. They don\'t care to be the center of attention. Instead it\'s like they need to prove their own abilities to themselves. They plow through adversity with blinders on until they reach success. Capricorns are constantly competing with themselves. They do want praise, though. Praise is a simple acknowledgment of a job well done. Praise is a pat on the back. They use this as validation to compensate for general feelings of incompetence and inferiority.",
    src: 'images/dog.jpeg',
    caption: 'Capricorn (12/22 - 01/19)',
}

const Aquarius = {
    value: "Aquarians are archetypal outcasts. This doesn\'t mean they\'re loners. In fact, they thrive in large groups—charming you with their peculiar senses of humor, intriguing you with fun facts about the history of disposable straws, or convincing you to join their reading groups. The alienation they feel is often self-imposed—a result of their knee-jerk contrarianism, rather than a lack of social intelligence. They try to be weird. Aquarians hang grapefruit rinds from the wall and call it art, they pretend to actually like noise music, they saturate their internal monologues with SAT words. Intelligence, to them, means the ability to formulate the most unpopular opinion possible. If they were white sheep, they\'d dye their wool black just to prove a point. They are destined to live their lives in direct opposition to the current world. In fact, they are world-builders. An entire universe exists in their heads, and this universe adheres to its own set of logic that doesn\'t map onto reality. They aren't anarchists. They are utopians. They are not cold. They are rational. To them, emotions are just holes in their idealistic vessels. Why succumb to sensitivity when there is so much knowledge to acquire, so many problems to be solved, worlds to invent?They sometimes ask, “Why can\'t I be normal?” but in reality, they find normalcy boring. They want to be unknowable. Aquarians want to evade definition. Definitions are binding little rules that other people use to restrict their movement, and they must resist anything that infringes on their freedom to drift. Between definitions, between the individual and the common, between themselves and humanity. The ultimate Aquarian struggle is resolving the tension between their need for community, and their need for complete detachment. Aquarians are always running little tests. They live their lives as one big science experiment, using the element of surprise to collect reactions and construct theories about the intricacies of human nature. They are walking abstract art pieces, shattering traditional perspectives with their complete disregard for convention. They are martyrs to the cause of humanity. Freedom is their only demand.",
    src: 'images/duck.webp',
    caption: 'Aquarius (01/20 - 02/18)',
}

const Pices = {
    value: "Describing a Pisces\' personality can be difficult because Pisces tend to evade distinction. Their behavior changes significantly based on who they\'re around. Pisces are just permeable membranes that pensively let things flow through them. They are cerebral sea sponges. They are boundless, diluting themselves with larger personalities to avoid having to form coherent identities. Most of the qualities usually associated with Pisces (dreaminess, emotionality, imagination) are internal processes that are difficult to observe from the outside. Pisces are primarily inward-facing. They are not self-absorbed, but they are absorbed in themselves. Ultimately, a Pisces wants to dissolve. To wrest themselves of a physical form and diffuse into everything they touch as love. To exist in the gossamer liminal layer that hangs just barely above the material. To live their life like a romantic poem. To understand that reality and fantasy are neighbors on the same infinite plane.",
    src: 'images/octopus.jpeg',
    caption: 'Pices (02/19 - 03/20)',
}












