var counter = document.querySelector("#likes");
var count = 3;

function changeCount(element) {
    count++;
    counter.innerText = count + " like(s)";
}

