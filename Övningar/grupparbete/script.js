let headerEl = document.getElementById("header1");
headerEl.style.color = "turquoise";
headerEl.style.genericFamily = "sans-serif";
headerEl.style.fontSize = "50px";

let count = 1;
function setColor(id, color) {
    const titleEl = document.getElementById(id);
    titleEl.style.color = color;
    if (count == 0) {
        titleEl.style.color = "#FFFFFF";
        count = 1;
    }
    else if (count == 1) {
        titleEl.style.color = "#FF0000";
        count = 2;
    }
    else if (count == 2) {
        titleEl.style.color = "#7FFF00";
        count = 3;
    }
    else {
        titleEl.style.color = "#40e0d0";
        count = 0;
    }

}

let bodyEls = document.getElementsByTagName("body");
for (const el of bodyEls) {
    el.style.color = "#384242";
}

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

    const activeTab = document.getElementById(tabName);
    activeTab.style.display = "block";
    evt.currentTarget.className += " active";

    // document.getElementById(tabName).style.display = "block"; {
    //     evt.currentTarget.className += " active";
    // }
}

let currentTheme = "default";
function toggleTheme() {
    const bodyEl = document.getElementsByTagName('body')[0];

    if (currentTheme === 'default') {
        bodyEl.className = "alt-theme";
        currentTheme = "alt";
    } else {
        bodyEl.className = "default-theme";
        currentTheme = "default";
    }
}