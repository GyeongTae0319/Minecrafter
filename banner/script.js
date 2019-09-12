/*//--- Values ---//*/
var Color = {
    Red: "#b02e26",
    Orange: "#f9801d",
    Yellow: "#fed83d",
    Lime: "#80c71f",
    Green: "#5e7c16",
    LightBlue: "#3ab3da",
    Cyan: "#169c9c",
    Blue: "#3c44aa",
    Purple: "#8932b8",
    Magenta: "#c74ebd",
    Pink: "#f38baa",
    White: "#f9fffe",
    LightGray: "#9d9d97",
    Gray: "#474f52",
    Black: "#1d1d21",
    Brown: "#835432"
}

var Pattern = {
    Border: "../assets/images/banner/pattern/border.png",
    Bricks: "../assets/images/banner/pattern/bricks.png",
    Circle: "../assets/images/banner/pattern/circle.png",
    Creeper: "../assets/images/banner/pattern/creeper.png",
    Cross: "../assets/images/banner/pattern/cross.png",
    CurlyBorder: "../assets/images/banner/pattern/curly_border.png",
    DiagonalLeft: "../assets/images/banner/pattern/diagonal_left.png",
    DiagonalRight: "../assets/images/banner/pattern/diagonal_right.png",
    DiagonalUpLeft: "../assets/images/banner/pattern/diagonal_up_left.png",
    DiagonalUpRight: "../assets/images/banner/pattern/diagonal_up_right.png",
    Flower: "../assets/images/banner/pattern/flower.png",
    Globe: "../assets/images/banner/pattern/globe.png",
    Gradient: "../assets/images/banner/pattern/gradient.png",
    GradientUp: "../assets/images/banner/pattern/gradient_up.png",
    HalfHorizontal: "../assets/images/banner/pattern/half_horizontal.png",
    HalfHorizontalBottom: "../assets/images/banner/pattern/half_horizontal_bottom.png",
    HalfVertical: "../assets/images/banner/pattern/half_vertical.png",
    HalfVerticalRight: "../assets/images/banner/pattern/half_vertical_right.png",
    Mojang: "../assets/images/banner/pattern/mojang.png",
    Rhombus: "../assets/images/banner/pattern/rhombus.png",
    Skull: "../assets/images/banner/pattern/skull.png",
    SmallStripes: "../assets/images/banner/pattern/small_stripes.png",
    SquareBottomLeft: "../assets/images/banner/pattern/square_bottom_left.png",
    SquareBottomRight: "../assets/images/banner/pattern/square_bottom_right.png",
    SquareTopLeft: "../assets/images/banner/pattern/square_top_left.png",
    SquareTopRight: "../assets/images/banner/pattern/square_top_right.png",
    StraightCross: "../assets/images/banner/pattern/straight_cross.png",
    StripeBottom: "../assets/images/banner/pattern/stripe_bottom.png",
    StripeCenter: "../assets/images/banner/pattern/stripe_center.png",
    StripeDownLeft: "../assets/images/banner/pattern/stripe_downleft.png",
    StripeDonwRight: "../assets/images/banner/pattern/stripe_downright.png",
    StripeLeft: "../assets/images/banner/pattern/stripe_left.png",
    StripeMiddle: "../assets/images/banner/pattern/stripe_middle.png",
    StripeTop: "../assets/images/banner/pattern/stripe_top.png",
    TriangleBottom: "../assets/images/banner/pattern/triangle_bottom.png",
    TriangleTop: "../assets/images/banner/pattern/triangle_top.png",
    TrianglesBottom: "../assets/images/banner/pattern/triangles_bottom.png",
    TrianglesTop: "../assets/images/banner/pattern/triangles_top.png"
}


/*//--- Preview ---//*/
var preview = {
    base: document.querySelector("#preview>.base"),

    setBaseColor: (color) => {
        var context = preview.base.getContext('2d');
        var baseImg = new Image();
        baseImg.addEventListener('load', () => {
            context.clearRect(0, 0, 20, 40);
            context.drawImage(baseImg, 0, 0, 20, 40);
            context.globalCompositeOperation = "multiply";
            context.fillStyle = color;
            context.fillRect(0, 0, 20, 40);
        }, false);
        baseImg.src = "../assets/images/banner/base.png";
    },

    addPattern: (pattern, color) => {
        var canvas = document.createElement("canvas");
        canvas.width = 20;
        canvas.height = 40;
        canvas.classList.add("pattern");
        document.getElementById("preview").appendChild(canvas);

        var context = canvas.getContext('2d');
        var patternImg = new Image();
        patternImg.addEventListener('load', () => {
            context.drawImage(patternImg, 0, 0, 20, 40);
            context.globalCompositeOperation = "multiply";
            context.fillStyle = color;
            context.fillRect(0, 0, 20, 40);
            context.globalCompositeOperation = "destination-in";
            context.drawImage(patternImg, 0, 0, 20, 40);
        }, false);
        patternImg.src = pattern;
    },
    removePattern: (index) => {
        var target = document.querySelectorAll("#preview>.pattern");
        target[index].parentElement.removeChild(target[index]);
    }
};

preview.setBaseColor(Color.White);
