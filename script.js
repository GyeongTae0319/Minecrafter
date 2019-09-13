//* Data Check *//
function checkBooleanData(key, defaultValue) {
    if (localStorage.getItem(key) == null) {
        localStorage.setItem(key, defaultValue);
    }

    return localStorage.getItem(key) == 'true';
}

// Night Mode
var nightMode = checkBooleanData('nightMode', 'true');

// Nav Opened
var navOpened = checkBooleanData('navOpened', 'false');


//* Page Load *//
window.onload = () => {
    //* Set Data Values *//

    // Night Mode
    var nightSwitch = document.getElementById('nightSwitch');
    nightSwitch.checked = nightMode;

    // Nav Opened
    var navSwitch = document.getElementById('navSwitch');
    navSwitch.checked = navOpened;


    //* On Click Event *//
    var navItems = document.querySelectorAll('nav>.item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.classList.contains('selected')) {
                e.preventDefault();
            }

            navItems.forEach(element => {
                element.classList.remove('selected');
            });
            item.classList.add('selected');
        });
    });

    var headerTitleImg = document.getElementById('headerTitleImg');
    headerTitleImg.addEventListener('click', (e) => {
        if (navItems[0].classList.contains('selected')) {
            e.preventDefault();
        }

        navItems.forEach(element => {
            element.classList.remove('selected');
        });
        navItems[0].classList.add('selected');
    });


    //* Interval *//

    // Data Update
    setInterval(() => {
        // Night Mode
        nightMode = nightSwitch.checked;
        localStorage.setItem('nightMode', nightMode.toString());

        // Nav Opened
        navOpened = navSwitch.checked;
        localStorage.setItem('navOpened', navOpened.toString());
    }, 1);
}