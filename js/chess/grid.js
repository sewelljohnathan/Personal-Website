
class Square {

    static size = 600/8;

    constructor(color) {
        this.color = color;
        this.piece = null;
        this.isSelected = false;
    }
    draw(ctx) {
        
        if (this.isSelected) {
            ctx.fillStyle = "yellow";
            ctx.fillRect(0, 0, Square.size, Square.size);
            ctx.fillStyle = this.color;
            
            ctx.fillRect(Square.size*0.05, Square.size*0.05, Square.size*0.9, Square.size*0.9);
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(0, 0, Square.size, Square.size);
        }
        if (this.piece != null) {
            this.piece.draw(ctx);
        }
    }
}

export { Square }