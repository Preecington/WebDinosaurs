window.onload = function () {
    var sp = document.getElementById("sp");
    var currDate = new Date().getDay();
    sp.innerHTML = sp.innerHTML + "<br />The current day is: " + currDate;
}

