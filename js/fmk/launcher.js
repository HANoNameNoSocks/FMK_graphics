function Launcher() {
    GAME = null;
    this._init();
};

Launcher.prototype.run = function() {
    if (ASSET_LOADER.isReady) {
        if (GAME === null) {
            GAME = new Game(CTX);
        }
        GAME.update();
    }

    requestAnimationFrame(LAUNCHER.run);
};

Launcher.prototype._init = function() {
    this._initTools();
    this._initCanvas();
    this._manageCrossBrowser();
};

Launcher.prototype._initCanvas = function() {
    var canvas = document.createElement("canvas");
    CTX = canvas.getContext("2d");

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    document.body.appendChild(canvas);
};

Launcher.prototype._initTools = function() {
    LOGGER = new Logger();

    ASSET_LOADER = new AssetLoader();
    ASSET_LOADER.load();

    RENDERER = new Renderer();
};

Launcher.prototype._manageCrossBrowser = function() {
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || 
        w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
};