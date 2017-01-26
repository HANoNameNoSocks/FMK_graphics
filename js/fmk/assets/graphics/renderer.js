function Renderer() {
    this.renderables = [];
};

Renderer.prototype.render = function() {
    CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    for (var i = 0; i < this.renderables.length; i++) {
        var renderable = this.renderables[i];

        CTX.drawImage(
            renderable.image.spritesheet, 
            renderable.image.sheetX, renderable.image.sheetY, 
            renderable.image.width, renderable.image.height, 
            renderable.canvasX, renderable.canvasY, 
            renderable.image.width, renderable.image.height
        );
    }

    this._clearRenderList();
};

Renderer.prototype.addToRenderList = function(renderable) {
    this.renderables.push(renderable);
};

Renderer.prototype._clearRenderList = function(first_argument) {
    this.renderables = [];
};


    
