const name = prompt("state your name.");

function helloPhrase(name) {
    return "Hi, " + name + "! Welcome to hell."

}

//console.log(helloPhrase(name))

const container1 = document.getElementById("container1");
const texttoAppend = helloPhrase(name);
const textEl = document.createElement('p');
textEl.textContent = texttoAppend;
container1.appendChild(textEl);
//container1.textContent = texttoAppend;