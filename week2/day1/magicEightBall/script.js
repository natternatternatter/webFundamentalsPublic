var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getAnswer(array) {
    return array[Math.floor(Math.random() * array.length)];
}

console.log (getAnswer(lifesAnswers));

function replace() {
    return document.getElementById("answer").innerHTML = getAnswer(lifesAnswers);
}

function replaceImg() {
    return document.getElementById("ball").src = "ball.gif";
}