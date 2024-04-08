const sarcasticRemarks = [
    "Look at you, breaking new ground in the field of common sense.",
    "Well, aren't you just a fountain of originality?",
    "I'm amazed at how you effortlessly lower the bar.",
    "I love how your ideas are like fine wine – they get worse with time.",
    "If ignorance is bliss, you must be the happiest person alive.",
    "Your level of competence is truly a sight to behold, or not.",
    "You're like a masterclass in how to be underwhelming.",
    "Bravo! I didn't know it was possible to be so impressively unimpressive.",
    "You're like a rare gem – if gems were completely common and unimpressive.",
    "Your wit is as sharp as a butter knife. Impressive!",
    "Congratulations on your unparalleled expertise in stating the obvious.",
    "You're thinking? On purpose?",
    "Thank you for gracing us with your...limited intelligence",
    "As if I can't find more reasons not to date, you give me another one",
    "Yes I love hearing your outdated ideals and grow backwards!",
    "Oh that's a compliment? How cute",
    "Your sarcasm is so subtle, it's almost undetectable. Almost."
];

const fontStyles = ['Madimi One', 'Plus Jakarta Sans', 'Inter', 'Pompiere'];

const backgroundColors = [
    ['#91EE8F','#194A24'], 
    ['#5AB3E5','#2D3197'],
    ['#554949','#E7E4E4'],
    ['#400E0E','#F98E8E'],
    ['#DB8CF6','#622D97'],
    ['#EC9E42','#754213'],
    ['#EEF072','#A7852F'],
    ['#194A24','#91EE8F'],
    ['#F98E8E','#400E0E'],
    ['#251D7F','#5AB3E5'],
    ['#BD2E73','#EE8FBC']
];


function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateRandomStyle() {
    const fontStyle = getRandomElement(fontStyles);
    const backgroundColor = getRandomElement(backgroundColors);

    return {
        fontStyle,
        backgroundColor
    };
}

// function generateSarcasticRemark(event) {
//     var instructions = document.getElementById('instructions');
//     instructions.style.display = "none";

//     var quotes = document.getElementById('quotes');
//     quotes.style.display = "none";

//     const existingRemarks = document.querySelectorAll('.sarcastic-remark');
//     existingRemarks.forEach(remark => remark.remove());


//     const sarcasticRemark = getRandomElement(sarcasticRemarks);
//     const { fontStyle, backgroundColor } = generateRandomStyle();

//     const sarcasticRemarkElement = document.createElement('div');
//     sarcasticRemarkElement.textContent = sarcasticRemark;
//     sarcasticRemarkElement.style.fontFamily = fontStyle;
//     sarcasticRemarkElement.style.backgroundColor = backgroundColor[0];
//     sarcasticRemarkElement.style.color = backgroundColor[1];
//     sarcasticRemarkElement.style.fontSize = getRandomFontSize();
//     sarcasticRemarkElement.style.position = 'absolute';
//     sarcasticRemarkElement.style.left = event.clientX + 'px';
//     sarcasticRemarkElement.style.top = event.clientY + 'px';
//     sarcasticRemarkElement.classList.add('sarcastic-remark');

//     // generates random remark
//     document.body.appendChild(sarcasticRemarkElement);

//     // Change the background color of the body
//     document.body.style.backgroundColor = backgroundColor[0];
// }

function generateSarcasticRemark(event) {
    var instructions = document.getElementById('instructions');
    instructions.style.display = "none";

    var quotes = document.getElementById('quotes');
    quotes.style.display = "none";

    const existingRemarks = document.querySelectorAll('.sarcastic-remark');
    existingRemarks.forEach(remark => remark.remove());

    const sarcasticRemark = getRandomElement(sarcasticRemarks);
    const { fontStyle, backgroundColor } = generateRandomStyle();

    const sarcasticRemarkElement = document.createElement('div');
    sarcasticRemarkElement.textContent = sarcasticRemark;
    sarcasticRemarkElement.style.fontFamily = fontStyle;
    sarcasticRemarkElement.style.backgroundColor = backgroundColor[0];
    sarcasticRemarkElement.style.color = backgroundColor[1];
    sarcasticRemarkElement.style.fontSize = getRandomFontSize();
    sarcasticRemarkElement.style.position = 'absolute';

    // Adjusting position based on click position
    const offsetX = 0; // Adjust this value to your preference
    const offsetY = 40; // Adjust this value to your preference
    const maxX = window.innerWidth - sarcasticRemarkElement.offsetWidth - offsetX;
    const maxY = window.innerHeight - sarcasticRemarkElement.offsetHeight - offsetY;
    const left = Math.min(event.clientX + offsetX, maxX);
    const top = Math.min(event.clientY + offsetY, maxY);
    sarcasticRemarkElement.style.left = left + 'px';
    sarcasticRemarkElement.style.top = top + 'px';
    sarcasticRemarkElement.classList.add('sarcastic-remark');

    document.body.appendChild(sarcasticRemarkElement);

    document.body.style.backgroundColor = backgroundColor[0];
}

// function generateSarcasticRemark(event) {
//     var instructions = document.getElementById('instructions');
//     instructions.style.display = "none";

//     var quotes = document.getElementById('quotes');
//     quotes.style.display = "none";

//     const existingRemarks = document.querySelectorAll('.sarcastic-remark');
//     existingRemarks.forEach(remark => remark.remove());

//     const sarcasticRemark = getRandomElement(sarcasticRemarks);
//     const { fontStyle, backgroundColor } = generateRandomStyle();

//     const sarcasticRemarkElement = document.createElement('div');
//     sarcasticRemarkElement.textContent = sarcasticRemark;
//     sarcasticRemarkElement.style.fontFamily = fontStyle;
//     sarcasticRemarkElement.style.backgroundColor = backgroundColor[0];
//     sarcasticRemarkElement.style.color = backgroundColor[1];
//     sarcasticRemarkElement.style.fontSize = getRandomFontSize();
//     sarcasticRemarkElement.style.position = 'absolute';

//     // Adjusting position based on click position
//     const offsetX = 40; // Adjust this value to your preference
//     const offsetY = 50; // Adjust this value to your preference
//     const maxX = window.innerWidth - sarcasticRemarkElement.offsetWidth - offsetX;
//     const maxY = window.innerHeight - sarcasticRemarkElement.offsetHeight - offsetY;
//     const left = Math.min(event.clientX + offsetX, maxX);
//     const top = Math.min(event.clientY + offsetY, maxY);
//     sarcasticRemarkElement.style.left = left + 'px';
//     sarcasticRemarkElement.style.top = top + 'px';
//     sarcasticRemarkElement.classList.add('sarcastic-remark');

//     document.body.appendChild(sarcasticRemarkElement);

//     document.body.style.backgroundColor = backgroundColor[0];
// }

// function generateSarcasticRemark(event) {
//     var instructions = document.getElementById('instructions');
//     instructions.style.display = "none";

//     var quotes = document.getElementById('quotes');
//     quotes.style.display = "none";

//     const existingRemarks = document.querySelectorAll('.sarcastic-remark');
//     existingRemarks.forEach(remark => remark.remove());

//     const sarcasticRemark = getRandomElement(sarcasticRemarks);
//     const { fontStyle, backgroundColor } = generateRandomStyle();

//     const sarcasticRemarkElement = document.createElement('div');
//     sarcasticRemarkElement.textContent = sarcasticRemark;
//     sarcasticRemarkElement.style.fontFamily = fontStyle;
//     sarcasticRemarkElement.style.backgroundColor = backgroundColor[0];
//     sarcasticRemarkElement.style.color = backgroundColor[1];
//     sarcasticRemarkElement.style.fontSize = getRandomFontSize();
//     sarcasticRemarkElement.style.position = 'absolute';

//     // Adjusting position based on click position
//     const offsetX = 0; // Adjust this value to your preference
//     const offsetY = 50; // Adjust this value to your preference
//     const maxX = window.innerWidth - sarcasticRemarkElement.offsetWidth - offsetX;
//     const maxY = window.innerHeight - sarcasticRemarkElement.offsetHeight - offsetY;
//     let left = Math.min(event.clientX + offsetX, maxX);
//     const top = Math.min(event.clientY + offsetY, maxY);

//     // Adjust left position if necessary to prevent cutting off on the right
//     if (left <0) {
//         left = 0;
//     }

//     sarcasticRemarkElement.style.left = left + 'px';
//     sarcasticRemarkElement.style.top = top + 'px';
//     sarcasticRemarkElement.classList.add('sarcastic-remark');

//     document.body.appendChild(sarcasticRemarkElement);

//     document.body.style.backgroundColor = backgroundColor[0];
// }


function getRandomFontSize() {
    const minFontSize = 30;
    const maxFontSize = 30;
    return Math.floor(Math.random() * (maxFontSize - minFontSize + 1)) + minFontSize + 'px';
}

document.body.addEventListener('click', generateSarcasticRemark);