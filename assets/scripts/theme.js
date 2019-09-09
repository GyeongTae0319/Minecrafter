//* Page Load *//
window.onload = () => {
    //* Interval *//

    // Data Update
    var nightSwitch = document.getElementById("nightSwitch");
    setInterval(() => {
        // Night Mode
        let nightMode = (() => {
            if (localStorage.getItem("nightMode") == null) {
                localStorage.setItem("nightMode", "true");
            }

            return localStorage.getItem("nightMode") == "true";
        })();
        nightSwitch.checked = nightMode;
    }, 1);
}