/** Default Initial
 */
function defaultInit() {
    themeInit();
}


/*/ Url Parameter Functions /*/

/** Set Url Parameters
 * @param {String} key 
 * @param {String} value 
 */
function setUrlParameter(key, value) {
    var urlParams = location.search;
    var paramObj = new Object();
    paramObj[key] = value;
    if (urlParams != '') {
        if (getUrlParameters()[key] != null) {
            urlParams = urlParams.replace(`${key}=${getUrlParameters()[key]}`, `${key}=${value}`);
        }
        else {
            urlParams.concat(`&${key=value}`);
        }
    }
    else {
        urlParams = `?${key}=${value}`;
    }
    history.pushState(paramObj, '', `${location.origin}/Minecrafter/${urlParams}`);
}

/** Get Url Parameters
 */
function getUrlParameters() {
    var result = new Object();
    var urlData = location.search.substr(location.search.indexOf('?') + 1).split('&');
    if (urlData == '') {
        return null;
    }

    urlData.forEach((param) => {
        var data = param.split('=');
        result[data[0]] = data[1];
    });

    return result;
}