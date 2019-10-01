/*//--- Values ---//*/

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

/*/ Patterns /*/
class PatternData {
    /**
     * @param {String} name 
     * @param {String} imagePath 
     * @param {String} shieldImagePath
     */
    constructor(name, imagePath, shieldImagePath) {
        this.name = name;
        this.img = imagePath;
        this.shieldImg = shieldImagePath;
    }
}
const Pattern = {
    base: new PatternData('배경', '../assets/images/banner/patterns/base.png', '../assets/images/shield/patterns/base.png'),
    border: new PatternData('테두리', '../assets/images/banner/patterns/border.png', '../assets/images/shield/patterns/border.png'),
    bricks: new PatternData('벽돌 무늬', '../assets/images/banner/patterns/bricks.png', '../assets/images/shield/patterns/bricks.png'),
    circle: new PatternData('원', '../assets/images/banner/patterns/circle.png', '../assets/images/shield/patterns/circle.png'),
    creeper: new PatternData('크리퍼 모양', '../assets/images/banner/patterns/creeper.png', '../assets/images/shield/patterns/creeper.png'),
    cross: new PatternData('X자형 십자', '../assets/images/banner/patterns/cross.png', '../assets/images/shield/patterns/cross.png'),
    curlyBorder: new PatternData('톱니 테두리', '../assets/images/banner/patterns/curly_border.png', '../assets/images/shield/patterns/curly_border.png'),
    diagonalLeft: new PatternData('왼쪽 위로부터의 사선 상부', '../assets/images/banner/patterns/diagonal_left.png', '../assets/images/shield/patterns/diagonal_left.png'),
    diagonalRight: new PatternData('오른쪽 위로부터의 사선 상부', '../assets/images/banner/patterns/diagonal_right.png', '../assets/images/shield/patterns/diagonal_right.png'),
    diagonalUpLeft: new PatternData('오른쪽 위로부터의 사선 하부', '../assets/images/banner/patterns/diagonal_up_left.png', '../assets/images/shield/patterns/diagonal_up_left.png'),
    diagonalUpRight: new PatternData('왼쪽 위로부터의 사선 하부', '../assets/images/banner/patterns/diagonal_up_right.png', '../assets/images/shield/patterns/diagonal_up_right.png'),
    flower: new PatternData('꽃 모양', '../assets/images/banner/patterns/flower.png', '../assets/images/shield/patterns/flower.png'),
    globe: new PatternData('지구 모양', '../assets/images/banner/patterns/globe.png', '../assets/images/shield/patterns/globe.png'),
    gradient: new PatternData('위쪽 그라데이션', '../assets/images/banner/patterns/gradient.png', '../assets/images/shield/patterns/gradient.png'),
    gradientUp: new PatternData('아래쪽 그라데이션', '../assets/images/banner/patterns/gradient_up.png', '../assets/images/shield/patterns/gradient_up.png'),
    halfHorizontal: new PatternData('중앙 가로선 상부', '../assets/images/banner/patterns/half_horizontal.png', '../assets/images/shield/patterns/half_horizontal.png'),
    halfHorizontalBottom: new PatternData('중앙 가로선 하부', '../assets/images/banner/patterns/half_horizontal_bottom.png', '../assets/images/shield/patterns/half_horizontal_bottom.png'),
    halfVertical: new PatternData('중앙 세로선 우측', '../assets/images/banner/patterns/half_vertical.png', '../assets/images/shield/patterns/half_vertical.png'),
    halfVerticalRight: new PatternData('중앙 세로선 좌측', '../assets/images/banner/patterns/half_vertical_right.png', '../assets/images/shield/patterns/half_vertical_right.png'),
    mojang: new PatternData('무언가', '../assets/images/banner/patterns/mojang.png', '../assets/images/shield/patterns/mojang.png'),
    rhombus: new PatternData('마름모', '../assets/images/banner/patterns/rhombus.png', '../assets/images/shield/patterns/rhombus.png'),
    skull: new PatternData('해골 모양', '../assets/images/banner/patterns/skull.png', '../assets/images/shield/patterns/skull.png'),
    smallStripes: new PatternData('세로줄 무늬', '../assets/images/banner/patterns/small_stripes.png', '../assets/images/shield/patterns/small_stripes.png'),
    squareBottomLeft: new PatternData('오른쪽 아래 사각형', '../assets/images/banner/patterns/square_bottom_left.png', '../assets/images/shield/patterns/square_bottom_left.png'),
    squareBottomRight: new PatternData('왼쪽 아래 사각형', '../assets/images/banner/patterns/square_bottom_right.png', '../assets/images/shield/patterns/square_bottom_right.png'),
    squareTopLeft: new PatternData('오른쪽 위 사각형', '../assets/images/banner/patterns/square_top_left.png', '../assets/images/shield/patterns/square_top_left.png'),
    squareTopRight: new PatternData('왼쪽 위 사각형', '../assets/images/banner/patterns/square_top_right.png', '../assets/images/shield/patterns/square_top_right.png'),
    straightCross: new PatternData('십자', '../assets/images/banner/patterns/straight_cross.png', '../assets/images/shield/patterns/straight_cross.png'),
    stripeBottom: new PatternData('아래쪽 가로띠', '../assets/images/banner/patterns/stripe_bottom.png', '../assets/images/shield/patterns/stripe_bottom.png'),
    stripeCenter: new PatternData('중앙 세로띠', '../assets/images/banner/patterns/stripe_center.png', '../assets/images/shield/patterns/stripe_center.png'),
    stripeDownLeft: new PatternData('왼쪽 위로부터의 사선', '../assets/images/banner/patterns/stripe_downleft.png', '../assets/images/shield/patterns/stripe_downleft.png'),
    stripeDonwRight: new PatternData('오른쪽 위로부터의 사선', '../assets/images/banner/patterns/stripe_downright.png', '../assets/images/shield/patterns/stripe_downright.png'),
    stripeLeft: new PatternData('오른쪽 세로띠', '../assets/images/banner/patterns/stripe_left.png', '../assets/images/shield/patterns/stripe_left.png'),
    stripeMiddle: new PatternData('중앙 가로띠', '../assets/images/banner/patterns/stripe_middle.png', '../assets/images/shield/patterns/stripe_middle.png'),
    stripeRight: new PatternData('왼쪽 세로띠', '../assets/images/banner/patterns/stripe_right.png', '../assets/images/shield/patterns/stripe_right.png'),
    stripeTop: new PatternData('위쪽 세로띠', '../assets/images/banner/patterns/stripe_top.png', '../assets/images/shield/patterns/stripe_top.png'),
    triangleBottom: new PatternData('하단 삼각형', '../assets/images/banner/patterns/triangle_bottom.png', '../assets/images/shield/patterns/triangle_bottom.png'),
    triangleTop: new PatternData('상단 삼각형', '../assets/images/banner/patterns/triangle_top.png', '../assets/images/shield/patterns/triangle_top.png'),
    trianglesBottom: new PatternData('아래쪽 톱니 모양', '../assets/images/banner/patterns/triangles_bottom.png', '../assets/images/shield/patterns/triangles_bottom.png'),
    trianglesTop: new PatternData('위쪽 톱니 모양', '../assets/images/banner/patterns/triangles_top.png', '../assets/images/shield/patterns/triangles_top.png'),
};

/*/ Svg Icons /*/
const Icon = {
    trashCan: `<path d="M446,70H344.8V53.5c0-29.5-24-53.5-53.5-53.5h-96.2c-29.5,0-53.5,24-53.5,53.5V70H40.4c-7.5,0-13.5,6-13.5,13.5S32.9,97,40.4,97h24.4v317.2c0,39.8,32.4,72.2,72.2,72.2h212.4c39.8,0,72.2-32.4,72.2-72.2V97H446c7.5,0,13.5-6,13.5-13.5S453.5,70,446,70z M168.6,53.5c0-14.6,11.9-26.5,26.5-26.5h96.2c14.6,0,26.5,11.9,26.5,26.5V70H168.6V53.5z M394.6,414.2c0,24.9-20.3,45.2-45.2,45.2H137c-24.9,0-45.2-20.3-45.2-45.2V97h302.9v317.2H394.6z"></path><path d="M243.2,411c7.5,0,13.5-6,13.5-13.5V158.9c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v238.5C229.7,404.9,235.7,411,243.2,411z"></path><path d="M155.1,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9C141.6,390.1,147.7,396.1,155.1,396.1z"></path><path d="M331.3,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9C317.8,390.1,323.8,396.1,331.3,396.1z"></path>`
};


/*//--- Banner ---//*/
class BannerLayer {
    /**
     * @param {PatternData} pattern 
     * @param {ColorData} color 
     */
    constructor(pattern, color, index) {
        this.index = index;
        this.pattern = pattern;
        this.color = color;

        this.setup();
    }

    setup() {
        this.setupPreview();
        this.setupLayerItem();

        this.drawCanvas();
    }

    setupPreview() {
        this.preview = document.createElement('canvas');
        this.preview.width = 20;
        this.preview.height = 40;
        document.getElementById('preview').appendChild(this.preview);

        this.shieldPreview = document.createElement('canvas');
        this.shieldPreview.width = 12;
        this.shieldPreview.height = 22;
        document.getElementById('previewShield').appendChild(this.shieldPreview);
    }

    setupLayerItem() {
        this.layerItem = document.createElement('li');
        this.layerItem.classList.add('layer');
        if (this.pattern == Pattern.base) {
            this.layerItem.id = 'base';
        }

        this.layerThumbnail = document.createElement('canvas');
        this.layerThumbnail.width = 20;
        this.layerThumbnail.height = 40;
        this.layerThumbnail.classList.add('thumbnail');
        this.layerThumbnail.addEventListener('click', () => {
            Banner.currentLayer = this.index;
        });
        this.layerItem.appendChild(this.layerThumbnail);

        this.layerName = document.createElement('span');
        this.layerName.classList.add('name');
        this.layerName.innerHTML = this.color.name + ' ' + this.pattern.name;
        this.layerName.addEventListener('click', () => {
            Banner.currentLayer = this.index;
        });
        this.layerItem.appendChild(this.layerName);

        if (this.pattern != Pattern.base) {
            var deleteButton = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            deleteButton.classList.add('delete');
            deleteButton.setAttribute('viewBox', '0 0 486.4 486.4');
            deleteButton.innerHTML = Icon.trashCan;
            deleteButton.addEventListener('click', (e) => {
                this.delete();
            });
            this.layerItem.appendChild(deleteButton);
        }

        var layerList = document.getElementById('layerList');
        layerList.insertBefore(this.layerItem, layerList.firstChild);
    }

    drawCanvas() {
        var contexts = [this.preview.getContext('2d'), this.layerThumbnail.getContext('2d')];
        
        contexts.forEach(context => {
            context.clearRect(0, 0, 20, 40);

            var backgroundImage = new Image();
            backgroundImage.addEventListener('load', () => {
                context.drawImage(backgroundImage, 0, 0, 20, 40);
                context.globalCompositeOperation = 'multiply';
                context.fillStyle = this.color.code;
                context.fillRect(0, 0, 20, 40);

                var patternImage = new Image();
                patternImage.addEventListener('load', () => {
                    context.globalCompositeOperation = 'destination-atop';
                    context.drawImage(patternImage, 0, 0, 20, 40);
                }, false);
                patternImage.src = this.pattern.img;
            }, false);
            backgroundImage.src = '../assets/images/banner/base.png';
        });

        var shieldContext = this.shieldPreview.getContext('2d');
        shieldContext.clearRect(0, 0, 12, 22);

        var shieldBackground = new Image();
        shieldBackground.addEventListener('load', () => {
            shieldContext.drawImage(shieldBackground, 1, 1, 10, 20);
            shieldContext.globalCompositeOperation = 'multiply';
            shieldContext.fillStyle = this.color.code;
            shieldContext.fillRect(1, 1, 10, 20);

            var patternImage = new Image();
            patternImage.addEventListener('load', () => {
                shieldContext.globalCompositeOperation = 'destination-atop';
                shieldContext.drawImage(patternImage, 1, 1, 10, 20);

                if (this.pattern == Pattern.base) {
                    shieldContext.globalCompositeOperation = 'source-over';
                    var frameImage = new Image();
                    frameImage.addEventListener('load', () => {
                        shieldContext.drawImage(frameImage, 0, 0, 12, 22);
                    });
                    frameImage.src = '../assets/images/shield/frame.png';
                }
            }, false);
            patternImage.src = this.pattern.shieldImg;
        }, false);
        shieldBackground.src = '../assets/images/shield/base.png';
    }

    /**
     * @param {PatternData} pattern 
     */
    changePattern(pattern) {
        this.pattern = pattern;
        this.layerName.innerHTML = this.color.name + ' ' + this.pattern.name;
        this.drawCanvas();
    }

    /**
     * @param {ColorData} color 
     */
    changeColor(color) {
        this.color = color;
        this.layerName.innerHTML = this.color.name + ' ' + this.pattern.name;
        this.drawCanvas();
    }

    delete() {
        this.preview.parentElement.removeChild(this.preview);
        this.shieldPreview.parentElement.removeChild(this.shieldPreview);
        this.layerItem.parentElement.removeChild(this.layerItem);

        if (this.index <= Banner.currentLayer) {
            Banner.currentLayer--;
        }

        for (var i = this.index + 1; i < Banner.layers.length; i++) {
            Banner.layers[i].index--;
        }

        Banner.layers.splice(this.index, 1);

        checkSelectedLayer();
    }
}

const Banner = {
    layers: [new BannerLayer(Pattern.base, Color.white, 0)],
    currentLayer: 0,

    /**
     * @param {PatternData} pattern 
     * @param {ColorData} color 
     */
    addLayer() {
        if (this.layers.length > 16) {
            return;
        }

        this.layers.push(new BannerLayer(Pattern.border, Color.white, this.layers.length));
        this.currentLayer = this.layers.length - 1;
    },

    /**
     * @param {PatternData} pattern 
     */
    changePattern(pattern) {
        this.layers[this.currentLayer].changePattern(pattern);
    },

    /**
     * @param {ColorData} color 
     */
    changeColor(color) {
        this.layers[this.currentLayer].changeColor(color);
    }
};


/*//--- On Click Event ---//*/

/*/ Color Picker /*/
var colorPicker = document.getElementById('colorPicker');
var colors = new Array();
Object.keys(Color).forEach(color => {
    var colorObj = document.createElement('span');
    colorObj.id = color;
    colorObj.style.backgroundColor = Color[color].code;

    colorObj.addEventListener('click', (e) => {
        if (Banner.layers[Banner.currentLayer].color == Color[color]) {
            e.preventDefault();
            return;
        }
        Banner.changeColor(Color[color]);
    });

    colors.push(colorObj);
    colorPicker.appendChild(colorObj);
});

/*/ Pattern Picker /*/
var patternPicker = document.getElementById('patternPicker');
var patterns = new Array();
Object.keys(Pattern).forEach(pattern => {
    if (Pattern[pattern] == Pattern.base) {
        return;
    }

    var patternObj = document.createElement('img');
    patternObj.id = pattern;
    patternObj.src = Pattern[pattern].img;

    patternObj.addEventListener('click', (e) => {
        if (Banner.layers[Banner.currentLayer].pattern == Pattern[pattern] ||
            Banner.currentLayer == 0) {
            e.preventDefault();
            return;
        }
        Banner.changePattern(Pattern[pattern]);
    });

    patterns.push(patternObj);
    patternPicker.appendChild(patternObj);
});

/*/ Add Layer /*/
var addLayer = document.getElementById('addLayer');
addLayer.addEventListener('click', () => {
    Banner.addLayer();
});


/*//--- Set Interval ---//*/

/*/ Color Picker Update /*/
var wasColor = null;
colorPickerUpdate = setInterval(() => {
    var currentColor = Banner.layers[Banner.currentLayer].color;
    if (wasColor != currentColor) {
        colors.forEach(color => {
            if (Color[color.id] == currentColor)
                color.classList.add('selected');
            else
                color.classList.remove('selected');
        });
    }
    wasColor = currentColor;
}, 1);

/*/ Selected Layer Update /*/
var wasLayer = null;
function checkSelectedLayer() {
    Banner.layers.forEach(layer => {
        if (Banner.layers[Banner.currentLayer].index == layer.index)
            layer.layerItem.classList.add('selected');
        else
            layer.layerItem.classList.remove('selected');
    });
}
selectedLayerUpdate = setInterval(() => {
    if (wasLayer != Banner.currentLayer) {
        checkSelectedLayer();
    }
    wasLayer = Banner.currentLayer;
}, 1);