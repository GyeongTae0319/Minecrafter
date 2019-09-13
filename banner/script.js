/*//--- Values ---//*/
const Color = {
    red: '#b02e26',
    orange: '#f9801d',
    yellow: '#fed83d',
    lime: '#80c71f',
    green: '#5e7c16',
    lightBlue: '#3ab3da',
    cyan: '#169c9c',
    blue: '#3c44aa',
    purple: '#8932b8',
    magenta: '#c74ebd',
    pink: '#f38baa',
    white: '#f9fffe',
    lightGray: '#9d9d97',
    gray: '#474f52',
    black: '#1d1d21',
    brown: '#835432'
}

const Pattern = {
    base: {
        name: '배경',
        img: '../assets/images/banner/base.png'
    },
    border: {
        name: '테두리',
        img: '../assets/images/banner/pattern/border.png'
    },
    bricks: {
        name: '벽돌 무늬',
        img: '../assets/images/banner/pattern/bricks.png'
    },
    circle: {
        name: '원',
        img: '../assets/images/banner/pattern/circle.png'
    },
    creeper: {
        name: '크리퍼 모양',
        img: '../assets/images/banner/pattern/creeper.png'
    },
    cross: {
        name: 'X자형 십자',
        img: '../assets/images/banner/pattern/cross.png'
    },
    curlyBorder: {
        name: '톱니 테두리',
        img: '../assets/images/banner/pattern/curly_border.png'
    },
    diagonalLeft: {
        name: '왼쪽 위로부터의 사선 상부',
        img: '../assets/images/banner/pattern/diagonal_left.png'
    },
    diagonalRight: {
        name: '오른쪽 위로부터의 사선 상부',
        img: '../assets/images/banner/pattern/diagonal_right.png'
    },
    diagonalUpLeft: {
        name: '오른쪽 위로부터의 사선 하부',
        img: '../assets/images/banner/pattern/diagonal_up_left.png'
    },
    diagonalUpRight: {
        name: '왼쪽 위로부터의 사선 하부',
        img: '../assets/images/banner/pattern/diagonal_up_right.png'
    },
    flower: {
        name: '꽃 모양',
        img: '../assets/images/banner/pattern/flower.png'
    },
    globe: {
        name: '지구 모양',
        img: '../assets/images/banner/pattern/globe.png'
    },
    gradient: {
        name: '위쪽 그라데이션',
        img: '../assets/images/banner/pattern/gradient.png'
    },
    gradientUp: {
        name: '아래쪽 그라데이션',
        img: '../assets/images/banner/pattern/gradient_up.png'
    },
    halfHorizontal: {
        name: '중앙 가로선 상부',
        img: '../assets/images/banner/pattern/half_horizontal.png'
    },
    halfHorizontalBottom: {
        name: '중앙 가로선 하부',
        img: '../assets/images/banner/pattern/half_horizontal_bottom.png'
    },
    halfVertical: {
        name: '중앙 세로선 우측',
        img: '../assets/images/banner/pattern/half_vertical.png'
    },
    halfVerticalRight: {
        name: '중앙 세로선 좌측',
        img: '../assets/images/banner/pattern/half_vertical_right.png'
    },
    mojang: {
        name: '무언가',
        img: '../assets/images/banner/pattern/mojang.png'
    },
    rhombus: {
        name: '마름모',
        img: '../assets/images/banner/pattern/rhombus.png'
    },
    skull: {
        name: '해골 모양',
        img: '../assets/images/banner/pattern/skull.png'
    },
    smallStripes: {
        name: '세로줄 무늬',
        img: '../assets/images/banner/pattern/small_stripes.png'
    },
    squareBottomLeft: {
        name: '오른쪽 아래 사각형',
        img: '../assets/images/banner/pattern/square_bottom_left.png'
    },
    squareBottomRight: {
        name: '왼쪽 아래 사각형',
        img: '../assets/images/banner/pattern/square_bottom_right.png'
    },
    squareTopLeft: {
        name: '오른쪽 위 사각형',
        img: '../assets/images/banner/pattern/square_top_left.png'
    },
    squareTopRight: {
        name: '왼쪽 위 사각형',
        img: '../assets/images/banner/pattern/square_top_right.png'
    },
    straightCross: {
        name: '십자',
        img: '../assets/images/banner/pattern/straight_cross.png'
    },
    stripeBottom: {
        name: '아래쪽 가로띠',
        img: '../assets/images/banner/pattern/stripe_bottom.png'
    },
    stripeCenter: {
        name: '중앙 세로띠',
        img: '../assets/images/banner/pattern/stripe_center.png'
    },
    stripeDownLeft: {
        name: '왼쪽 위로부터의 사선',
        img: '../assets/images/banner/pattern/stripe_downleft.png'
    },
    stripeDonwRight: {
        name: '오른쪽 위로부터의 사선',
        img: '../assets/images/banner/pattern/stripe_downright.png'
    },
    stripeLeft: {
        name: '오른쪽 세로띠',
        img: '../assets/images/banner/pattern/stripe_left.png'
    },
    stripeMiddle: {
        name: '중앙 가로띠',
        img: '../assets/images/banner/pattern/stripe_middle.png'
    },
    stripeRight: {
        name: '왼쪽 세로띠',
        img: '../assets/images/banner/pattern/stripe_right.png'
    },
    stripeTop: {
        name: '위쪽 세로띠',
        img: '../assets/images/banner/pattern/stripe_top.png'
    },
    triangleBottom: {
        name: '하단 삼각형',
        img: '../assets/images/banner/pattern/triangle_bottom.png'
    },
    triangleTop: {
        name: '상단 삼각형',
        img: '../assets/images/banner/pattern/triangle_top.png'
    },
    trianglesBottom: {
        name: '아래쪽 톱니 모양',
        img: '../assets/images/banner/pattern/triangles_bottom.png'
    },
    trianglesTop: {
        name: '위쪽 톱니 모양',
        img: '../assets/images/banner/pattern/triangles_top.png'
    }
}


/*//--- Classes ---//*/

/*/-- Banner --/*/
/* Layer */
class BannerLayer {
    constructor(pattern, color) {
        this.pattern = pattern;
        this.color = color;

        // Layer Canvas
        this.canvas = document.createElement('canvas');
        this.canvas.width = 20;
        this.canvas.height = 40;
        this.canvas.classList.add('pattern');
        document.getElementById('preview').appendChild(this.canvas);

        /* Layer */
        // Item
        this.layerItem = document.createElement('li');
        this.layerItem.addEventListener('click', (e) => {
            if (this.layerItem.classList.contains('selected')) {
                e.preventDefault();
            }

            var layerItems = Array.from(document.querySelectorAll('#layerList>li'));
            var index = layerItems.indexOf(this.layerItem);

            if (!layerItems[index]) {
                return;
            }
            
            selectedLayer = Banner.length - index - 1;
            layerItems.forEach(item => {
                item.classList.remove('selected');
            });
            layerItems[index].classList.add('selected');
            
            var colors = Array.from(document.querySelectorAll('#colorPicker>span'));
            colors.forEach(color => {
                color.classList.remove('selected');
            });
            
            var colorIndex;
            var colorKeys = Object.keys(Color);
            for (let i = 0; i < colorKeys.length; i++) {
                if (Color[colorKeys[i]] == this.color) {
                    colorIndex = i;
                    break;
                }
            }
            colors[colorIndex].classList.add('selected');
        });
        var layerList = document.getElementById('layerList');
        layerList.insertBefore(this.layerItem, layerList.childNodes[0]);
        
        // Thumbnail
        this.thumbnail = document.createElement('canvas');
        this.thumbnail.width = 20;
        this.thumbnail.height = 40;
        this.thumbnail.classList.add('thumbnail');
        this.layerItem.appendChild(this.thumbnail);

        // Name
        this.patternName = document.createElement('span');
        this.patternName.innerHTML = this.pattern.name;
        this.patternName.classList.add('name');
        this.layerItem.appendChild(this.patternName);

        if (pattern == Pattern.base) {
            this.canvas.id = 'base';
            this.layerItem.classList.add('selected');
            this.layerItem.id = 'background';
        }
        else {
            // Delete Icon
            var deleteIcon = document.createElement('span');
            deleteIcon.classList.add('delete');
            deleteIcon.appendChild(document.createElement('span'));
            deleteIcon.appendChild(document.createElement('span'));
            deleteIcon.addEventListener('click', () => {
                var deleteIcons = Array.from(document.querySelectorAll('#layerList>li>.delete'));
                var index = Banner.length - deleteIcons.indexOf(this.layerItem.lastChild) - 1;

                if (Banner[index].layerItem.classList.contains('selected')) {
                    Banner[index - 1].layerItem.classList.add('selected');
                    
                    var colors = Array.from(document.querySelectorAll('#colorPicker>span'));
                    colors.forEach(color => {
                        color.classList.remove('selected');
                    });
                    
                    var colorIndex;
                    var colorKeys = Object.keys(Color);
                    for (let i = 0; i < colorKeys.length; i++) {
                        if (Color[colorKeys[i]] == Banner[index - 1].color) {
                            colorIndex = i;
                            break;
                        }
                    }
                    colors[colorIndex].classList.add('selected');
                }
                Banner[index].canvas.remove();
                Banner[index].layerItem.remove();
                Banner.splice(index, 1);
            });
            this.layerItem.appendChild(deleteIcon);
        }

        this.setLayer(pattern, color);
    }

    drawLayer() {
        var canvasContext = this.canvas.getContext('2d');
        var thumbnailContext = this.thumbnail.getContext('2d');
        var img = new Image();
        img.addEventListener('load', () => {
            canvasContext.clearRect(0, 0, 20, 40);
            thumbnailContext.clearRect(0, 0, 20, 40);
            canvasContext.drawImage(img, 0, 0, 20, 40);
            thumbnailContext.drawImage(img, 0, 0, 20, 40);

            canvasContext.globalCompositeOperation = 'multiply';
            thumbnailContext.globalCompositeOperation = 'multiply';
            canvasContext.fillStyle = this.color;
            thumbnailContext.fillStyle = this.color;
            canvasContext.fillRect(0, 0, 20, 40);
            thumbnailContext.fillRect(0, 0, 20, 40);

            if (this.pattern != Pattern.base) {
                canvasContext.globalCompositeOperation = 'destination-in';
                thumbnailContext.globalCompositeOperation = 'destination-in';
                canvasContext.drawImage(img, 0, 0, 20, 40);
                thumbnailContext.drawImage(img, 0, 0, 20, 40);
            }
        }, false);
        img.src = this.pattern.img;
        this.patternName.innerHTML = this.pattern.name;
    }

    setLayer(pattern, color) {
        this.pattern = pattern;
        this.color = color;
        this.drawLayer();
    }

    setPattern(pattern) {
        this.pattern = pattern;
        this.drawLayer();
    }

    setColor(color) {
        this.color = color;
        this.drawLayer();
    }
}

/* Banner Data */
var Banner = [
    new BannerLayer(Pattern.base, Color.white),
    new BannerLayer(Pattern.gradientUp, Color.lightBlue),
    new BannerLayer(Pattern.globe, Color.lime)
];
var selectedLayer = 0;


/*//--- Functions ---//*/

// Layer Item Click Event
function selectLayerItem(item) {
    selectedLayer = Banner.indexOf(item);
}


/*//--- On Click Event ---//*/

/*/-- Color Picker --/*/
var colors = document.querySelectorAll('#colorPicker>span');
colors.forEach(color => {
    color.addEventListener('click', (e) => {
        if (color.classList.contains('selected')) {
            e.preventDefault();
            return;
        }

        colors.forEach(element => {
            element.classList.remove('selected');
        });
        color.classList.add('selected');

        Banner[selectedLayer].setColor(Color[color.id]);
    });
});

var addLayer = document.getElementById('addLayer');
addLayer.addEventListener('click', (e) => {
    addLayer.classList.toggle('opened');
});