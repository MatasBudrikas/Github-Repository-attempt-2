let count = 1;
function setColor(id, color) {
    const C1 = document.getElementById(id);
    C1.style.color = color;
    if (count == 0) {
        C1.style.Color = "#FFFFFF";
        count = 1;
    }
    else if (count == 1) {
        C1.style.Color = "#FF0000";
        count = 2;
    }
    else {
        C1.style.Color = "#7FFF00";
        count = 0;
    }

}

let T1 = document.getElementById("header1");
T1.style.color = "turquoise";
T1.style.genericFamily = "sans-serif";
T1.style.fontSize = "50px";

let B1 = document.getElementsByTagName("body");
B1.style.color = "#384242";

function openTab(evt, tabName) {
    var i, tabLinks, tabContent;


    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block"; {
        evt.currentTarget.className += " active";
    }
}