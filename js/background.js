class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.x = 0
    this.y = 0

    this.vx = -2

    this.img = new Image()
    this.img.src = "http://www.vbforums.com/attachment.php?attachmentid=113103&d=1398112502"
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )

    this.ctx.drawImage(
      this.img,
      this.x + this.w,
      this.y,
      this.w,
      this.h
    )
  }

  move() {
    this.x += this.vx

    if (this.x + this.w <= 0) {
      this.x = 0
    }
  }
}