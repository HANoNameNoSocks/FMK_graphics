function AssetLoader() {
    this.totalToLoad = APP_TOTAL_ASSETS_NB;
    this.totalLoaded = 0;
    this.images = [];
    this.isReady = false;
};

AssetLoader.prototype.load = function() {
    LOGGER.log("loading assets");
    this._loadImage("heroIdle", "resources/img/hero_idle.png", HERO_WIDTH, HERO_HEIGHT);
    this._loadImage("monster", "resources/img/monster.png", MONSTER_WIDTH, MONSTER_HEIGHT);
    this._loadImage("background", "resources/img/background.png", CANVAS_WIDTH, CANVAS_HEIGHT);
};

AssetLoader.prototype.getImage = function(name) {
    return this.images[name];
};

AssetLoader.prototype._loadImage = function(name, src, width, height) {
    var img = new Image(width, height);
    img.src = src;

    var me = this;
    img.onload = function() {
        me.images[name] = img;

        me.totalLoaded++;

        if (me.totalLoaded === me.totalToLoad) {
            LOGGER.log("assets loaded");
            me.isReady = true;
        }
    };
};
    
