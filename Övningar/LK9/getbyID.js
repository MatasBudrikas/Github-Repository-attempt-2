const headerEl = document.getElementById("header");
headerEl.innerText = headerEl.innerText.toUpperCase();
headerEl.style.color = "black";
headerEl.style.display = "solid";

document.body.style.backgroundColor = "salmon";
console.log(document.body);

const paragraphEls = document.getElementsByTagName("p");
console.log(paragraphEls);

for (const paragraphEl of paragraphEls) {
    paragraphEl.className = 'important';
    console.log(paragraphEl);
}