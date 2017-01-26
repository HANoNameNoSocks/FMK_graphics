function Anim(frames) {
    this.frames = frames;
    this.currentFrameIdx = 0;
    this.duration = 0;
    this.isPlaying = false;
};

Anim.prototype.play = function(canvasX, canvasY) {
    this.duration++;
    var frame = this.frames[this.currentFrameIdx];

    if (this.duration > frame.duration) {
        this.duration = 0;

        if (this.currentFrameIdx < this.frames.length -1) {
            this.currentFrameIdx++;
        } else {
            this.currentFrameIdx = 0;
        }
    }

    var renderable = new Renderable(frame, canvasX, canvasY);
    RENDERER.addToRenderList(renderable);
};

Anim.prototype.pause = function(canvasX, canvasY) {
    var frame = this.frames[this.currentFrameIdx];
    var renderable = new Renderable(frame, canvasX, canvasY);
    RENDERER.addToRenderList(renderable);
};

Animation.prototype.restart = function() {
    this.currentFrameIdx = 0;
    this.duration = 0;
    this.play();
};