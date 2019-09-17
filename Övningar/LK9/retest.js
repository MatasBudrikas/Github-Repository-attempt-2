let count = 1;
function setColor(btn, color) {

    // const property = document.getElementById(btn);
    if (count == 0) {
        btn.style.backgroundColor = "#FFFFFF";
        count = 1;
    }
    else if (count == 1) {
        btn.style.backgroundColor = "#FF0000";
        count = 2;
    }
    else {
        btn.style.backgroundColor = "#7FFF00";
        count = 0;
    }

}