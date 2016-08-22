var monster1, monster2, bigMonster, background, clicked, boom, ranWidth, ranHeight, heart1, heart2, heart3, heart4, gameOver, pauseScr, req;
var score = 0;
var speedAll = 0.5;
var heart = [heart1, heart2, heart3, heart4];
var pauseBtn = false;
var playAndStop = true;
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;

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
    //start drawing canvas
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 450;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.req = requestAnimationFrame(updateGameArea);
        window.addEventListener('click', function(ev) {
            gameArea.x = ev.pageX;
            gameArea.y = ev.pageY;
        })
    },
    //clear canvas
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    //stop drawing canvas
    stop : function() {
        cancelAnimationFrame(this.req);
    }
}

//set the properties for monster
function component(width, height, color, x, y, type) {
    //set speed all monster
    if (score <= 0) {
        speedAll = 0.5;
    }
    else {        
        speedAll = 0.5*((score + 50) / 50);
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
    this.speedXBig = (Math.round(Math.random())*2-1)*2*speedAll; //(Math.round(Math.random())*2-1) = 1 or -1
    this.speedYBig = (Math.round(Math.random())*2-1)*2*speedAll;
    this.x = x;
    this.y = y;
    //draw all
    this.update = function() {
        ctx = gameArea.context;
        //draw image
        if (type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        //draw text
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
    //update new position for monster
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
    //return a value when click
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

//update game
function updateGameArea(time) {
    if (playAndStop) {
        var subScore = 0;

        gameArea.clear();
        background.update();
        if (gameArea.x && gameArea.y) {
            //add when click monster
            if (monster1.clicked()) {
                boom = new component(70, 70, "img/boom-copy.png", monster1.x, monster1.y, "image");
                createMonster.one();
                score += 5;
                subScore++;
            }
            if (monster2.clicked()) {
                boom = new component(70, 70, "img/boom-copy.png", monster2.x, monster2.y, "image");
                createMonster.two();
                score += 5;
                subScore++;
            }
            if (bigMonster.clicked()) {
                boom = new component(150, 156, "img/boom-copy.png", bigMonster.x, bigMonster.y, "image");
                createMonster.three();
                score += 10;
                subScore++;
            }
            //expect when miss click
            if (subScore == 0) {
                score -= 5;
            }
            subScore = 0;
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
        //appear GAME OVER
        if (heart.length == 0) {
            gameOver.text = "GAME OVER";
            gameOver.update();
            gameArea.stop();
            return;
        }
    }
    gameArea.req = requestAnimationFrame(updateGameArea);
}

//create monster1, monster2, bigMonster
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

//create life
function createHeart() {
    for (var i = 0; i < heart.length; i++) {
        heart[i] = new component(50, 45, "img/Love-Heart.png", 50 + 55 * i, 20, "image");
    };
}

//create game over
function createGameOver() {
    gameOver = new component("60px", "Arial", "red", 225, 250, "text");
}

//creating random position
function ranWidHei() {
    ranWidth = Math.floor(Math.random()*3)*365;
    ranHeight = Math.floor(Math.random()*3)*190;
    if ((ranWidth == 365) && (ranHeight == 190)) {
        ranWidth = 0;
        ranHeight = 0;
    }
}

//pause button
function pauseGame() {
    pauseBtn = !pauseBtn;
    if (pauseBtn) {
        pauseScr = new component(256, 256, "img/Pause-icon.png", 272, 97, "image");
        pauseScr.update();
        playAndStop = false;
    }
    else {
        score += 5;
        playAndStop = true;
    }
}

//reload button
function reloadGame() {
    score = 0;
    speedAll = 0.5;
    heart = [heart1, heart2, heart3, heart4];
    score += 5;
    gameArea.stop();
    startGame();
}

//boom button
function rocketGame() {
    speedAll = 0.5;
    score += 5;
    gameArea.stop();
    startGame();
}