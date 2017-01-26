function Game() {
    this.hero = null;
    this.cloneDude = null;

    this.init();
};

Game.prototype.init = function() {
    LOGGER.log("creating the game");
    this.hero = new Hero();

    var bgImage = new ImageFromSheet(ASSET_LOADER.getImage("background"), CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
    this.background = new Renderable(bgImage, 0, 0);

    var monsterImage = new ImageFromSheet(ASSET_LOADER.getImage("monster"), 32, 32, 0, 0);
    this.monster = new Renderable(monsterImage, 100, 100);
};

Game.prototype.update = function() {
    RENDERER.addToRenderList(this.background);
    RENDERER.addToRenderList(this.monster);

    this.updateGameObjects();

    RENDERER.render();
};

Game.prototype.updateGameObjects = function() {
    this.hero.update();
};

