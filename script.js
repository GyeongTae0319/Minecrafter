/*//=== Functions ===//*/

/*/ Global Values /*/

/* Page Names */
var pages = ['home', 'banner'];


/*/ Page Functions /*/

/** Document Initial
 */
function init() {
    setNavOpened(getNavOpened());

    // Check Url Parameters : Page
    var currentPage = 'home';
    if (getUrlParameters() != null && getUrlParameters()['page'] != undefined) {
        currentPage = getUrlParameters()['page'];
    }

    // Add Click Event in Nav Items
    var navItems = document.querySelectorAll('nav>.item');
    navItems.forEach((item) => {
        if (item.id == currentPage) {
            item.classList.add('selected');
            document.querySelector('section>iframe').src = item.href;
        }

        item.addEventListener('click', (event) => {
            if (item.classList.contains('selected')) {
                event.preventDefault();
                return;
            }

            navItems.forEach((element) => {
                element.classList.remove('selected');
            });
            item.classList.add('selected');
            setUrlParameter('page', item.id);
        });
    });
    
    // Add Loading Screen Event
    document.getElementById('loadingScr').addEventListener('animationend', (event) => {
        event.target.style.display = 'none';
    });

    // Load Complete
    document.body.classList.add('loading-complete');

    defaultInit();
}


/*/ Nav Functions /*/

/** Get Nav Opened
 */
function getNavOpened() {
    if (localStorage.getItem('nav-opened') == null) {
        localStorage.setItem('nav-opened', true);
    }
    return (localStorage.getItem('nav-opened') == 'true');
}

/** Set Nav Opened
 * @param {Boolean} opened 
 */
function setNavOpened(opened) {
    localStorage.setItem('nav-opened', opened);

    var nav = document.querySelector('nav');
    var navButton = document.querySelector('.btn-nav');
    nav.classList.remove('opened');
    navButton.classList.remove('opened');
    if (getNavOpened()) {
        nav.classList.add('opened');
        navButton.classList.add('opened');
    }
}

/** Toggle Nav Opened
 */
function toggleNavOpened() {
    setNavOpened(!getNavOpened());
}
