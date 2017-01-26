function ImageFromSheet(spritesheet, width, height, sheetX, sheetY, duration) {
    this.spritesheet = spritesheet;
    this.width = width;
    this.height = height;
    this.sheetX = sheetX;
    this.sheetY = sheetY;
    if (duration !== undefined) {
        this.duration = duration;
    } else {
        this.duration = 0;
    }
};