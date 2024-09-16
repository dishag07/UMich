// script.js

const quotes = [
    "'Top to bottom Michigan is about excellence, greatness. You have my pledge I will carry forward the excellence of Michigan football'",
    "'DHSP is a great place to build on your math skills, and make amazing connections in a supportive environment surrounded by people who are all very similar to you and I'd recommend it to anyone'",
    "'You can't fail there. You have so much support. So much help. We have the academic center. We can get tutors when we want and the professors are good'",
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function updateQuote() {
    document.getElementById('quotes').textContent = getRandomQuote();
}

// Set initial quote
updateQuote();

// Change quote every 5 seconds (5000 milliseconds)
setInterval(updateQuote, 5000);
