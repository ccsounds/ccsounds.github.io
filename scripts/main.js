/*

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

*/

/*

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/MIO-CC-shows.png') {
        myImage.setAttribute('src','images/MIO-edwin-collab.png');
    } else {
        myImage.setAttribute('src','images/MIO-CC-shows.png');
    }
}

*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
