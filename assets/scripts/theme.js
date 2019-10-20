/*//=== Theme Functions ===//*/

/** Theme Setting Initial
 */
function themeInit() {
    setCurrentTheme(getCurrentTheme());

    setInterval(() => {
        if (document.documentElement.getAttribute('data-theme') != getCurrentTheme()) {
            document.documentElement.setAttribute('data-theme', getCurrentTheme());
        }
    }, 1);
}

/** Get Current Theme
 */
function getCurrentTheme() {
    if (localStorage.getItem('theme') == null) {
        localStorage.setItem('theme', 'dark');
    }
    return localStorage.getItem('theme');
}

/** Set Current Theme
 * @param {String} theme 
 */
function setCurrentTheme(theme) {
    localStorage.setItem('theme', theme);

    var themeButton = document.querySelector('.btn-theme')
    if (themeButton != null) {
        themeButton.classList.remove('light', 'dark');
        themeButton.classList.add(getCurrentTheme());
    }
}

/** Toggle Theme
 */
function toggleTheme() {
    setCurrentTheme((getCurrentTheme() == 'dark') ? 'light' : 'dark');
}