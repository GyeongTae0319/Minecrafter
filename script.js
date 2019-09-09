//* Data Check *//

// Night Mode
var nightMode = true;
if (localStorage.getItem("nightMode") == null) {
    localStorage.setItem("nightMode", "true");
}
else {
    nightMode = (localStorage.getItem("nightMode") == "true");
}

// Nav Opened
var navOpened = false;
if (localStorage.getItem("navOpened") == null) {
    localStorage.setItem("navOpened", "false");
}
else {
    navOpened = (localStorage.getItem("navOpened") == "true")
}


//* Page Load *//
window.onload = () => {
    //* Set Data Values *//

    // Night Mode
    var nightSwitch = document.getElementById("nightSwitch");
    nightSwitch.checked = nightMode;

    // Nav Opened
    var navSwitch = document.getElementById("navSwitch");
    navSwitch.checked = navOpened;


    //* Interval *//

    // Data Update
    setInterval(() => {
        // Night Mode
        nightMode = nightSwitch.checked;
        localStorage.setItem("nightMode", nightMode.toString());

        // Nav Opened
        navOpened = navSwitch.checked;
        localStorage.setItem("navOpened", navOpened.toString());
    }, 1);
}
