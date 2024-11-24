class Piece {
  constructor(position, color, moveRule) {
    this.position = position; // Наприклад: [1, 1] або [8, 1]
    this.color = color;       // 'White' або 'Black'
    this.numberOfMoves = 0;   // Лічильник переміщень
    this.moveRule = moveRule; // Об'єкт з логікою руху
  }

  move(newPosition) {
    if (Piece.checkPositionRange(newPosition)) {
      const allMoves = this.moveRule.getAllMoves();
      if (allMoves.some(move => move[0] === newPosition[0] && move[1] === newPosition[1])) {
        this.position = newPosition;
        this.numberOfMoves += 1;
        return { success: true, position: this.position };
      } else {
        return { success: false, reason: "Invalid move" };
      }
    } else {
      return { success: false, reason: "Position out of range" };
    }
  }

  static checkPositionRange(position) {
    return position.every(coordinate => coordinate >= 1 && coordinate <= 8);
  }

  printInfo() {
    console.log(this.toString());
  }

  toString() {
    return `${this.color} ${this.constructor.name} at ${this.position} (Moves: ${this.numberOfMoves})`;
  }
}

module.exports = Piece;
