
// // I want this to work, but it's not working //

// var onOff = element.innerText;

// function logOut(element) {
//     if (onOff == "Login") {
//         element.innerText = "Log off";
//     }
//     else if (onOff == "Log off") {
//         element.innerText = "Login";
//     }
// }   

function logOut(element) {
        element.innerText = "Logout";
}

function hide(element) {
    element.remove();
}