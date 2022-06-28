
// I want this to work, but it's not working //

// var onOff = element.innerText;

// function logInOff(element) {
//     if (onOff = "Login") {
//         onOff = "Log off";
//     }
//     else if (onOff = "Log off") {
//         onOff = "Login";
//     }
// }   

function logOut(element) {
        element.innerText = "Logout";
}

function hide(element) {
    element.remove();
}