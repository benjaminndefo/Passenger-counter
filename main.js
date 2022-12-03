// document.getElementById("count-el").innerText = 5;

let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    document.getElementById("count-el").innerText = count;
}

function reset() {
    count = 0;
    document.getElementById("count-el").innerText = count;
}

function save(){
    let results = " " + count + " - ";
    saveEl.innerText += results;
    console.log(count);
}






// let myName = "Benjamin ";
// let greetings = "Hi 👋, my name is ";
// let myGreeting = greetings + myName;

// let welcomeEL = document.getElementById("welcome-el");
// welcomeEL.innerText = myGreeting;

// welcomeEL.innerText += "👋";




