class Game {
  constructor(ctx){
    this.ctx = ctx
    this.back = new Background(ctx)
    this.intervalId = null;
  }

  run() {
    /*this.intervalId = setInterval(() => {*/
      this._clear()
      this._draw()
      this._move()
   /* }, 1000 / 10)*/
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  _draw() {
    this.back.draw()
  }

  
  
  _move() {
    this.back.move()
  }
}