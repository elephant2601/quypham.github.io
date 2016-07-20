var monster1, monster2, bigMonster, background, clicked, boom, ranWidth, ranHeight, heart1, heart2, heart3, heart4, gameOver, pauseScr, reqAnimation;
var score = 0;
var speedAll = 0.5;
var heart = [heart1, heart2, heart3, heart4];
var pauseBtn = true;

function startGame() {
    createMonster.one();
    createMonster.two();
    createMonster.three();
    createHeart();
    createGameOver();
    createScore = new component("30px", "Arial", "red", 600, 40, "text");
    background = new component(800, 450, "img/bg.jpg", 0, 0, "image");
    gameArea.start();
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 450;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('click', function(ev) {
            gameArea.x = ev.pageX;
            gameArea.y = ev.pageY;
        })
        /*window.addEventListener('mousedown', function(ev) {
            gameArea.x = ev.pageX;
            gameArea.y = ev.pageY;
        })
        window.addEventListener('mouseup', function(ev) {
            gameArea.x = false;
            gameArea.y = false;
        })*/
        /*reqAnimation = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                window.oRequestAnimationFrame ;
        if(reqAnimation)
            updateGameArea();
        else
            alert("Your browser doesn't support requestAnimationFrame.");*/
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {        
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    if (score > 0) {
        if ((score % 50) == 0) {
            speedAll += 0.5;
        }
    }
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 2*speedAll;
    this.speedY = 1*speedAll;
    this.speedXBig = (Math.round(Math.random())*2-1)*2*speedAll; // +1 or -1
    this.speedYBig = (Math.round(Math.random())*2-1)*2*speedAll;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = gameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        else if (type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        if (width == 70) {
            if (this.x <= 232)  {
                this.x += this.speedX;
                if (this.x > 232) {
                    this.x = 232;
                    this.speedX = -this.speedX;
                }
            }
            if (this.y <= 116) {
                this.y += this.speedY;
                if (this.y > 116) {
                    this.y = 116;
                    this.speedY = -this.speedY;
                }
            }
            if (this.x >= 498) {
                this.x -= this.speedX;
                if (this.x < 498) {
                    this.x = 498;
                    this.speedX = -this.speedX;
                }
            }
            if (this.y >= 266) {
                this.y -= this.speedY;
                if (this.y < 266) {
                    this.y = 266;
                    this.speedY = -this.speedY;
                }
            }
            if (monster1.x <= -70 || monster1.x >= 800 || monster1.y <= -70 || monster1.y >= 450) {
                createMonster.one();
                score -= 5;
                heart.splice(heart.length - 1, 1);
            }
            if (monster2.x <= -70 || monster2.x >= 800 || monster2.y <= -70 || monster2.y >= 450) {
                createMonster.two();
                score -= 5;
                heart.splice(heart.length - 1, 1);
            }
        }
        if (color == "img/dragon.png") {
            this.x += this.speedXBig;
            this.y += this.speedYBig;
            if (this.x <= 0 || this.x >= 650) {
                this.speedXBig = -this.speedXBig;
            }
            if (this.y <= 0 || this.y >= 294) {
                this.speedYBig = -this.speedYBig;
            }
        }
    }
    this.clicked = function() {
        var left = this.x;
        var right = this.x + this.width;
        var top = this.y;
        var bot = this.y + this.height;
        if (gameArea.x < left || gameArea.x > right || gameArea.y < top || gameArea.y > bot) {
            clicked = false;
        }
        else {
            clicked = true;
        }
        return clicked;
    }
}

function updateGameArea() {
    gameArea.clear();
    background.update();
    if (gameArea.x && gameArea.y) {
        if (monster1.clicked()) {
            boom = new component(70, 70, "img/boom-copy.png", monster1.x, monster1.y, "image");
            createMonster.one();
            score += 5;
        }
        if (monster2.clicked()) {
            boom = new component(70, 70, "img/boom-copy.png", monster2.x, monster2.y, "image");
            createMonster.two();
            score += 5;
        }
        if (bigMonster.clicked()) {
            boom = new component(150, 156, "img/boom-copy.png", bigMonster.x, bigMonster.y, "image");
            createMonster.three();
            score += 10;
        }
        /*if (!monster1.clicked() && !monster2.clicked() && !bigMonster.clicked()) {
            score -= 5;
        }
        var a = !monster1.clicked() && !monster2.clicked() && !bigMonster.clicked();
        document.getElementById("demo").innerHTML = a;*/
        gameArea.x = gameArea.y = false;
    }
    monster1.newPos();
    monster2.newPos();
    bigMonster.newPos();
    createScore.text = "SCORE: " + score;
    for (i = 0; i < heart.length; i++) {        
        heart[i].update();
    }
    createScore.update();
    if (score > 0) {
        boom.update();
    }
    monster1.update();
    monster2.update();
    bigMonster.update();
    if (heart.length == 0) {
        gameOver.text = "GAME OVER";
        gameOver.update();
        gameArea.stop();
    }
    reqAnimation(updateGameArea);
}

var createMonster = {
    one : function() {
        ranWidHei();
        monster1 = new component(70, 70, "img/monster" + (Math.floor(Math.random()*4)+1) + ".png", ranWidth, ranHeight, "image");
    },
    two : function() {
        ranWidHei();
        monster2 = new component(70, 70, "img/monster" + (Math.floor(Math.random()*4)+1) + ".png", ranWidth, ranHeight, "image");
    },
    three : function() {
        bigMonster = new component(150, 156, "img/dragon.png", 325, 147, "image");
    }
}

function createHeart() {
    for (var i = 0; i < heart.length; i++) {
        heart[i] = new component(50, 45, "img/Love-Heart.png", 50 + 55 * i, 20, "image");
    };
}

function createGameOver() {
    gameOver = new component("60px", "Arial", "red", 225, 250, "text");
}

function ranWidHei() {
    ranWidth = Math.floor(Math.random()*3)*365;
    ranHeight = Math.floor(Math.random()*3)*190;
    if ((ranWidth == 365) && (ranHeight == 190)) {
        ranWidth = 0;
        ranHeight = 0;
    }
}

function pauseGame() {
    if (pauseBtn) {
        pauseScr = new component(256, 256, "img/Pause-icon.png", 0, 0, "image");
        pauseScr.update();
        gameArea.stop();
    }
    else {
        setInterval(updateGameArea, 20);
    }
    document.getElementById("demo").innerHTML = pauseBtn;
    pauseBtn = !pauseBtn;
}

function reloadGame() {
    score = 0;
    speedAll = 0.5;
    heart = [heart1, heart2, heart3, heart4];
    startGame();
}

function rocketGame() {
    speedAll = 0.5;
    /*var x = heart.length;
    heart = [heart1, heart2, heart3, heart4];
    heart.splice(x -1, 4 -x);*/
    startGame();
    /*if (heart.length == 0) {
        gameArea.stop();
    }*/
}
