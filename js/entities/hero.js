function Hero() {
    this.x = 0;
    this.y = 0;
    this.idleAnim = null;

    this._init();
};

Hero.prototype.update = function() {
    if (this.isMoving) {
        this.idleAnim.play(this.x, this.y);
    } else {
        this.idleAnim.pause(this.x, this.y);
    }
};

Hero.prototype._init = function() {
    this.x = CANVAS_WIDTH / 2;
    this.y = CANVAS_HEIGHT / 2;

    this._createAnim();
    this._createMouseControls();
};

Hero.prototype._createAnim = function() {
    var idleSheet = ASSET_LOADER.getImage("heroIdle");
    var idleImages = [];

    idleImages[0] = new ImageFromSheet(idleSheet, 65, 46, 0, 0, 10);
    idleImages[1] = new ImageFromSheet(idleSheet, 65, 46, 65, 0, 10);
    idleImages[2] = new ImageFromSheet(idleSheet, 65, 46, 130, 0, 10);

    this.idleAnim = new Anim(idleImages);
};

Hero.prototype._createMouseControls = function() {
    var me = this;

    addEventListener("mousedown", function (e) {
        me.isMoving = true;
    }, false);

    addEventListener("mouseup", function (e) {
        me.isMoving = false;
    }, false);
};