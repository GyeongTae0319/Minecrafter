/*//=== Values ===//*/

/*/ Colors /*/
class ColorData {
    /**
     * @param {String} name 
     * @param {String} code 
     */
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}
const Color = {
    red: new ColorData('빨간색', '#b02d26'),
    orange: new ColorData('주황색', '#f9801d'),
    yellow: new ColorData('노란색', '#fed83d'),
    lime: new ColorData('연두색', '#80c71f'),
    green: new ColorData('초록색', '#5e7c16'),
    cyan: new ColorData('청록색', '#169c9c'),
    lightBlue: new ColorData('하늘색', '#3ab3da'),
    blue: new ColorData('파란색', '#3c44aa'),
    purple: new ColorData('보라색', '#8932b8'),
    magenta: new ColorData('자홍색', '#c74ebd'),
    pink: new ColorData('분홍색', '#f38baa'),
    white: new ColorData('하얀색', '#ffffff'),
    lightGray: new ColorData('회백색', '#9d9d97'),
    gray: new ColorData('회색', '#474f52'),
    black: new ColorData('검정색', '#1d1d21'),
    brown: new ColorData('갈색', '#835432')
};


/*/ Page Functions /*/

/* 
     /\_/\
    ( o.o )
     > ^ <

     귀엽네 >.<
*/

/** Document Initial
 */
function init() {
    defaultInit();
    colorPickerInit();
}


function colorPickerInit() {
    var colorPicker = document.getElementById('colorPicker');
    Object.keys(Color).forEach(color => {
        var element = document.createElement('span');
        element.id = color;
        element.classList.add('color');

        var fill = document.createElement('span');
        fill.style.backgroundColor = Color[color].code;
        element.appendChild(fill);

        element.addEventListener('click', (event) => {
            event.target.classList.toggle('selected');
            console.log("Color Click > " + color);
        }, false);

        colorPicker.appendChild(element);
    });
}
