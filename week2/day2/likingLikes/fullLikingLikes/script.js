var likeButtons = ["#neilLikes", "#nicholeLikes", "#jimLikes"]
var counts = [9, 12, 9]

function changeCountNeil(element) {
    var counter = document.querySelector(likeButtons[0]);
    counts[0]++;
    counter.innerText = counts[0] + " like(s)";
}

function changeCountNichole(element) {
    var counter = document.querySelector(likeButtons[1]);
    counts[1]++;
    counter.innerText = counts[1] + " like(s)";
}

function changeCountJim(element) {
    var counter = document.querySelector(likeButtons[2]);
    counts[2]++;
    counter.innerText = counts[2] + " like(s)";
}